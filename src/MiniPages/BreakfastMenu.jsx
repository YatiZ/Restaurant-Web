import React, { useContext, useState } from 'react';
import {menu} from '../Data/menu';
import StarRateIcon from '@mui/icons-material/StarRate';
import { OrderContext } from '../context/useOrderContext';

const BreakfastMenu = () => {
  const {handleOrderClick} = useContext(OrderContext);
  return (
    <div className='pt-14'>
<h1 className='text-center text-5xl font-Serif font-bold text-red-500 m-6 underline underline-offset-8 decoration-sky-600 line'>Breakfast Menu</h1>


   <div className='grid md:grid-cols-3 grid-cols-1 mt-32 gap-5 gap-y-28 ' >
   {menu.map((food,index)=>(
   <div key={index} className=''>
       <div className='w-40 absolute -mt-16 ml-16'>
       <img src={food.image} alt="" className='w-full object-contain'/>
       </div>
       

       <div className='bg-gray-400 card h-80 rounded-md'>
       <h3 className='pt-24 text-center text-3xl'>{food.name}</h3>

       <div className='flex flex-row'>
       <div className='pl-10 pb-4 '>
       <h5 className='font-bold'>Ingridents</h5>
       <ul className='list-disc'>
       {food.ingredients.map((ingredient)=>(
         <li className='italic ' key={ingredient}>{ingredient}</li>
       ))}
       </ul>
       <div className='mt-3 flex flex-row items-center'>
       <b className='bg-purple-600 p-2 text-white'>${food.price}</b>
       <div className='flex flex-row text-yellow-400'>
          
            {[...Array(food.rating)].map((star,index)=>(
                <StarRateIcon key={index}/>
            ))}
            
          
       </div>
       </div>
       
       </div>
       <div className='pt-8 mr-3'>
         <button onClick={()=>handleOrderClick(food)} className=' button-53 text-sm'>Order <br /> Now!</button>
        
       </div>
       </div>
       
       </div>
       
   </div>
   

))}
</div>
        
    </div>
  )
}

export default BreakfastMenu