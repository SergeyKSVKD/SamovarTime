import DetailedProductPage from "./DetailedProductPage";

const getData = (async (slug: any) => {
  const res = await fetch(`http://localhost:3000/api/product/${slug}`, {
    cache: "no-cache"
  })
  const product = await res.json()

  return product
})

export default async function ProductPage({ params }: any) {
  const slug = (await params).slug
  const product = await getData(slug)

  return (
    <>
      <DetailedProductPage product={product} />
    </>
  );
}