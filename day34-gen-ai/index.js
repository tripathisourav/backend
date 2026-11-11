import 'dotenv/config'
import readline from 'readline/promises' // rl mein promise create nhi krna padega 
import { ChatMistralAI } from "@langchain/mistralai"
import { HumanMessage, tool, createAgent } from 'langchain';
import { sendEmail } from './mail.service.js';
import * as z from 'zod' // format of response


const emailTool = tool(
    sendEmail, // function first should always return a string
    {
        name: 'emailTool',
        description: 'use this tool to send an email',
        schema: z.object({
            to: z.string().describe("the recipient's email adress"),
            html: z.string().describe("The HTML content of the email"),
            subject: z.string().describe("The subject of the email")
        })
    }
)


// Create readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// const name = await rl.question("what is your name? ");
// console.log(`Hello ${name}`);
// rl.close();


// langchain helps in communicating with any ai service providers in the best way



const model = new ChatMistralAI({
    model: "mistral-small-latest",
    apiKey: process.env.MISTRAL_API_KEY
})


// An agent is a model calling tools in a loop until a given task is complete.
const agent = createAgent({
    model,
    tools: [emailTool]
})


// with  readline agar readline/promises use krenga toh directly await kr skta hai user input ko without creating a promise
// while (true) {
//   const userInput = await new Promise((resolve) => {
//     rl.question("You: ", (input) => {
//       resolve(input);
//     });
//   });

//   if (userInput.toLowerCase() === "exit") {
//     console.log("Exiting the chat...");
//     break;
//   }
// }

const messages = [];

while (true) {
    const userInput = await rl.question("\x1b[32mYou:\x1b[0m ");

    messages.push(new HumanMessage(userInput))
    // messages.push(userInput) // messages array ['hi', AIMessage]

    if (userInput.toLowerCase() === 'exit') {
        console.log('Exiting the chat... ');
        break;
    }

    // const res = await model.invoke(userInput)

    // const res = await model.invoke({messages}) // not scalable approach high cost and slow performance

    const res = await agent.invoke({ messages })

    messages.push(res.messages[res.messages.length - 1])

    // console.log("response -> ", res);

    console.log(`\x1b[34m[AI]\x1b[0m ${res.messages[res.messages.length - 1].content}`);

    console.log("/nmessages array", messages);

}

rl.close()




// task - tavily - internet search to ai prompt - tavily ki help se ekdam current recent info laani hai or model ko deni hai