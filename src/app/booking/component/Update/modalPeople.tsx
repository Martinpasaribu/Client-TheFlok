import { IoPeople } from '@/style/icons';
import React, { useEffect, useState } from 'react'

interface ModalPeopleProps {

    isOpen: boolean;
    closeModal : () =>  void;
    peopleMax: number;
    setPeoples: (people: number) =>void;
}


const ModalPeople = ({isOpen, closeModal, peopleMax, setPeoples }: ModalPeopleProps) => {

    const [people, setPeople] = useState(() => (peopleMax <= 4 ? 4 : 0))

    const [peopleInput, setPeopleInput] = useState(0)

    const [warning, setWarning] = useState(false)

    if(!isOpen) return null;


    const handlePlus = () => {
        if( peopleInput < people ){
            setPeopleInput(peopleInput+1)
            setWarning(false);
        }else{
            setWarning(true);
        }
    }

    const handleMinus = () => {
        if( peopleInput > 0 ){
            setPeopleInput(peopleInput-1)
            setWarning(false);
        }else{

        }
    }

    const handleUpdatePeople = () => {
        setPeoples(peopleInput)
        closeModal()
    }

    // useEffect(() => {
      
    //     if (peopleMax < 4) {
    //       setPeople(0);
    //     } else if (peopleMax >= 4 && people < 4) {
    //       setPeople(4);
    //     }
    //   }, [peopleMax, people]);
    



    return (

        <div className='relative w-full'>

            <div className="fixed inset-0 z-40  overflow-y-auto  bg-opacity-50 bg-gray-900 w-full">
                <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0 w-full ">

                    <div className="relative transform overflow-hidden rounded-lg  text-left shadow-xl transition-all sm:my-8 w-full max-w-[20rem] sm:max-w-[30rem] ">
                        <div className=" px-4 pb-4 pt-5 sm:p-6 sm:pb-4 bg-white">
                            <div className="sm:flex sm:items-start w-full">
                            
                                <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-gray-300 sm:mx-0 sm:size-10">
                                    <IoPeople size={20} />
                                </div>

                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                                    <h3 className="text-base font-semibold text-gray-900" id="modal-title">Update People</h3>
                
                                    <div className="relative flex items-center justify-center p-4 gap-5 w-full">
                                    
                                        <button onClick={handleMinus} className="w-full h-[2rem] max-w-[2rem] p-2 flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md  focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none" type="button" id="decrement-button" data-input-counter-decrement="counter-input">
                                            <svg className="w-full h-full max-w-[1.5rem] max-h-[1.5rem] text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
                                            </svg>
                                        </button>

                                        <h1>
                                            {peopleInput}
                                        </h1>

                                        <button onClick={handlePlus} className="w-full h-[2rem] max-w-[2rem]  p-2 flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md  focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none" type="button" id="increment-button" data-input-counter-increment="counter-input" >
                                            <svg className="w-full h-full max-w-[1.5rem] max-h-[1.5rem] text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                <path stroke="currentColor" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                                            </svg>
                                        </button>

                                        <span className={` ${warning ? 'text-sm absolute -bottom-2 text-red-500': 'hidden'}`}>
                                            <h1>Max Capacity </h1>
                                        </span>

                                    </div>
                
                                </div>

                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button onClick={handleUpdatePeople} type="button" className="inline-flex w-full justify-center rounded-md bg-color1 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Update</button>
                            <button onClick={closeModal} type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default ModalPeople