import { Add_To_Cart, Remove_Form_Cart, Clear_Cart} from './constant';
import { MenuProp } from '@/types/types';

interface Action {
    type: string;
    payload: any; // Payload can vary depending on the action
}

const initialState: MenuProp[] = [];

export const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case Add_To_Cart:
            return [...state, action.payload];
            
        case Remove_Form_Cart:
            return state.filter(item => item.name !== action.payload);

        case Clear_Cart:
            return []

        default:
            return state;
    }
};
