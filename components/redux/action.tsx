import {Add_To_Cart , Remove_Form_Cart , Clear_Cart , Set_Role} from "./constant"
import { MenuProp } from "@/types/types";



export function addToCart(item: MenuProp){
    return {
        type: Add_To_Cart, 
        payload: item,     
    };
}

export function removeFromCart(name: string){
    return {
        type: Remove_Form_Cart, 
        payload: name,     
    };
}

export function clearCart(){
    return {
        type: Clear_Cart
    }
}

export function userRole(role: string){
    return{
        type: Set_Role,
        payload: role
    }
}