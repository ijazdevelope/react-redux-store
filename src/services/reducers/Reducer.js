import { ADD_TO_CART, REMOVE_TO_CART } from "../Constants";

const initialState = {
    cardData: []
}

export const cardItems = (state = initialState, actions) => {
    switch(actions.type) {
        case ADD_TO_CART:
            return {...state, cardData: actions.data}
            break;

            default: return state;
    }
}