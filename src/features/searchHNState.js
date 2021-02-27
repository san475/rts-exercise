
const initialState = {
    query: '',
    hits: []
}

const searchHNStateReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case 'PUT_QUERY':
            return {...state, query: action.query}
        case 'PUT_HITS':
            return {...state, hits: action.hits}
        default:
    }

    return state;
}


export default searchHNStateReducer;