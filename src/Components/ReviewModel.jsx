import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';

const ReviewModel = ({username,setUsername, body, setBody, rating, setRating,handleSubmit, reviewForm, setReviewForm}) => {
  return (
    <div className='absolute bg-red-400 text-white rounded-lg w-1/2 items-center flex justify-center mx-52 text-[18px] top-24'>
        <div onClick={()=>setReviewForm(!reviewForm)} className='absolute -top-6 bg-red-300 -right-5 p-2 grid items-center rounded-full shadow-lg cursor-pointer'>
            <CloseIcon/>
        </div>
        <div className='mx-0 w-full'>
        <h1 className='text-center'>Welcome to your reviews</h1>
        <hr className='w-full mx-0'/>

        <form className=' p-6 grid grid-cols-1 gap-4 px-18' action="" onSubmit={handleSubmit}>
       
       <label className='items-center flex gap-1'>
          <span className=''>Username </span>
           <input className='w-full p-1.5 shadow-md rounded-lg focus:outline-lime-700' type="text" onChange={(e)=>setUsername(e.target.value)} value={username} required/>
       </label>
       <label className='items-center flex gap-2'>
           <span>Messages </span>
           <textarea className='w-full p-1.5 shadow-md rounded-lg focus:outline-lime-700' required onChange={(e)=>setBody(e.target.value)} value={body} ></textarea>
       </label>
       <label className='items-center flex gap-9'>
           <span>rating </span>
           <input className='w-full p-1.5 shadow-md rounded-lg focus:outline-lime-700' type="number" onChange={(e)=>setRating(e.target.value)} value={rating}/>
       </label>
       <button className='button-85 mt-3 flex gap-3 justify-center '>
          <span>Send</span>
          <SendIcon/>
       </button>
   </form>
        </div>
       
    </div>
  )
}

export default ReviewModel