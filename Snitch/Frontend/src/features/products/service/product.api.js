import axios from "axios";

const productApiInstance = axios.create({
    baseURL: "/api/products",
    withCredentials: true,
})

export async function createProduct(formData) {
    const response = await productApiInstance.post("/", formData)

    return response.data
}

export async function getSellerProduct() {
    const response = await productApiInstance.get("/seller")
    return response.data
}

export async function getProductById(productId) {
    const response = await productApiInstance.get(`/detail/${productId}`)
    return response.data
}

export async function addProductVariant(productId, newProductVariant) {

    console.log(newProductVariant)

    const formData = new FormData()

    newProductVariant.images.forEach((image) => {
        formData.append(`images`, image.file)
    })

    formData.append("stock", newProductVariant.stock)
    formData.append("priceAmount", newProductVariant.price)
    formData.append("attributes", JSON.stringify(newProductVariant.attributes))

    const response = await productApiInstance.post(`/${productId}/variants`, formData)

    return response.data

}

export async function deleteProduct(productId) {
    const response = await productApiInstance.post(`/${productId}/delete`)
    return response.data
}

export async function deleteProductVariant(productId, variantId) {
    const response = await productApiInstance.post(`/${productId}/variants/delete/${variantId}`)
    return response.data
}


export const getProducts = async (gender, query, signal) => {
    const response = await productApiInstance.get("/", {
        params: {
            gender: gender === "all" ? undefined : gender,
            q: query.trim() || undefined
        },
        signal
    });

    return response.data;
};

export const getSearchSuggestions = async (query, signal) => {
    const response = await productApiInstance.get("/search", {
        params: {
            q: query.trim() || undefined
        },
        signal
    });

    return response.data;
};