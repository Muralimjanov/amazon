import { GET_ALL_PRODUCTS, ADD_TO_CART, DELETE_TO_CART, GET_CATEGORY_PRODUCTS, GET_CATEGORY } from "../Types";

export const getAllProducts = (data) => {
    return {
        type: GET_ALL_PRODUCTS,
        payload: data
    }
}

export const addToCart = (id, data) => {
    const element = data.products.find((elem) => elem.id === id);
    const newArr = [...data.cart, element];
    return {
        type: ADD_TO_CART,
        payload: newArr
    }
}

export const deleteFromCart = (id, data) => {
    const newArr = data.cart.filter((elem) => elem.id !== id);
    return {
        type: DELETE_TO_CART,
        payload: newArr
    }
}

export const getCategoryProducts = (category, data) => {
    const newArr = data.products.filter((elem) => elem.category === category);
    return {
        type: GET_CATEGORY_PRODUCTS,
        payload: newArr
    }
}

export const getCategory = (id, data) => {
    const element = data.categories.find((elem) => elem.id === id);
    return {
        type: GET_CATEGORY,
        payload: element
    }
}
