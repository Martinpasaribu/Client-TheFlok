

interface Review {
    name: number;
    email: string;
    image: string;
    comment: string;
}

interface Room {
    roomId: string;
    quantity: number;
    price: number;
    name: string;
    nameAdditional: string;
}


interface Image {
    row:number;
    image:string;
}

export  interface RoomModels {
    _id: string;
    name: string;
    nameAdditional: string;
    image: Image [],
    imagePoster: string;
    imageShort: string;
    maxCapacity: number;
    price:number;
    priceDateList:number;
    size: number;
    quantity:0;
    bedType: string;
    available: number;
    availableCount : number;
    used: number;
    describe:string;
    shortDesc:string;
    facility: string [];
    review: Review[];
    createAt: number;
    creatorId: string;
    rating: number;

}

export  interface UnAvailableRoomModels {
    _id: string;
    transactionId: string;
    userId: string;  
    status: string;
    checkIn: string;
    checkOut: string;
    products: Room[];

}


export interface ImageIn {
    row:number;
    image:string;
}

