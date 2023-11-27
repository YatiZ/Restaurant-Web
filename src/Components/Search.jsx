import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = () => {

  return (
    <div className='w-fit h-fit pt-10 pr-10 relative'>
        <button className='absolute right-52 h-12 w-12 flex items-center justify-between border-none text-xl font-bold rounded-full bg-transparent transition-all ease-in-out outline-none' 
        >    
        <input type="text" className='cursor-pointer h-12 w-12 pl-10 font-medium rounded-full transition-all duration-500 ease-in-out bg-green-700 text-white placeholder-green-700 placeholder:text-center' 
        placeholder='Search...'
        onFocus={(e)=>e.target.classList.add('w-72','rounded-none','bg-transparent','border-b-2','border-white','placeholder-red-500')}
        onBlur={(e)=>e.target.classList.remove('w-72','rounded-none','bg-transparent','border-b-2','border-white','placeholder-red-500')}
        />
        <SearchIcon className='absolute text-black mx-3 cursor-not-allowed focus:hidden'/>
        </button>
        
        
    </div>
  )
}

export default SearchBox