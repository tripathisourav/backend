import dotenv from 'dotenv'
dotenv.config()
import { PDFParse } from 'pdf-parse'
import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters'
import { MistralAIEmbeddings } from '@langchain/mistralai'  // chunks to embeddings
import fs from 'fs'
import { Pinecone } from '@pinecone-database/pinecone'

const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const index = pc.Index('cohort-2-rag');


let dataBuffer = fs.readFileSync('./story.pdf')

const parser = new PDFParse({
    data: dataBuffer
})


const data = await parser.getText()
console.log(data.text)



const embeddings = new MistralAIEmbeddings({
    apiKey: process.env.MISTRAL_API_KEY,
    model: 'mistral-embed'
})


const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 0,
})


const chunks = await splitter.splitText(data.text)

console.log(chunks, chunks.length)


const docs = await Promise.all(chunks.map(async (chunk, index) => {
    const embedding = await embeddings.embedQuery(chunk)
    return {
        text: chunk,
        embedding
    }
}))

// const docs = await embeddings.embedDocuments(chunks)
console.log(docs) // 1024 coordinates each chunk



const result = await index.upsert({
    records: docs.map((doc, i) => ({
        id: `doc-${i}`,
        values: doc.embedding,
        metadata: {
            text: doc.text
        }
    }))
})





const queryEmbedding = await embeddings.embedQuery('How was the the internship experience?')


console.log(queryEmbedding)


const results = await index.query({
    topK: 2,
    vector: queryEmbedding,
    includeMetadata: true
})

console.log(JSON.stringify(results))

// embeddings arraay of numbers, each number is a coordinate in the embedding space, the more similar the chunks are, the closer they will be in the embedding space, so we can use this to find similar chunks when we query the index later on.