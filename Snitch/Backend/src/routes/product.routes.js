import express from 'express';
import { authenticateSeller } from '../middlewares/auth.middleware.js';
import { createProduct,  getSellerProducts, getProductDetails, addProductVariant, deleteProductVariant, deleteProduct, getProducts, searchSuggestions } from '../controllers/product.controller.js';
import multer from "multer";
import { createProductValidator } from '../validator/product.validator.js';


const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024 // 5 MB
    }
})


const router = express.Router();


/**
 * @route POST /api/products
 * @description Create a new product
 * @access Private (Seller only)
 */
router.post("/", authenticateSeller, upload.array('images', 7), createProductValidator, createProduct)


/** 
 * @route GET /api/products/seller
 * @description Get all products of the authenticated seller
 * @access Private (Seller only)
 */
router.get("/seller", authenticateSeller, getSellerProducts)

router.post("/:productId/delete", authenticateSeller, deleteProduct)


/**
 * @route GET /api/products
 * @description Get all products
 * @access Public
 */
router.get("/", getProducts);
router.get("/search", searchSuggestions);

/**
 * @route GET /api/products/detail/:id
 * @description Get product details by ID
 * @access Public
 */
router.get("/detail/:id", getProductDetails)


/**
 * @route post /api/products/:productId/variants
 * @description Add a new variant to a product
 * @access Private (Seller only)
 */
router.post("/:productId/variants", authenticateSeller, upload.array('images', 7), addProductVariant)

router.post("/:productId/variants/delete/:variantId", authenticateSeller, deleteProductVariant)




export default router;