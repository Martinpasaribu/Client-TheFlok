"use client";

import Calendar from "./component/Calender/calender";
import Link from "next/link";
import DatePicker from "./component/Calender/datePicker";


const HandleDate= () => {
    
}

const Layout = () => {
    return (
        <div>
            
            {/* <Calendar checkIn={''} checkOut={''} /> */}

            <DatePicker/>
            
        </div>
    );
};

export default Layout;
