import { createProduct, getSellerProduct, getProductById, addProductVariant, deleteProduct, deleteProductVariant, getProducts, getSearchSuggestions } from "../service/product.api"
import { useDispatch } from "react-redux"
import { setSellerProducts, setProducts, setSearchSuggestions } from "../state/product.slice"
import { useCallback } from "react"



export const useProduct = () => {

    const dispatch = useDispatch()

    async function handleCreateProduct(formData) {
        const data = await createProduct(formData)
        return data.product
    }

    async function handleGetSellerProduct() {
        const data = await getSellerProduct()
        dispatch(setSellerProducts(data.products))
        return data.products
    }


    async function handleGetProductById(productId) {
        const data = await getProductById(productId)
        return data.product
    }

    async function handleAddProductVariant(productId, newProductVariant) {
        const data = await addProductVariant(productId, newProductVariant)

        return data
    }

    async function handleDeleteProduct(productId) {
        const data = await deleteProduct(productId)
        return data
    }

    async function handleDeleteProductVariant(productId, variantId) {
        const data = await deleteProductVariant(productId, variantId)
        return data
    }


    const handleGetProducts = useCallback(
        async (gender, query, signal) => {
            const data = await getProducts(
                gender,
                query,
                signal
            );

            dispatch(setProducts(data.products));

            return data;
        },
        [dispatch]
    );

    const handleSearchSuggestions = useCallback(
        async (query, signal) => {
            const data = await getSearchSuggestions(
                query,
                signal
            );

            dispatch(setSearchSuggestions(data.products));

            return data;
        },
        [dispatch]
    );

    return { handleCreateProduct, handleGetSellerProduct, handleGetProductById, handleAddProductVariant, handleDeleteProduct, handleDeleteProductVariant, handleGetProducts, handleSearchSuggestions }

}
