import React from 'react'

const Cart = ({cart}) => {

const [count, setCount] = React.useState(1);

const increment = () => setCount(count + 1);
const decrement = () => setCount(count - 1);


  return (
    <div className="border border-black p-5 grid grid-cols-6">
        <div className="col-span-1">
            <img src={cart.product.image} className='h-16' alt="" />
        </div>
        <div className="col-span-3">
            <p className='mb-2'>{cart.product.title}</p>
            <p className='text-gray-400'>Price: ${cart.product.price}</p>
        </div>
        <div className="col-span-1">
            <p className='mb-2'>Quantity</p>
            <div className="flex gap-3 items-center">
                <button className='bg-black text-white px-2 py-0.5' onClick={decrement}>-</button>
                {count}
                <button className='bg-black text-white px-2 py-0.5' onClick={increment}>+</button>
            </div>
        </div>
        <div className="col-span-1">
            <p className='text-end text-2xl font-bold mb-3'>${cart.cost}</p>
        </div>
    </div>
  )
}

export default Cart