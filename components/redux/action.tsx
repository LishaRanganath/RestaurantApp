import {Add_To_Cart} from "./constant"
import { MenuProp } from "@/types/types";



export function addToCart(item: MenuProp){
    return {
        type: Add_To_Cart, 
        payload: item,     
    };
}