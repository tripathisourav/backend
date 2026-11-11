import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: "product",
    initialState: {
        sellerProducts: [],
        products: [],
        searchSuggestions: [],
        filters: {
            gender: "all",
            query: ""
        },
    },
    reducers: {
        setSellerProducts: (state, action) => {
            state.sellerProducts = action.payload
        },
        setProducts: (state, action) => {
            state.products = action.payload
        },
        setSearchSuggestions: (state, action) => {
            state.searchSuggestions = action.payload;
        },
        setGender: (state, action) => {
            state.filters.gender = action.payload;
        },
        setQuery: (state, action) => {
            state.filters.query = action.payload;
        }
    }
})


export const { setSellerProducts, setProducts, setSearchSuggestions, setGender, setQuery } = productSlice.actions
export default productSlice.reducer
