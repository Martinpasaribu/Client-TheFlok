import React from 'react'

export const Layout = () => {

  return (
    
    <div className=" mx-auto h-full">
            
        <div className="flex-center bg-terms_bg bg-no-repeat bg-cover bg-bottom flex-col gap-5 items-center h-[28rem] max-h-[20rem] md:max-h-[25rem]  bg-color3 w-full px-2">
        
            <div className='absolute z-20 w-full h-[30rem] bg-opacity-5 bg-color1'></div>
            <h2 className="font-bold text-lg md:text-xl xl:text-2xl mt-5 tracking-tight">
                Terms & Conditions
            </h2>
    
            <p className="font-semibold text-[11px] w-full max-w-[60rem] md:text-md xl:text-lg mt-5 text-slate-600 text-center">
                Welcome to Adhisthana Villas! Please read the following Terms & Conditions carefully as they govern your use of our services and facilities. By making a reservation or using our services, you agree to abide by these terms.
            </p>
        </div>

        <div className="textFaq styleFaq  divide-y divide-y-reverse divide-neutral-200 max-w-[70rem] h-full ">


            <div className="py-5 bg- border-[1px] border-transparent border-b-slate-200   border-1 p-2 select-none">
                <details className="group">
                    <summary className="flex justify-between items-center font-normal cursor-pointer list-none">
                        <h1> Payment Methods</h1>
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


            <div className="py-5 bg- border-[1px] border-transparent border-b-slate-200   border-1 p-2 select-none">
                <details className="group">
                    <summary className="flex justify-between items-center font-normal cursor-pointer list-none">
                        <h1> Reservation and Booking </h1>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <div className='text-neutral-600 mt-3 group-open:animate-sidebar_top text-xs flex flex-col gap-2'>
                        <ul className="list-disc list-inside pl-4">
                            <li><span className='text-color1'>Booking Confirmation</span>: A reservation is only confirmed upon receipt of payment and issuance of a confirmation email.</li>
                            <li><span className='text-color1'>Cancellation Policy</span>: Cancellations must be made at least 24 hours before the scheduled check-in time. Late cancellations may incur a fee.</li>
                            <li><span className='text-color1'>No-Show Policy</span>: Failure to arrive on the scheduled date without prior notice may result in the loss of the reservation and payment.</li>
                        </ul>

                    </div>
                </details>
            </div>

            <div className="py-5 bg- border-[1px] border-transparent border-b-slate-200   border-1 p-2 select-none">
                <details className="group">
                    <summary className="flex justify-between items-center font-normal cursor-pointer list-none">
                        <h1> Check-In and Check-Out </h1>
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
                            Early check-in or late check-out requests are subject to availability and may incur additional charges.
                        </p>
                    </div>
                </details>
            </div>


            <div className="py-5 bg- border-[1px] border-transparent border-b-slate-200   border-1 p-2 select-none">
                <details className="group">
                    <summary className="flex justify-between items-center font-normal cursor-pointer list-none">
                        <h1> Location and Access </h1>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <div className='text-neutral-600 mt-3 group-open:animate-sidebar_top text-xs flex flex-col gap-2'>
                        <ul className="list-disc list-inside pl-4">
                            <li><span className='text-color1'>Address </span>: Jl. Borobudur - Ngadiharjo No.Km 2.5 Borobudur, Magelang Central Java, Indonesia 56553</li>
                            <li><span className='text-color1'>Accessibility</span>: Our villas are easily reachable from major transport routes. If you require additional directions or assistance, please do not hesitate to contact our team.</li>
                            <li><span className='text-color1'>Local Attractions</span>: We are located near prominent landmarks, including the iconic Borobudur temple, allowing easy access to various local attractions.</li>
                        </ul>
                        <p className=''>
                           -
                        </p>
                    </div>
                </details>
            </div>

            <div className="py-5 bg- border-[1px] border-transparent border-b-slate-200   border-1 p-2 select-none">
                <details className="group">
                    <summary className="flex justify-between items-center font-normal cursor-pointer list-none">
                        <h1> Amenities and Services </h1>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <div className='text-neutral-600 mt-3 group-open:animate-sidebar_top text-xs flex flex-col gap-2'>
                        <p> Our villas are designed to offer a luxurious and comfortable stay. Please be aware of the following: </p>
                        <ul className="list-disc list-inside pl-4">
                            <li><span className='text-color1'>Included Amenities </span>: Each villa is equipped with modern conveniences, including Wi-Fi, a private pool, and well-appointed living areas.</li>
                            <li><span className='text-color1'>Additional Services</span>: Certain services, such as spa treatments and airport transfers, are not available. For any additional requests or special arrangements, please contact us in advance.</li>
                        </ul>
                        <p className=''>
                           -
                        </p>
                    </div>
                </details>
            </div>


            <div className="py-5 bg- border-[1px] border-transparent border-b-slate-200   border-1 p-2 select-none">
                <details className="group">
                    <summary className="flex justify-between items-center font-normal cursor-pointer list-none">
                        <h1> Cancellation and Refunds </h1>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <div className='text-neutral-600 mt-3 group-open:animate-sidebar_top text-xs flex flex-col gap-2'>
                        <p>To ensure a smooth process, please adhere to the following guidelines regarding cancellations:</p>
                        <ul className="list-disc list-inside pl-4">
                            <li><span className='text-color1'>Cancellation Policy</span>: A reservation is only confirmed upon receipt of payment and issuance of a confirmation email.</li>
                            <li><span className='text-color1'>Cancellation Fee</span>: Cancellations must be made at least 24 hours before the scheduled check-in time. Late cancellations may incur a fee.</li>
                            <li><span className='text-color1'>Refund Process</span>: Failure to arrive on the scheduled date without prior notice may result in the loss of the reservation and payment.</li>
                        </ul>
                        <p className=''>
                            For more details or assistance with cancellations, please contact us directly.
                        </p>
                    </div>
                </details>
            </div>

            <div className="py-5 bg- border-[1px] border-transparent border-b-slate-200   border-1 p-2 select-none">
                <details className="group">
                    <summary className="flex justify-between items-center font-normal cursor-pointer list-none">
                        <h1> Liability and Responsibility </h1>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <div className='text-neutral-600 mt-3 group-open:animate-sidebar_top text-xs flex flex-col gap-2'>
                        <p>While we strive to ensure a safe and enjoyable stay, Adhisthana Villas is not responsible for:</p>
                        <ul className="list-disc list-inside pl-4">
                            <li><span className='text-color1'>Personal Property</span>: Loss or damage to personal belongings during your stay.</li>
                            <li><span className='text-color1'>Injury </span>: Any injury or accidents occurring on the premises.</li>
                        </ul>
                        <p className=''>
                            Guests are responsible for their own safety and the safety of their property.
                        </p>
                    </div>
                </details>
            </div>

            <div className="py-5 bg- border-[1px] border-transparent border-b-slate-200   border-1 p-2 select-none">
                <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <h1> Changes to Terms </h1>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <p className="text-neutral-600 mt-3 group-open:animate-sidebar_top">
                        Adhisthana Villas reserves the right to update or modify these Terms & Conditions at any time. Any changes will be communicated through our website. Please check our Terms & Conditions regularly for any updates.
                    </p>
                </details>
            </div>

            <div className="py-5 bg- border-[1px] border-transparent border-b-slate-200   border-1 p-2 select-none">
                <details className="group">
                    <summary className="flex justify-between items-center font-normal cursor-pointer list-none">
                        <h1> Contact Information </h1>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <div className='text-neutral-600 mt-3 group-open:animate-sidebar_top text-xs flex flex-col gap-2'>
                        <p>For any questions or concerns regarding these Terms & Conditions, or if you need assistance with your reservation, please contact us:</p>
                        <ul className="list-disc list-inside pl-4">
                            <li><span className='text-color1'>Phone</span>: +6281111177199</li>
                            <li><span className='text-color1'>Email </span>: info@adhisthanavillas.com</li>
                            <li><span className='text-color1'>Address </span>: Jl. Borobudur - Ngadiharjo No.Km 2.5 Borobudur, Magelang, Central Java, Indonesia 56553</li>
                        </ul>

                    </div>
                </details>
            </div>

        </div>

        <div className='text-center textFaq text-color1 h-[3rem] max-h-[2rem] my-[2rem] px-5'>
            <h1> By booking with Adhisthana Villas, you acknowledge that you have read, understood, and agree to these Terms & Conditions. </h1>
        </div>
    </div>


  )
}
