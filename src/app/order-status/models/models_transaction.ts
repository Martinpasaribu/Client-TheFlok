
export interface TransactionModels {
    _id: string;
    name:string;
    nameAdditional:string;
    email:string;
    bookingId: string;
    userId: string;
    status: string;
    checkIn: string;
    checkOut:string;
    grossAmount: number;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
    bank: string;
    card_type: string;
    payment_type:string; 
    products?: Products[];
    snap_token: string;
    paymentUrl: string;     
    va_numbers: VaNumber;
}

interface Products {
    name: string;
    nameAdditional: string;
    roomId: string;
    price: number; 
    quantity: number ;
}

interface VaNumber {
    va_number : string;
    bank : string;
}
