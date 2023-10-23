import React from 'react'

const ContactPage = () => {
  return (
    <div className='center'>
        <h1 className='line'>Contact Us</h1>
        <form action="">
            <div className='inputbox'>
                <input type="text" required="required" />
                <span>Your Name</span>
            </div>
            <div className='inputbox'>
                <input type="text" required="required" />
                <span>Email</span>
            </div>
            <div className='inputbox'>
                <input type="text" required="required" />
                <span>Message</span>
            </div>
            <div className='inputbox'>
                <button>Send Messages</button>
            </div>
        </form>
    </div>
  )
}

export default ContactPage