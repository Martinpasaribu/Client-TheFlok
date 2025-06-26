import React from 'react'

export const Layout = () => {

  return (
    
    <div className=" mx-auto h-full">
            
        <div className="flex-center bg-faq_bg bg-no-repeat bg-cover bg-center flex-col gap-5 items-center h-[25rem]  max-h-[20rem]  md:max-h-[23rem]  bg-color3 w-full px-2">
            
            <div className='absolute z-20 w-full h-[30rem] bg-opacity-5 bg-color1'></div>

            <h2 className="font-bold text-lg md:text-xl xl:text-2xl mt-5 tracking-tight">
                Frequently Asked Questions (FAQ)
            </h2>
    
            <p className="font-bold text-sm md:text-xl xl:text-2xl mt-5 text-slate-600">
             Everything You Need to Know for a Seamless Stay
            </p>
        </div>

        <div className="textFaq styleFaq  divide-y divide-y-reverse divide-neutral-200 max-w-[90rem] h-full ">

            <div className="py-5 border-[1px] border-transparent border-b-slate-200 border-1 p-2">
                <details className="group">
                    <summary className="flex justify-between items-center font-normal cursor-pointer list-none select-none">
                        <h1> What are the check-in and check-out times at Adhisthana Villas?</h1>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <div className='text-neutral-600 mt-3 group-open:animate-sidebar_top text-xs flex flex-col gap-2'>
                        <ul className="list-disc list-inside pl-4">
                            <li><span className='text-color1'>Check-In</span>: From 15:00 PM</li>
                            <li><span className='text-color1'>Check-Out</span>: By 12:00 PM</li>
                        </ul>
                        <p className=''>
                            If you require an early check-in or late check-out, please contact us in advance. These requests are subject to availability and may incur additional charges.
                        </p>
                    </div>
                </details>
            </div>

            <div className="py-5 border-[1px] border-transparent border-b-slate-200 border-1 p-2 select-none">
                <details className="group">
                    <summary className="flex justify-between items-center font-normal cursor-pointer list-none">
                        <h1> What payment methods are accepted?</h1>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <div className='text-neutral-600 mt-3 group-open:animate-sidebar_top text-xs flex flex-col gap-2'>
                        <p>
                            Adhisthana Villas accepts various payment methods for your convenience:  
                        </p>
                        <ul className="list-disc list-inside pl-4">
                            <li><span className='text-color1'>Virtual Accounts (Bank Transfer)</span>: Transfer funds to a designated virtual bank account.</li>
                            <li><span className='text-color1'>Manual Bank Transfer</span>: Direct bank transfers to our account.</li>
                            <li><span className='text-color1'>Debit/Credit Cards</span>: Major debit and credit cards are accepted for secure payments.</li>
                            <li><span className='text-color1'>E-Wallets</span>: Payments via popular e-wallet platforms.</li>
                            <li><span className='text-color1'>Instant Payment Options</span>: Such as BCA OneKlik and other similar services.</li>
                        </ul>
                        <p className=''>
                            Please ensure that payment is completed by the deadline to confirm your reservation.
                        </p>
                    </div>
                </details>
            </div>


            <div className="py-5 border-[1px] border-transparent border-b-slate-200 border-1 p-2 select-none">
                <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <h1> What is the cancellation policy?</h1>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <p className="text-neutral-600 mt-3 group-open:animate-sidebar_top">
                        Reservations cannot be canceled within 24 hours of the scheduled check-in time. For detailed information about our cancellation policy, please refer to our 
                        <span className='text-color1'> Terms & Conditions.</span>
                    </p>
                    <p className='text-neutral-600 mt-3 group-open:animate-sidebar_top'>
                        If you need to cancel your reservation or have specific questions about our policy, please contact us directly at <span className="text-color1">info@adhisthanavillas.com</span> or  <span className="text-color1" >+62 8111-1177-199</span>   We are here to assist you with any cancellation requests and provide further details as needed.
                    </p>
                </details>
            </div>

            <div className="py-5 border-[1px] border-transparent border-b-slate-200 border-1 p-2 select-none">
                <details className="group">
                    <summary className="flex justify-between items-center font-normal cursor-pointer list-none">
                        <h1> How do I reach Adhisthana Villas? </h1>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <div className='text-neutral-600 mt-3 group-open:animate-fadeIn text-xs flex flex-col gap-2 animate-sidebar_top'>
                        <p>
                            Adhisthana Villas is located in Central Java, Indonesia. For detailed directions and location information, please visit our Contact & Location page.
                        </p>
                        <ul className="list-disc list-inside pl-4">
                            <li><span className='text-color1'>Address</span>: Jl. Borobudur - Ngadiharjo No.Km 2.5, Borobudur, Magelang, Central Java, Indonesia 56553.</li>
                            <li><span className='text-color1'>Accessibility</span>:  Our location is easily accessible from major transport routes. If you need further assistance with directions, please contact us.</li>
                        </ul>

                    </div>
                </details>
            </div>


            <div className="py-5 border-[1px] border-transparent border-b-slate-200 border-1 p-2 select-none">
                <details className="group">
                    <summary className="flex justify-between items-center font-normal cursor-pointer list-none">
                        <h1> Are there any amenities or services provided at the villas? </h1>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <div className='text-neutral-600 mt-3 group-open:animate-fadeIn text-xs flex flex-col gap-2 animate-sidebar_top'>
                        <p>
                            Our villas are designed to offer a luxurious and comfortable stay, including:
                        </p>
                        <ul className="list-disc list-inside pl-4">
                            <li><span className='text-color1'>Private Pools</span>: Each villa features a private pool for your relaxation.</li>
                            <li><span className='text-color1'>Wi-Fi</span>:  Complimentary high-speed internet access throughout the villa.</li>
                            <li><span className='text-color1'>Comfortable Living Areas</span>:  Well-appointed spaces for your convenience and comfort.</li>
                            <li><span className='text-color1'>Garden Views</span>:  Enjoy lush greenery and serene surroundings from your villa.</li>
                        </ul>
                        <p >
                            Please note that spa treatments and airport transfers are not available.
                        </p>
                    </div>
                </details>
            </div>

            <div className="py-5 border-[1px] border-transparent border-b-slate-200 border-1 p-2 select-none">
                <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <h1> What is the policy for special requests or additional services? </h1>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <p className="text-neutral-600 mt-3 group-open:animate-sidebar_top text-justify">
                        If you have special requests or require additional services during your stay, please inform us at the time of booking or contact us directly. We will do our best to accommodate your needs, but availability is not guaranteed.
                    </p>
                </details>
            </div>

            <div className="py-5 border-[1px] border-transparent border-b-slate-200 border-1 p-2 select-none">
                <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <h1> Can I try this platform for free?</h1>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <p className="text-neutral-600 mt-3 group-open:animate-sidebar_top">
                        We offers a free trial of its  platform for a limited time. During the trial period,
                        you will have access to a limited set of features and functionality, but you will not be charged.
                    </p>
                </details>
            </div>

            <div className="py-5 border-[1px] border-transparent border-b-slate-200 border-1 p-2 select-none">
                <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <h1> What should I do if I have a problem or need assistance during my stay? </h1>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>

                    <p className='text-neutral-600 mt-3 group-open:animate-sidebar_top'>
                        If you encounter any issues or need assistance during your stay, please contact our on-site staff or reach out to us through the contact information provided on our  <span className='text-color1'>Contact & Location Page.</span>  We are here to ensure that your stay is enjoyable and address any concerns promptly.                    
                    </p>
                    
                </details>
            </div>

            <div className="py-5 border-[1px] border-transparent border-b-slate-200 border-1 p-2 select-none">
                <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <h1> Are pets allowed at Adhisthana Villas? </h1>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>

                    <p className='text-neutral-600 mt-3 group-open:animate-sidebar_top'>
                        For the comfort and order of all our guests, pets are not allowed at Adhisthana Villas. We appreciate your understanding and cooperation in maintaining a serene environment for everyone.
                    </p>

                </details>
            </div>

            <div className="py-5 border-[1px] border-transparent border-b-slate-200 border-1 p-2 select-none">
                <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <h1> What is the policy regarding damages or loss? </h1>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>

                    <p className='text-neutral-600 mt-3 group-open:animate-sidebar_top'>
                        Guests are responsible for any damages to the property or loss of personal belongings during their stay. If damages or issues are discovered that are not attributed to your stay, please notify our staff immediately.
                    </p>
                    <p className='text-neutral-600 mt-3 group-open:animate-sidebar_top'>
                        We conduct a thorough inspection of the villa before and after each stay. Any damage found that is not related to your use of the property will be investigated and may result in additional charges. To avoid unexpected charges, please report any issues or damages promptly.
                    </p>
                    <p className='text-neutral-600 mt-3 group-open:animate-sidebar_top'>
                        For any concerns or further information, feel free to contact us at info@adhisthanavillas.com.
                    </p>

                </details>
            </div>

            <div className="py-5 border-[1px] border-transparent border-b-slate-200 border-1 p-2 select-none">
                <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <h1> How can I provide feedback about my stay? </h1>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>

                    <p className='text-neutral-600 mt-3 group-open:animate-sidebar_top'>
                        We value your feedback and would love to hear about your experience. Please send your comments and suggestions to info@adhisthanavillas.com.
                    </p>
                

                </details>
            </div>



        </div>
    </div>


  )
}
