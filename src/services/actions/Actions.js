import { actionTypes } from "../Constants";

export const addToCart = (data) => {
    // console.log(data)
    return {
        type: actionTypes.ADD_TO_CART,
        data
    }
}

export const removeToCart = () => {
    return {
        type: actionTypes.REMOVE_TO_CART
    }
}