
const initialState = {
    characters: [], 
    totalPages: 0,
    count: 0
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'GET_ALL_CHARACTERS':
            return {
                ...state, characters: action.payload.results, totalPages: action.payload.info.pages, count: action.payload.info.count
            }
        default:
            return state
    }
}

export default reducer;