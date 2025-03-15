import geminiModel from "../configs/geminiConfig.js"

// Get medicine info
export const medicineInfo = async (req, res) => {
    try {
        const medicineName = req.body.medicineName

        const prompt = `
        You are a medical assistant providing accurate and reliable information about medicines.
        Given a medicine name, provide a detailed description, including:

        1. **General Description:** Briefly explain what the medicine is and its primary function.
        2. **Uses:** List the medical conditions it treats.
        3. **Dosage Information:** Recommended dosage and administration method.
        4. **Side Effects:** Common and severe side effects.
        5. **Warnings & Precautions:** Important safety information, including contraindications and interactions.
        6. **Alternative Medicines:** List alternative medicines with similar effects.

        **Medicine Name:** ${medicineName}

        **Output Format (JSON):**
        \`\`\`json
        {
        "name": "${medicineName}",
        "description": "...",
        "uses": ["...", "..."],
        "dosage": "...",
        "side effects": ["...", "..."],
        "warnings": ["...", "..."],
        "alternatives": ["...", "..."]
        }
        \`\`\`
        Provide concise, medically accurate responses. Keep the language user-friendly but professional.
        `

        const result = await geminiModel.generateContent(prompt)
        const resText = result.response.text()

        // Convert the response into JSON format
        const jsonStart = resText.indexOf("{");
        const jsonEnd = resText.lastIndexOf("}");
        const jsonString = resText.substring(jsonStart, jsonEnd + 1);

        return res.status(200).json({
            status: 200,
            message: jsonString
        })

    } catch (error) {
        console.error("Error in getting med info, ", error)
    }
}
