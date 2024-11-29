import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
    fullProducts: [],
    filteredProducts: [],
    searchParams: '',
}

const AppParamsSlice = createSlice({
    name: '@app',
    initialState,
    reducers: {
        setFullProducts: (state, action: PayloadAction<any>) => {
            state.fullProducts = action.payload
        },
        setFilteredProducts: (state, action: PayloadAction<any>) => {
            state.filteredProducts = action.payload
        },
        setSearchParams: (state, action: PayloadAction<any>) => {
            state.searchParams = action.payload
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(_.pending, (state) => {
    //             state.loading = 'loading'
    //             state.error = ''
    //         })
    // }
})

export const AppParamsReducer = AppParamsSlice.reducer
export const {
    setFilteredProducts,
    setFullProducts,
    setSearchParams,
} = AppParamsSlice.actions