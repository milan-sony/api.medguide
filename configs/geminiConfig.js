import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

console.log("config - API KEY: ", process.env.GEMINI_API_KEY)
console.log("PORT: ", process.env.PORT)

const geminiModel = genAI.getGenerativeModel(
    {
        model: "gemini-1.5-flash",
        systemInstruction: "You are a pharmacist. Your work is to identify the medicine and give information about the medicine",
    }
)

export default geminiModel