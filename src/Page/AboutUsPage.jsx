import React from 'react';
import chefImg from '../images/chef.png';

const AboutUsPage = () => {
  return (
    <div className='pt-20 relative'>
        <div>Slide </div>
        <div className='border shadow-xl md:mx-24 mx-4'>
            <h1 className='line text-center'>About Us</h1>
        <div className='flex flex-row'>
            <div className='w-1/2 px-5 pt-5 md:overflow-hidden overflow-scroll md:h-auto h-36'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsam distinctio. Quidem, eos dolor ipsa commodi dolores, expedita incidunt sed, soluta dolore quibusdam consequatur corporis distinctio sequi. Voluptate, deleniti pariatur.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsam distinctio. Quidem, eos dolor ipsa commodi dolores, expedita incidunt sed, soluta dolore quibusdam consequatur corporis distinctio sequi. Voluptate, deleniti pariatur.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ipsam distinctio. Quidem, eos dolor ipsa commodi dolores, expedita incidunt sed, soluta dolore quibusdam consequatur corporis distinctio sequi. Voluptate, deleniti pariatur.</p>
            </div>
            <div className='w-1/2'>
                <img src={chefImg} alt="" className='w-full object-contain'/>
            </div>
        </div>
            
        </div>
    </div>
  )
}

export default AboutUsPage