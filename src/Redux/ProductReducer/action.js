import axios from "axios"
import { CART_LENGTH, GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionTypes"

export const getProduct = (obj) => (dispatch) => {
    // console.log(credentials)
    dispatch({ type: PRODUCT_REQUEST })

    axios.get('https://smiling-houndstooth-boa.cyclic.app/Products', obj)
        .then((res) => {
            // console.log(res);
            dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data })
        }).catch(() => {
            console.log('failed')
            dispatch({ type: PRODUCT_FAILURE })
    })
}

export const getCart = (dispatch) => {
    console.log('credentials')

    axios.get("https://big-basket-api.onrender.com/Cart")
      
        .then((res) => {
            // console.log(res);
            dispatch({ type: CART_LENGTH, payload: res.data })
        }).catch(() => {
            console.log('failed')
            dispatch({ type: PRODUCT_FAILURE })
    })
}