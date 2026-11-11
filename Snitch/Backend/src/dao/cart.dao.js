import cartModel from "../models/cart.model.js";
import mongoose from "mongoose";
// when you want to fetch data from multiple collections in a single query, you can use the aggregation framework. In this case, we want to fetch the cart details for a specific user, which includes the items in the cart and their corresponding product details. To achieve this, we can use the $lookup stage to perform a left outer join with the products collection based on the product ID in the cart items. This allows us to retrieve the product details for each item in the cart, including the variant information.
// every stage output is taken as next stage input, so we can use $unwind to flatten the array and then use $lookup to join with the products collection and then use $unwind again to flatten the product array and then use $match to filter the variant and then use $addFields to add the itemPrice field and then use $group to group by cart id and calculate totalPrice and currency and items array
export async function getCartDetails(userId) {
    let cart = (await cartModel.aggregate([
        {
            $match: {
                user: new mongoose.Types.ObjectId(userId)
            }
        },
        { $unwind: { path: '$items' } },
        {
            $lookup: {
                from: 'products',
                localField: 'items.product',
                foreignField: '_id',
                as: 'items.product'
            }
        },
        { $unwind: { path: '$items.product' } },
        {
            $unwind: { path: '$items.product.variants' }
        },
        {
            $match: {
                $expr: {
                    $eq: [
                        '$items.variant',
                        '$items.product.variants._id'
                    ]
                }
            }
        },
        {
            $addFields: {
                itemPrice: {
                    price: {
                        $multiply: [
                            '$items.quantity',
                            '$items.product.variants.price.amount'
                        ]
                    },
                    currency:
                        '$items.product.variants.price.currency'
                }
            }
        },
        {
            $group: {
                _id: '$_id',
                totalPrice: { $sum: '$itemPrice.price' },
                currency: {
                    $first: '$itemPrice.currency'
                },
                items: { $push: '$items' }
            }
        }
    ]))[ 0 ]

    return cart
}