// userReducer.ts
import { Set_Role } from "./constant";

const initialRole = {
    role: ""
};

export const userReducer = (state = initialRole, action: any) => {
    switch (action.type) {
        case Set_Role:
            return { ...state, role: action.payload }; 

        default:
            return state; 
    }
};
