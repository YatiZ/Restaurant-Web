import React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <div className='bg-black mt-3' >
        <div className='flex md:flex-row flex-col bg-yellow-300 p-4 gap-5 items-center pl-14'>
            <div className='bg-black rounded-full text-white p-6'><ThumbUpIcon/></div>
            
            <div><h1>Enjoyed your meal? Leave us review!</h1> 
             Never surrender. Special cloth alert. It's on you how you want to live your life. <br /> Everyone has a choice. I pick my choice, squickly clean. Another one.</div>
             <div className='flex flex-row gap-5 ml-44'>
         <FacebookIcon></FacebookIcon>
         <LinkedInIcon></LinkedInIcon>
         <YouTubeIcon></YouTubeIcon>
        </div>
        </div>
        <div className='text-white p-5'>
            <div className='flex flex-col md:flex-row justify-between px-10 leading-10'>
                <div > <h1 className='text-3xl'>Restaurant Address</h1>
                 <li>600 The Embarcadero, San Francisco, CA 94107, United States</li>
                 <hr />
                 <h1 className='text-3xl'>Call Us</h1>
                 <li>(255) 352-6250</li>
                 <hr />
                 <h1 className='text-3xl'>Opening Hour</h1>
                 <li>Monday-Saturday: 10AM-10PM</li>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201807.51023125357!2d-122.67682531328121!3d37.784359900000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580770df6174d%3A0x8be3ee157d693ab2!2sDelancey%20Street%20Restaurant!5e0!3m2!1sen!2smm!4v1698056414989!5m2!1sen!2smm" className='w-80 h-64 border-none' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default Footer