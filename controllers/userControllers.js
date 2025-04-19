import geminiModel from "../configs/geminiConfig.js"
import MedInfo from "../models/medicineModel.js"

// Get medicine info
export const medicineInfo = async (req, res) => {
    try {
        const medicineName = req.body.medicineName

        // Search medicine info on DB
        const existInDB = await MedInfo.findOne({ name: medicineName })

        if (existInDB) {
            console.log("existInDB", existInDB)
            return res.status(400).json({
                status: 400,
                message: "Med Info found on db",
                medName: existInDB.name,
                medDesc: existInDB.description,
                medUses: existInDB.uses,
                medDosage: existInDB.dosage,
                medSideEffects: existInDB.sideeffects,
                medWarnings: existInDB.warnings,
                medAlternatives: existInDB.alternatives
            })
        }

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
        "sideeffects": ["...", "..."],
        "warnings": ["...", "..."],
        "alternatives": ["...", "..."]
        }
        \`\`\`
        Provide concise, medically accurate responses. Keep the language user-friendly but professional.
        `

        const result = await geminiModel.generateContent(prompt)
        const resText = result.response.text()

        // Convert the response into string format
        const stringStart = resText.indexOf("{");
        const stringEnd = resText.lastIndexOf("}");
        const jsonString = resText.substring(stringStart, stringEnd + 1);

        // Convert the string to JSON
        const jsonMedData = JSON.parse(jsonString)

        const newMedInfo = new MedInfo({
            name: jsonMedData.name,
            description: jsonMedData.description,
            uses: jsonMedData.uses,
            dosage: jsonMedData.dosage,
            sideeffects: jsonMedData.sideeffects,
            warnings: jsonMedData.warnings,
            alternatives: jsonMedData.alternatives
        })

        await newMedInfo.save()

        return res.status(200).json({
            status: 200,
            message: jsonMedData
        })

    } catch (error) {
        console.error("Error in getting med info, ", error)

        return res.status(500).json({
            status: 500,
            message: "Error in getting med info",
            error: error
        })
    }
}
