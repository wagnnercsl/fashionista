const INITIAL_STATE = {
    product: "",
    products: []
};

function reducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case 'GET_CATALOG':
            return {
                ...state,
            }
            break;
    
        default:
            return state;
    }
}

export default reducer;