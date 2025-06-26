import { RoomModels } from "@/models/roomModels";

export interface ImageModels {

    row:number;
    image:string;
}

export interface BucketModels {

    data : RoomModels[] ;
    quantity: number
}

