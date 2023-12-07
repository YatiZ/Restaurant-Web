import React from 'react'
import Counter from '../Components/Counter'
import Login from '../Components/Login'

const OrderPage = () => {
  return (
    <div className='pt-20'>
        <h1 className='text-center text-3xl font-Serif font-bold text-red-500  underline underline-offset-8 decoration-sky-600 line'>Here's your order</h1>
         <Counter/>
         <Login/>
    </div>
  )
}

export default OrderPage