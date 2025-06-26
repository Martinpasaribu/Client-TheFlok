import React, { useState } from 'react'

import { useAppDispatch, useAppSelector } from '@/lib/hooks/hooks'
import { addContact } from '@/lib/slice/contactSlice';
import { ContactModels } from '@/models/contactModels';


const Message = () => {

    const dispatch = useAppDispatch();

    const [contact, setContact] = useState<ContactModels>({
        name: '',
        email: '',
        phone: 0,
        subject: '',
        message: '',
      });

    const { isLoading, isError } = useAppSelector((state) => state.contact)


    const handleSubmit = async (e:any) => {
        e.preventDefault();
    
        if (contact.message === '') {
          alert('Pesan tidak boleh kosong!');
          return;
        }
    
        try {

            e.preventDefault();
            await dispatch(addContact(contact));
            setContact({ name: '', email: '', phone: 0, subject: '', message: '' });
        
        } catch (err) {
          console.error('Gagal menambahkan komentar:', err);
        }
      };

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        // Validasi angka (hanya izinkan digit)
        if (name === 'phone' && !/^\d*$/.test(value)) {
            return; // Abaikan input jika tidak valid
        }

        setContact((prev) => ({
            ...prev,
            [name]: value,
        }));
      };

  return (

        <div className='w-full h-full max-h-[25rem] flex-center p-2 pt-[4rem] md:pt-[5rem]'>

            <form onSubmit={handleSubmit} className=" w-full max-w-[60rem] h-full max-h-[25rem]  p-5 flex flex-col gap-10 ">

                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            value={contact.name}
                            onChange={handleChange}
                            placeholder=" " 
                            required
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  />
                        <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            value={contact.email}
                            onChange={handleChange}
                            placeholder=" " 
                            required
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Email</label>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input 
                            type="tel" 
                            pattern="\d{10,15}" 
                            name="phone" id="phone"
                            value={contact.phone}
                            onChange={handleChange}
                            placeholder=" " 
                            required 
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
                        <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (62+ 8xxxxxx)</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input 
                            type="text" 
                            name="subject" 
                            id="subject" 
                            value={contact.subject}
                            onChange={handleChange}
                            placeholder=" " 
                            required 
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                        <label htmlFor="subject" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Subject</label>
                    </div>
                </div>

                <div>
                    <div className="relative z-0 w-full mb-5 group">                   
                        <label 
                            htmlFor="message" 
                            className="block mb-2 text-sm font-medium text-gray-500 dark:text-white ">Message</label>
                            <textarea 
                            
                                id="message" 
                                name="message" 
                                rows={4} 
                                placeholder="Write your thoughts here..."
                                required
                                value={contact.message}
                                onChange={handleChange}
                                className="block p-2.5 w-full text-sm text-gray-700  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>
                    </div>
                </div>
                
                <div className='w-full flex justify-end'>
                    <button type="submit" className="text-white bg-color1 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit Message</button>
                </div>
                
            </form>

        </div>
  )
}

export default Message