"use client"
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { useQuery } from '@apollo/client';
import { ALL_PRODUCTS } from '../apollo/products'
import Card from '@/components/Card';
import { Product } from "@/types/product";

if (process.env.NODE_ENV !== "production") {
  loadDevMessages();
  loadErrorMessages();
}

export default function Home() {
  const { loading, data } = useQuery(ALL_PRODUCTS)
  console.log(data)

  if (loading) return <div className="w-screen h-screen flex items-center justify-center cursor-wait"> Loading... </div>
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {
          data.allProducts.map((product: Product) => (
            <Card product={product} key={product.id}/>
          ))
        }
      </ul>
    </main>
  )
}
