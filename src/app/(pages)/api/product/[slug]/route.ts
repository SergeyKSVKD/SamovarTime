import { NextResponse } from "next/server";
import { products } from '../../products/products'

const fetchData = async (slug: string) => {
  const findProduct = products.filter(product => String(product.id) === slug)

  return [...findProduct]
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const slug = (await params).slug
  if (slug) {
    try {
      const p = await fetchData(slug)

      if (p.length > 0) {
        return NextResponse.json({ status: 'Список продуктов успешно загружен', product: p });
      } else {
        return NextResponse.json({ status: "Ошибка при загрузке, попробуйте позже!", product: [] })
      }
    } catch (error: any) {
      return NextResponse.json({ status: `Ошибка при загрузке, попробуйте позже!`, message: `${error.message}` })
    }
  }
}