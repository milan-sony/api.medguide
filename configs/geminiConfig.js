import { GoogleGenerativeAI } from "@google/generative-ai"
import dotenv from "dotenv"

dotenv.config()

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

const geminiModel = genAI.getGenerativeModel(
    {
        model: "gemini-1.5-flash",
        systemInstruction: "You are a pharmacist. Your work is to identify the medicine and give information about the medicine",
    }
)

export default geminiModel