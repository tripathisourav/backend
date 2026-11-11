import { ChatGoogle } from "@langchain/google"
import { ChatMistralAI } from "@langchain/mistralai"
import { ChatCohere } from "@langchain/cohere"
import { ChatGroq } from "@langchain/groq"
import app_config from "../config/config.js"


export const geminiModel = new ChatGoogle({
    model: "gemini-3.5-flash-lite",
    apiKey: app_config.GOOGLE_API_KEY
})


export const mistralModel = new ChatMistralAI({
    model: "mistral-medium-3-5",
    apiKey: app_config.MISTRAL_API_KEY
});

export const cohereModel = new ChatCohere({
    model: "command-a-03-2025",
    apiKey: app_config.COHERE_API_KEY
})

export const groqModel = new ChatGroq({
    model: "openai/gpt-oss-20b",
    apiKey: app_config.GROQ_API_KEY
})