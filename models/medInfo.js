import mongoose from "mongoose";

const medInfoSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    uses: {
        type: String,
    },
    dosage: {
        type: String,
    },
    warnings: {
        type: String,
    },
    alternatives: {
        type: String,
    },
},
    {
        timestamps: true
    }
)

const MedInfo = mongoose.model('MedInfo', medInfoSchema);

export default MedInfo;