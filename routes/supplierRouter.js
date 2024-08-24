import express from 'express';
import { getSuppliers } from '../controllers/supplierController.js';

const router = express.Router();

/**
 * @swagger
 * /api/supplier/query:
 *   post:
 *     summary: Retrieve a list of suppliers
 *     parameters:
 *       - in: query
 *         name: location
 *         schema:
 *           type: string
 *         required: true
 *         description: The location of the supplier
 *       - in: query
 *         name: natureOfBusiness
 *         schema:
 *           type: string
 *         required: true
 *         description: The nature of the supplier's business (small_scale, medium_scale, large_scale)
 *       - in: query
 *         name: manufacturingProcesses
 *         schema:
 *           type: string
 *         required: true
 *         description: The manufacturing process capability (moulding, 3d_printing, casting, coating)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         required: false
 *         description: The number of suppliers to return (default is 10)
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         required: false
 *         description: The page number for pagination (default is 1)
 *     responses:
 *       200:
 *         description: A list of suppliers
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalSuppliers:
 *                   type: integer
 *                 totalPages:
 *                   type: integer
 *                 currentPage:
 *                   type: integer
 *                 suppliers:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       companyName:
 *                         type: string
 *                       website:
 *                         type: string
 *                       location:
 *                         type: string
 *                       natureOfBusiness:
 *                         type: string
 *                       manufacturingProcesses:
 *                         type: string
 *       500:
 *         description: Server error
 */
router.post("/query", getSuppliers);

export default router;
