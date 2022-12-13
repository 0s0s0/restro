import { put, call } from 'redux-saga/effects';
import services from '../../services/apiService/index';
import * as type from '../../utils/Constants';

export function* createCart(action) {

    try {
        const createCartResponse = yield call(services.createCartAPI, action.payload.data);
        console.log('create Cart Response ============================>>>>>>>>>>>>>>>>', createCartResponse)
        yield put({ type: type.CREATE_CART_SUCCESS, createCartResponse });

        if (createCartResponse !== undefined && createCartResponse !== null) {
            console.log('create Cart Response @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  ', createCartResponse)
            action.payload.successCallBack(createCartResponse)

        } else {
            action.payload.failureCallBack(null);
        }
    } catch (e) {
        yield put({ type: type.CREATE_CART_FAILED, message: e.message });
    }
}

export function* addToCart(action) {

    try {
        const addToCartResponse = yield call(services.addToCartAPI, action.payload.data);
        console.log('add to Cart Response ============================>>>>>>>>>>>>>>>>', addToCartResponse)
        yield put({ type: type.ADD_TO_CART_SUCCESS, addToCartResponse });

        if (addToCartResponse !== undefined && addToCartResponse !== null) {
            console.log('add to Cart Response @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  ', addToCartResponse)
            action.payload.successCallBack(addToCartResponse)

        } else {
            action.payload.failureCallBack(null);
        }
    } catch (e) {
        yield put({ type: type.ADD_TO_CART_FAILED, message: e.message });
    }
}

export function* getCartItems(action) {

    try {
        const getCartItemsResponse = yield call(services.getCartItemsAPI, action.payload.data);
        console.log('get Cart items Response ============================>>>>>>>>>>>>>>>>', getCartItemsResponse)

        if (getCartItemsResponse !== undefined && getCartItemsResponse !== null) {
            yield put({ type: type.GET_CART_ITEMS_SUCCESS, getCartItemsResponse });
            console.log('get Cart items Response @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  ', getCartItemsResponse)
            action.payload.successCallBack(getCartItemsResponse)

        } else {
            action.payload.failureCallBack(null);
        }
    } catch (e) {
        yield put({ type: type.GET_CART_ITEMS_FAILED, message: e.message });
    }
}

export function* reduceCartItem(action) {

    try {
        const reduceCartItemResponse = yield call(services.reduceCartItemAPI, action.payload.data);
        console.log('reduce Cart item Response ============================>>>>>>>>>>>>>>>>', reduceCartItemResponse)

        if (reduceCartItemResponse !== undefined && reduceCartItemResponse !== null) {
            yield put({ type: type.REDUCE_CART_QUANTITY_SUCCESS, reduceCartItemResponse });
            console.log('reduce Cart item Response @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  ', reduceCartItemResponse)
            action.payload.successCallBack(reduceCartItemResponse)

        } else {
            action.payload.failureCallBack(null);
        }
    } catch (e) {
        yield put({ type: type.REDUCE_CART_QUANTITY_FAILED, message: e.message });
    }
}

export function* increaseCartItem(action) {

    try {
        const increasCartItemResponse = yield call(services.increaseCartItemAPI, action.payload.data);
        console.log('increase Cart item Response ============================>>>>>>>>>>>>>>>>', increasCartItemResponse)

        if (increasCartItemResponse !== undefined && increasCartItemResponse !== null) {
            yield put({ type: type.INCREASE_CART_QUANTITY_SUCCESS, increasCartItemResponse });
            console.log('increase Cart item Response @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  ', increasCartItemResponse)
            action.payload.successCallBack(increasCartItemResponse)

        } else {
            action.payload.failureCallBack(null);
        }
    } catch (e) {
        yield put({ type: type.INCREASE_CART_QUANTITY_FAILED, message: e.message });
    }
}

export function* removeCartItem(action) {

    try {
        const removeCartItemResponse = yield call(services.removeCartItemAPI, action.payload.data);
        console.log('increase Cart item Response ============================>>>>>>>>>>>>>>>>', removeCartItemResponse)

        if (removeCartItemResponse !== undefined && removeCartItemResponse !== null) {
            yield put({ type: type.REMOVE_FROM_CART_SUCCESS, removeCartItemResponse });
            console.log('increase Cart item Response @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  ', removeCartItemResponse)
            action.payload.successCallBack(removeCartItemResponse)

        } else {
            action.payload.failureCallBack(null);
        }
    } catch (e) {
        yield put({ type: type.REMOVE_FROM_CART_FAILED, message: e.message });
    }
}