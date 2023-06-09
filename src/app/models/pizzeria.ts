import { Address } from "./address";

export interface Pizzeria {
    name: String;
    phone: String;
    website: String;
    rating: Number;
    noOfRatings: Number;
    address: Address; 
}