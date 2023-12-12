import React from 'react';
import FoodBankIcon from '@mui/icons-material/FoodBank';

const OrderPopUp = () => {
  return (
    <div className='fixed z-10 top-24 right-10'>
        <button className='text-3xl'>
        <FoodBankIcon className='w-20'/>
        </button>
    </div>
  )
}

export default OrderPopUp