import React from 'react'

export const Layout = () => {

  return (
    
    <div className=" mx-auto h-full">
            
        <div className="flex-center bg-privacy_bg bg-no-repeat bg-cover bg-center flex-col gap-5 items-center h-[28rem] max-h-[20rem] md:max-h-[25rem]  bg-color3 w-full px-2">
            
            <div className='absolute z-20 w-full h-[30rem] bg-opacity-5 bg-color1'></div>

            <h2 className="font-bold text-lg md:text-xl xl:text-2xl mt-5 tracking-tight">
                Privacy Policy
            </h2>
    
            <p className="font-semibold text-[11px] w-full max-w-[60rem] md:text-md xl:text-lg mt-5 text-slate-600 text-center">
                At Adhisthana Villas, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you interact with us. By using our services, you consent to the practices described below.
            </p>
        </div>

        <div className="textFaq styleFaq  divide-y divide-y-reverse divide-neutral-200 max-w-[90rem] h-full ">


            <div className="py-5 bg- border-[1px] border-transparent border-b-slate-200   border-1 p-2 select-none">
                <details className="group">
                    <summary className="flex justify-between items-center font-normal cursor-pointer list-none">
                        <h1> Information We Collect </h1>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <div className='text-neutral-600 mt-3 group-open:animate-sidebar_top text-xs flex flex-col gap-2'>
                        <p>
                            We collect information to provide you with a better experience. The types of information we collect include:
                        </p>
                        <ul className="list-disc list-inside pl-4">
                            <li><span className='text-color1'>Personal Identification Information</span>: A reservation is only confirmed upon receipt of payment and issuance of a confirmation email.</li>
                            <li><span className='text-color1'>Reservation Details</span>: Cancellations must be made at least 24 hours before the scheduled check-in time. Late cancellations may incur a fee.</li>
                            <li><span className='text-color1'>Usage Data</span>: Failure to arrive on the scheduled date without prior notice may result in the loss of the reservation and payment.</li>
                        </ul>
                    </div>
                </details>
            </div>

            <div className="py-5 bg- border-[1px] border-transparent border-b-slate-200   border-1 p-2 select-none">
                <details className="group">
                    <summary className="flex justify-between items-center font-normal cursor-pointer list-none">
                        <h1> How We Use Your Information </h1>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <div className='text-neutral-600 mt-3 group-open:animate-sidebar_top text-xs flex flex-col gap-2'>
                        <p>
                            We collect information to provide you with a better experience. The types of information we collect include:
                        </p>
                        <ul className="list-disc list-inside pl-4">
                            <li><span className='text-color1'>To Process Reservations</span>: To confirm, manage, and communicate details about your bookings.</li>
                            <li><span className='text-color1'>To Improve Our Services</span>:  To understand your preferences and enhance your experience at Adhisthana Villas.</li>
                            <li><span className='text-color1'>To Send Communications</span>:  To provide you with updates, offers, and information relevant to your stay or our services.</li>
                            <li><span className='text-color1'>To Handle Payments</span>: To process transactions securely and manage payment details.</li>
                        </ul>
                    </div>
                </details>
            </div>


            <div className="py-5 bg- border-[1px] border-transparent border-b-slate-200   border-1 p-2 select-none">
                <details className="group">
                    <summary className="flex justify-between items-center font-normal cursor-pointer list-none">
                        <h1> Sharing Your Information </h1>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <div className='text-neutral-600 mt-3 group-open:animate-sidebar_top text-xs flex flex-col gap-2'>
                        <p>
                            We do not sell or rent your personal information. We may share your information in the following situations:
                        </p>
                        <ul className="list-disc list-inside pl-4">
                            <li><span className='text-color1'>With Service Providers</span>: TWho assist us in operating our business, such as payment processors and booking systems.</li>
                            <li><span className='text-color1'>For Legal Requirements</span>:  If required to comply with legal obligations or protect our rights and interests.</li>
                            <li><span className='text-color1'>With Your Consent</span>:  If you have explicitly agreed to share your information for specific purposes.</li>
                        </ul>
                    </div>
                </details>
            </div>


            <div className="py-5 bg- border-[1px] border-transparent border-b-slate-200   border-1 p-2 select-none">
                <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <h1> Data Security </h1>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <p className="text-neutral-600 mt-3 group-open:animate-sidebar_top">
                    We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure. We strive to use commercially acceptable means to protect your data but cannot guarantee absolute security.
                    </p>
                </details>
            </div>

            <div className="py-5 bg- border-[1px] border-transparent border-b-slate-200   border-1 p-2 select-none">
                <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <h1> Cookies and Tracking Technologies </h1>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <p className="text-neutral-600 mt-3 group-open:animate-sidebar_top">
                        Our website may use cookies and similar tracking technologies to enhance your browsing experience. These tools help us understand how you use our site and allow us to tailor our services accordingly. You can adjust your browser settings to refuse cookies if you prefer.
                    </p>
                </details>
            </div>

            <div className="py-5 bg- border-[1px] border-transparent border-b-slate-200   border-1 p-2 select-none">
                <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <h1> Your Consent </h1>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <p className="text-neutral-600 mt-3 group-open:animate-sidebar_top">
                        By using our services, you consent to the collection, use, and sharing of your personal information as described in this Privacy Policy. Your continued use of our website and services signifies your acceptance of these practices.
                    </p>
                </details>
            </div>

            <div className="py-5 bg- border-[1px] border-transparent border-b-slate-200   border-1 p-2 select-none">
                <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                        <h1> Changes to This Policy </h1>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <p className="text-neutral-600 mt-3 group-open:animate-sidebar_top">
                        Adhisthana Villas reserves the right to update or modify this Privacy Policy at any time. Any changes will be posted on our website, and your continued use of our services constitutes acceptance of the updated policy.
                    </p>
                </details>
            </div>


            <div className="py-5 bg- border-[1px] border-transparent border-b-slate-200   border-1 p-2 select-none">
                <details className="group">
                    <summary className="flex justify-between items-center font-normal cursor-pointer list-none">
                        <h1> Contact Us </h1>
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <div className='text-neutral-600 mt-3 group-open:animate-sidebar_top text-xs flex flex-col gap-2'>
                        <p>If you have any questions or concerns regarding this Privacy Policy, please reach out to us at:</p>
                        <ul className="list-disc list-inside pl-4">
                            <li><span className='text-color1'>Phone</span>: +6281111177199</li>
                            <li><span className='text-color1'>Email </span>: info@adhisthanavillas.com</li>
                            <li><span className='text-color1'>Address </span>: Jl. Borobudur - Ngadiharjo No.Km 2.5 Borobudur, Magelang, Central Java, Indonesia 56553</li>
                        </ul>

                    </div>
                </details>
            </div>

        </div>


    </div>


  )
}
