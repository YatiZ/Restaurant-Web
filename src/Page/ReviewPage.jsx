import React, { useEffect, useState } from 'react'
import ReviewModel from '../Components/ReviewModel';
import reviewData from '../db.json';

import Star from '../Components/Star';
import axios from 'axios';



const ReviewPage = () => {
    const [reviewForm, setReviewForm] = useState(false);
    const [data, AddData] = useState(reviewData);
    const [username, setUsername] = useState('');
    const [body, setBody] = useState('');
    const [rating, setRating] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
   
    const handleSubmit = async (e)=>{
        
        e.preventDefault()
        setIsLoading(true)
        const newData = {username,body,rating}

        try{
            const res = await axios.post('http://localhost:4001/reviews', newData)

            setTimeout(()=>{
                setIsLoading(false)
            },3000);
            
   
            AddData(prevData=>(
                {...prevData,
                reviews:[...prevData.reviews,res.data]
                }
            ));
           
            
        }catch(error){
            console.error('Error',error)
        }
     
        //reset the data 
        setBody('');
        setRating('')
        setReviewForm(false)
        
       
    }
    
    // console.log('data',data.reviews)
    const handleReviewForm = ()=>{
        
        setReviewForm(!reviewForm);

    }
  
  return (
    <div className='pt-20 px-10'>
        <h1 className='text-center text-3xl font-Serif font-bold text-red-500  underline underline-offset-8 decoration-sky-600 line'>Our lovely customers'reviews</h1> 
        
        <button onClick={handleReviewForm} className='bg-red-400 border p-2 rounded-lg my-5'>Write Review</button>
        <hr />
        {reviewForm && <ReviewModel reviewForm={reviewForm} setReviewForm={setReviewForm} handleSubmit={handleSubmit} setUsername={setUsername} username={username} body={body} setBody={setBody} rating={rating} setRating={setRating}/>}
        {isLoading? (<div>Loading...</div>):
        (
<div className='grid grid-cols-2 gap-3'>
            {data.reviews.map((review)=>(
                <div key={review.id} className='bday-message bday-message--paper w-68'>
                    <p className='font-GreatVibes'>{review.body}</p>
                    <h1 className='text-[18px] font-GreatVibes'>{review.username}</h1>
                    <Star data ={review.rating}/>
                </div>
            ))}
        </div>
        )}
        
    </div>
  )
}

export default ReviewPage