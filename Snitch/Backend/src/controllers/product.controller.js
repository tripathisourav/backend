import productModel from "../models/product.model.js";
import { uploadFile } from "../services/storage.service.js";


export async function createProduct(req, res) {

    const { title, description, priceAmount, priceCurrency } = req.body;
    const seller = req.user;

    const isProductAlr = await productModel.findOne({
        title,
        description,
        "price.amount": priceAmount,
        "price.currency": priceCurrency,
        seller: seller._id
    });

    if (isProductAlr) {
        return res.status(409).json({
            message: "Similar product already exists"
        });
    }

    const images = await Promise.all(req.files.map(async (file) => {
        return await uploadFile({
            buffer: file.buffer,
            fileName: file.originalname
        })
    }))


    const product = await productModel.create({
        title,
        description,
        price: {
            amount: priceAmount,
            currency: priceCurrency || "INR"
        },
        images,
        seller: seller._id
    })


    res.status(201).json({
        message: "Product created successfully",
        success: true,
        product
    })
}

export async function deleteProduct(req, res) {

    const { productId } = req.params;
    const seller = req.user;

    const product = await productModel.findOneAndDelete({   

        _id: productId,
        seller: seller._id
    })

    if (!product) {
        return res.status(404).json({
            message: "Product not found",
            success: false
        })
    }

    res.status(200).json({
        message: "Product deleted successfully",
        success: true,
        product
    })
}

export async function getSellerProducts(req, res) {
    const seller = req.user;

    const products = await productModel.find({ seller: seller._id });


    res.status(200).json({
        message: "Products fetched successfully",
        success: true,
        products
    })
}



export async function getProductDetails(req, res) {
    const { id } = req.params;

    const product = await productModel.findById(id)

    if (!product) {
        return res.status(404).json({
            message: "Product not found",
            success: false
        })
    }

    return res.status(200).json({
        message: "Product details fetched successfully",
        success: true,
        product
    })
}

export async function addProductVariant(req, res) {

    const productId = req.params.productId;

    const product = await productModel.findOne({
        _id: productId,
        seller: req.user._id
    });

    if (!product) {
        return res.status(404).json({
            message: "Product not found",
            success: false
        })
    }

    const files = req.files;
    const images = [];
    if (files || files.length !== 0) {
        (await Promise.all(files.map(async (file) => {
            const image = await uploadFile({
                buffer: file.buffer,
                fileName: file.originalname
            })
            return image
        }))).map(image => images.push(image))
    }

    const price = req.body.priceAmount
    const stock = req.body.stock
    const attributes = JSON.parse(req.body.attributes || "{}")

    console.log(price)

    product.variants.push({
        images,
        price: {
            amount: Number(price) || product.price.amount,
            currency: req.body.priceCurrency || product.price.currency
        },
        stock,
        attributes
    })

    await product.save();

    // push() existing Mongoose document ke in-memory array ko update karta hai.
    // Lekin changes ko permanently MongoDB mein save karne ke liye save() call karna padta hai.

    return res.status(200).json({
        message: "Product variant added successfully",
        success: true,
        product
    })

}

export async function deleteProductVariant(req, res) {
    const { productId, variantId } = req.params;
    const seller = req.user._id;

    const product = await productModel.findOne({
        _id: productId,
        seller: seller
    });

    if(!product) {
        return res.status(404).json({
            message: "Product not found",
            success: false
        })
    }

    const variantIndex = product.variants.findIndex(variant => variant._id.toString() === variantId);

    if (variantIndex === -1) {
        return res.status(404).json({
            message: "Variant not found",
            success: false
        })
    }

    product.variants.splice(variantIndex, 1);

    await product.save();   


    return res.status(200).json({
        message: "Product variant deleted successfully",
        success: true,
        product
    })
}

export async function getProducts(req, res) {
    try {
        const { gender, q } = req.query;

        if (gender && !["men", "women"].includes(gender)) {
            return res.status(400).json({
                message: "Invalid gender"
            });
        }

        const filter = {};

        if (gender) {
            filter.gender = gender;
        }

        if (q?.trim()) {
            const escapedQuery = q.trim().replace(
                /[.*+?^${}()|[\]\\]/g,
                "\\$&"
            );

            const searchRegex = new RegExp(escapedQuery, "i");

            filter.$or = [
                { title: searchRegex },
                { description: searchRegex }
            ];
        }

        const products = await productModel.find(filter)
            .select("title description price images gender")
            .lean();

        return res.status(200).json({
            success: true,
            products
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

export const searchSuggestions = async (req, res) => {
    try {
        const { q } = req.query;

        let filter = {};

        if (q?.trim()) {
            const escapedQuery = q.trim().replace(
                /[.*+?^${}()|[\]\\]/g,
                "\\$&"
            );

            const searchRegex = new RegExp(
                escapedQuery,
                "i"
            );

            filter = {
                $or: [
                    { title: searchRegex },
                    { description: searchRegex }
                ]
            };
        }

        const products = await productModel.find(filter)
            .select("title description price images gender")
            .limit(6)
            .lean();

        return res.status(200).json({
            success: true,
            products
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};