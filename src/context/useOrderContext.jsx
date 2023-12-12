import React, { createContext, useState } from 'react';

const OrderContext = createContext()

const OrderProvider = ({children}) => {
    const [orderFood, setOrderFood] = useState([]);

    const handleOrderClick = (food)=>{
        console.log('food',food)
        
       setOrderFood(prevOrderFood => [...prevOrderFood,food])
       console.log('Order',orderFood)
    }
  return (
    <OrderContext.Provider value={{handleOrderClick,orderFood}}>
        {children}
    </OrderContext.Provider>
  )
}

export {OrderContext,OrderProvider}