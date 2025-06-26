/* eslint-disable react/prop-types */

import { MdDone, GiSandsOfTime , RxCross2 } from "@/style/icons"

interface ItemProps {
    label: string;
    value: string;
    style: string;
}


export const Item = ({ label, value, style } : ItemProps) => {
    return (
        <div className="item">
            <p className="label">{label}</p>
            <div className="flex gap-2">
            <p className={`${style}`}>{value}</p>
                { value === 'Pembayaran Berhasil' && <div> <MdDone size={23} className="text-green-700 flex-center"/> </div> }
                { value === 'Menunggu Pembayaran' && <div> <GiSandsOfTime size={21} className="text-green-700 flex-center"/> </div> }
                { value === 'Pesanan Dibatalkan' && <div> <RxCross2 size={23} className="text-red-700 flex-center"/> </div> }
                { value === 'Pesanan kedaluwarsa' && <div> <RxCross2 size={23} className="text-red-700 flex-center"/> </div> }
            </div>
        </div>
    );
}