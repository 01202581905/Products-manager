import * as types from '../constants/actionTypes';
let initialState = [];

const findIndex = (products, id) => {
    let result = -1;
    products.forEach( (product , index) => {
        if( product.id === id) {
            result = index;
            return result;
        }
    });
    return result;
};

const products = (state = initialState, action ) => {
    let index = -1;
    switch(action.type) {
        case types.FETCH_PRODUCTS:
            state = action.products;
            return [...state];
        case types.ADD_PRODUCT:
            state.push(action.product);
            return [...state];
        case types.UPDATE_PRODUCT:
            index = findIndex(state, action.product.id);
            state[index] = action.product;
            return [...state];
        case types.DELETE_PRODUCT:
            index = findIndex(state, action.id);
            if( index !== -1 ) {
                state.splice(index, 1);
            }
            return [...state];
        default: return [...state];
    }
};

export default products;