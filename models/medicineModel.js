import mongoose from "mongoose";

const medInfoSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    uses: {
        type: [Object], blackbox: true,
    },
    dosage: {
        type: String,
    },
    sideeffects: {
        type: [Object], blackbox: true,
    },
    warnings: {
        type: [Object], blackbox: true,
    },
    alternatives: {
        type: [Object], blackbox: true,
    },
},
    {
        timestamps: true
    }
)

const MedInfo = mongoose.model('MedInfo', medInfoSchema);

export default MedInfo;