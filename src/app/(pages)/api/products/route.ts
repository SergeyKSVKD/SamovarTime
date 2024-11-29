import { NextResponse } from "next/server";
import { products } from '../products/products'

const fetchData = async () => {
  return products
}

export async function GET(request: Request) {

  try {
    const p = await fetchData()
    
    if (products.length > 0) {
      return NextResponse.json({ status: 'Список продуктов успешно загружен', products: p });
    } else {
      return NextResponse.json({ status: "Ошибка при загрузке, попробуйте позже!", products: [] })
    }
  } catch (error: any) {
    return NextResponse.json({ status: `Ошибка при загрузке, попробуйте позже!`, message: `${error.message}` })
  }
}