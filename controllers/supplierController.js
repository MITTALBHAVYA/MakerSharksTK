import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { Supplier } from "../models/supplierModel.js";

export const getSuppliers = catchAsyncErrors(async (req, res, next) => {
    try {
        const { 
            location,
            natureOfBusiness, 
            manufacturingProcesses, 
            page = 1, // Default to page 1
            limit = 10 // Default limit to 10 items per page
        } = req.query;

        const suppliers = await Supplier.find({
            location,
            natureOfBusiness,
            manufacturingProcesses,
        })
        .limit(parseInt(limit))
        .skip((page - 1) * limit); // Skip documents for pagination

        const totalSuppliers = await Supplier.countDocuments({
            location,
            natureOfBusiness,
            manufacturingProcesses,
        });

        res.json({
            totalSuppliers,
            totalPages: Math.ceil(totalSuppliers / limit),
            currentPage: parseInt(page),
            suppliers,
        });
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
});
