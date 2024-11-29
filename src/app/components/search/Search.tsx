'use client'

import { useDispatch, useSelector } from 'react-redux'
import styles from './search.module.scss'
import { AppDispatch, RootState } from '@/app/store/store'
import { useDebounce } from '@/app/hooks/useDebounce'
import { useEffect, useState } from 'react'
import { setFilteredProducts, setSearchParams } from '@/app/store/AppParamsSlice'

const Search = () => {
    const [value, setValue] = useState<string>('')
    const dispatch = useDispatch<AppDispatch>()
    const fullProducts = useSelector((state: RootState) => state.AppState.fullProducts)
    const searchParams = useSelector((state: RootState) => state.AppState.searchParams)
    const debouncedValue = useDebounce(value, 500);
    const handleSearch = () => {
        const newArr = fullProducts.filter((product: any) => {
            return product.title.toLowerCase().includes(value)
        })
        dispatch(setFilteredProducts(newArr))
    };

    useEffect(() => {
        if (debouncedValue) {
            handleSearch()
            dispatch(setSearchParams(debouncedValue))
        }
        if (debouncedValue === '') {
            dispatch(setFilteredProducts(fullProducts))
            dispatch(setSearchParams(''))
        }
    }, [debouncedValue])

    useEffect(() => {
        if (searchParams) {
            setValue(searchParams)
        }
    }, [])

    return <div className={styles.search_container}>
        <input className={styles.text} type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
}

export default Search