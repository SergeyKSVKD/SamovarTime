import Image from "next/image";
import styles from "./page.module.scss";
import StoreLayout from "./store/StoreLayout";
import Logo from '../../public/Logo.svg'
import Link from "next/link";
import ProductCard from "./components/product-card/ProductCard";
import dynamic from 'next/dynamic'

const DynamicSearch = dynamic(() => import('./components/search/Search'), {
  loading: () => <p>...Загрузка</p>,
})

const getData = (async () => {
  const res = await fetch('http://localhost:3000/api/products', {
    cache: "no-cache"
  })
  const products = await res.json()

  return products
})

export default async function Home() {


  const products = await getData()

  return (
    <StoreLayout>
      <div className={styles.main_container}>
        <Image
          src={Logo}
          alt="Логотип"
          width={240}
          height={100}
          priority
        />

        <div className={styles.navigation}>
          <Link href={'/'}><span className={styles.navigation_title}>Главная</span></Link>
          <span className={styles.separator}>-</span>
          <span className={styles.navigation_title}>Интернет-магазин</span>
          <span className={styles.separator}>-</span>
          <span className={styles.navigation_title}>Продукты</span>
        </div>

        <DynamicSearch />

        <div className={styles.products_container}>
          <div className={styles.header}>
            Список продуктов
          </div>
          <div className={styles.title}>
            Наименование
          </div>
          <ProductCard products={products} />
        </div>
      </div>
    </StoreLayout>
  );
}
