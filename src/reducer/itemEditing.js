import * as types from '../constants/actionTypes';

let initialState = {};

const itemEditing = ( state = initialState, action ) => {
    switch( action.type ) {
        case types.EDIT_PRODUCT:
            return action.product;
        case types.CLEAR_EDITING:
            return {};
        default: return state;
    }
}

export default itemEditing;