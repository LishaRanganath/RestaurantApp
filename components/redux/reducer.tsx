import {Add_To_Cart} from './constant'
import { MenuProp } from '@/types/types';

interface Action {
    type: string;
    payload: MenuProp;
}
const initialState: MenuProp[] = [];
export const reducer  = (state = initialState ,action: Action) =>{
    switch(action.type){
        case Add_To_Cart:
            return [
                ...state,
                action.payload
            ]
            default:
                return state
    }
}