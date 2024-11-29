'use client'

import { useDispatch, useSelector } from 'react-redux'
import styles from './product-card.module.scss'
import { type AppDispatch, type RootState } from '@/app/store/store'
import { useEffect } from 'react'
import { setFilteredProducts, setFullProducts } from '@/app/store/AppParamsSlice'
import Link from 'next/link'

const ProductCard = ({ products }: any) => {
    const dispatch = useDispatch<AppDispatch>()
    const filteredProducts = useSelector((state: RootState) => state.AppState.filteredProducts)
    const fullProducts = useSelector((state: RootState) => state.AppState.fullProducts)

    useEffect(() => {
        dispatch(setFullProducts(products.products))
    }, [])

    return <div className={styles.products}>
        {fullProducts.length === 0 && <span className={styles.loader}>...Загрузка</span>}
        {filteredProducts.length > 0 && filteredProducts.map((product: any) => {

            return <Link href={`/product/${product.id}`} className={styles.card} key={product.id}>
                <p>{product.title}</p>
                <p>{new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(product.price)}</p>
                <p>{product.description}</p>
            </Link>
        })}
    </div>
}

export default ProductCard