import React, { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const addSubscribe = async (e:any) => {
    e.preventDefault(); // Mencegah reload halaman saat form disubmit

    if (!email) {
      setErrorMessage('Email is required');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Invalid email format');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage(data.message || 'Subscription successful!');
        setEmail('');
        setErrorMessage('');
        console.log('Response from server:', data);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Failed to subscribe.');
      }
    } catch (error) {
      console.error('Error submitting subscription:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='flex justify-start items-center flex-col gap-5 h-1/2'>
      <h1 className='text-[15px] md:text-[21px]'>Be the First to Know</h1>
      <p className='text-[15px] w-full max-w-[28rem]'>
        Subscribe to our newsletter and never miss out on exclusive offers, events, and travel inspiration. Delivered straight to your inbox.
      </p>

      <form onSubmit={addSubscribe} className='space-y-3 w-full max-w-[20rem]'>
        <div>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email address'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrorMessage(''); // Reset error message saat input berubah
            }}
            required
            className='block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-color1 focus:outline-none focus:ring-0 focus:border-color1 peer placeholder:text-center'
          />
        </div>

        {errorMessage && <p className='text-red-500 text-sm'>{errorMessage}</p>}
        {successMessage && <p className='text-color1 text-sm'>{successMessage}</p>}

        <div className='w-full flex-center'>
          <button
            type='submit'
            className='text-white bg-transparent border-white border-[1px] hover:bg-color1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-8 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-3xl'
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Subscribe;
