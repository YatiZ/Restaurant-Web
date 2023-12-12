import React, { useContext } from 'react'
import Counter from '../Components/Counter'
import Login from '../Components/Login'
import { OrderContext } from '../context/useOrderContext'

const OrderPage = () => {
  const {orderFood} = useContext(OrderContext);
  return (
    <div className='pt-20'>
        <h1 className='text-center text-3xl font-Serif font-bold text-red-500  underline underline-offset-8 decoration-sky-600 line'>Here's your order</h1>
        {orderFood.map((food)=>(
          <div key={food.id}>
             <h1>{food.name}</h1>
          </div>
        ))}

        
    </div>
  )
}

export default OrderPage