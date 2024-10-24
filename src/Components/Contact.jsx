import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // State to handle button disable

  const sendEmail = (e) => {
    e.preventDefault();

    setIsButtonDisabled(true);

    emailjs
      .sendForm('service_cxk31yi', 'template_ynyjvrr', form.current, 'mh75IGUBvbg3Dhe2z')
      .then(
        () => {
          console.log('SUCCESS!');
          toast('Email Sent successfully!!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });

          form.current.reset();

          setTimeout(() => {
            setIsButtonDisabled(false);
          }, 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Email Failed to send!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });

          // Still enable button after 3 seconds even if email fails
          setTimeout(() => {
            setIsButtonDisabled(false);
          }, 2000);
        }
      );
  };

  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />

      <div id='contact' className='bg-[url(assets/77.jpg)] w-[100%] h-auto bg-cover bg-center'>
        <div className='w-[100%] h-auto min-h-[100vh] bg-black bg-opacity-85 backdrop-blur-2xl flex justify-center items-center p-4'>
          <div className='flex flex-col lg:flex-row w-[100%] lg:w-[80vw] h-auto lg:h-[70vh] bg-white bg-opacity-5 border-none rounded-2xl p-6 lg:p-10 space-y-8 lg:space-y-0'>
            <div className='w-full lg:w-1/2 p-5 flex flex-col justify-center text-center text-white'>
              <h2 className='text-3xl lg:text-4xl font-semibold mb-6'>Contact Info</h2>
              <p className='mb-4'>
                <span className='font-medium text-xl lg:text-2xl'>Address:</span>{' '}
                <div>Delhi Technological University, Delhi, India</div>
              </p>
              <p className='mb-4'>
                <span className='font-medium text-xl lg:text-2xl'>Phone:</span> <div>+91 6388561593</div>
              </p>
              <p className='mb-4'>
                <span className='font-medium text-xl lg:text-2xl'>Email:</span>
                <div>himanshugautam161003@gmail.com</div>
              </p>
            </div>

            <div className='w-full lg:w-1/2 p-5'>
              <h2 className='text-3xl lg:text-4xl font-semibold text-white mb-6'>Get In Touch</h2>
              <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-4'>
                <input
                  type='text'
                  placeholder='Name'
                  name='user_name'
                  className='p-3 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none'
                />
                <input
                  type='email'
                  placeholder='Email'
                  name='user_email'
                  className='p-3 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none'
                />
                <textarea
                  placeholder='Message'
                  name='message'
                  rows='5'
                  className='p-3 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none'
                ></textarea>
                <button
                  type='submit'
                  className={`py-3 px-6 ${isButtonDisabled ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'
                    } text-white font-semibold rounded-md transition duration-300 ease-in-out`}
                  disabled={isButtonDisabled}
                >
                  {isButtonDisabled ? 'Sending...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
