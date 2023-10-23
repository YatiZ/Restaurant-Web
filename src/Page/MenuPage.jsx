import React from 'react';

import order from "../images/order.png";
import { menu } from '../Data/menu';
import StarRateIcon from '@mui/icons-material/StarRate';

const MenuPage = () => {
  return (
    <div className='p-14'>
<h1 className='text-center text-5xl font-Serif font-bold text-red-500 m-6'>Our Top Menu</h1>


   <div className='grid grid-cols-3 mt-32 gap-5 gap-y-28' >
   {menu.map((food,index)=>(
   <div key={index} className=''>
       <img src={food.image} alt="" className='w-36 absolute -mt-24 ml-20'/>

       <div className='bg-gray-400 card h-80 rounded-md'>
       <h3 className='pt-14 text-center text-3xl'>{food.name}</h3>

       <div className='flex flex-row'>
       <div className='pl-10 pb-4 '>
       <h5 className='font-bold'>Ingridents</h5>
       <ul className='list-disc'>
       {food.ingredients.map((ingredient)=>(
         <li className='italic ' key={ingredient}>{ingredient}</li>
       ))}
       </ul>
       <div className='mt-3 flex flex-row items-center'>
       <b className='bg-blue-400 p-2'>${food.price}</b>
       <div className='flex flex-row text-yellow-400'>
          
            {[...Array(food.rating)].map((star,index)=>(
                <StarRateIcon key={index}/>
            ))}
            
          
       </div>
       </div>
       
       </div>
       <div className='pt-8 mr-3'>
         <button className=' button-53 text-sm'>Order <br /> Now!</button>
        
           {/* <img src={order} alt="" className='w-36 hover:cursor-pointer'/> */}
       </div>
       </div>
       
       </div>
       
   </div>
   

))}
</div>
        
    </div>
  )
}

export default MenuPage