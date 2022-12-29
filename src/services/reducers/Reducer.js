import { actionTypes } from "../Constants";

const initialState = {
    cardData: []
}

export const cardItems = (state = initialState, {type, data}) => {

    switch(type) {
        case actionTypes.ADD_TO_CART:
            return {...state,  cardData: [...state.cardData, data]}
            break;

            case actionTypes.REMOVE_TO_CART:
                state.cardData.pop();
            return {...state}
            break;

            default: return state;
    }
}