import mongoose from "mongoose";

const supplierSchema = mongoose.Schema({
    companyName: {
        type: String,
        required: true,
    },
    website: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    natureOfBusiness: {
        type: String,
        enum: ['small_scale', 'medium_scale', 'large_scale'],
        required: true,
    },
    manufacturingProcesses: {
        type: String,
        enum: ['moulding', '3d_printing', 'casting', 'coating'],
        required: true,
    },
});

export const Supplier = mongoose.model("Supplier",supplierSchema);