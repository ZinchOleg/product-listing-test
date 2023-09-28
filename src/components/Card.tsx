import Image from 'next/image';
import React, { useState } from 'react'
import icon from "../images/icon.jpg"
import plus from "../images/plus.png"
import minus from "../images/minus.png"
import select from "../images/select.png"
import { Product } from '@/types/product';

type Props = {
  product: Product
}

const Card = ({ product }: Props) => {
  
  const [quantity, setQuantity] = useState(1)

  const increase = () => {
    setQuantity(prev => prev + 1)
  }

  const decrease = () => {
    if (quantity === 0) return
    setQuantity(prev => prev - 1)
  }

  return (
    <li key={product.id} className={`col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow text-[#195c5c] ${product.category === 'chair' && 'border-2 border-[#6ea927]'}`}>
      <div className="flex flex-col w-full items-center justify-between space-y-4 p-4">

        <img className="flex-shrink-0 bg-gray-300 border-b-2" src={product.img} alt={product.name} />

        <div className="flex justify-between items-center w-full">
          <h3 className="truncate text-lg font-semibold">{product.name}</h3>
          <span className="inline-flex flex-shrink-0 items-center rounded-md bg-[#f4f6f8] px-1.5 py-0.5 text-xs font-medium text-green-500 ">
            { product.category }
          </span>
        </div>

        <div className='flex justify-between items-center w-full text-lg font-normal'>
          <div className='flex justify-between items-center gap-2'>
            <button onClick={increase} className='w-6 h-6 flex justify-center items-center bg-[#f4f6f8] rounded-lg ' type='button'>
              <Image width={20} className="flex-shrink-0" src={plus} alt='plus-icon'/>
            </button>
            <span className='text-sm font-bold '>{quantity}</span>
            <button onClick={decrease} className={`w-6 h-6 flex justify-center items-center bg-[#f4f6f8] rounded-lg ${quantity === 0 && 'cursor-not-allowed'}`} type='button'>
              <Image width={20} className="flex-shrink-0" src={minus} alt='minus-icon'/>
            </button>
          </div>
          <div className='flex justify-between items-center w-16 h-8 bg-[#f4f6f8] rounded-lg px-2 cursor-not-allowed'>
            <Image className="flex-shrink-0" src={select} alt='minus-icon'/>
          </div>
        </div>

        <button
          type="button"
          className="w-full flex justify-between items-center rounded-md bg-[#6ea927] group px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
        >
          <p className="truncate text-lg group-hover:text-[#195c5c]">SAR {product.price}</p>
          <Image className=" flex-shrink-0" src={icon} alt={product.name} />
        </button>

      </div>
    </li>
  )
}

export default Card;
