import React from 'react'
import StarIcon from '@mui/icons-material/Star';

export default function Star({data}) {
    
        const renderedRating = ()=>{
            const stars = [];
            for (let i=0; i< data; i++){
                 stars.push(<span key={i}><StarIcon className='text-yellow-500'/></span>)
            }
            return stars;
        };
        
  return (
    <div>
      {renderedRating()}
    </div>
  )
}
