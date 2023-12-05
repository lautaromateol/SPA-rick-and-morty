
const initialState = {
    characters: [], 
    totalPages: 0,
    count: 0,
    favorites: []
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'GET_ALL_CHARACTERS':
            return {
                ...state, characters: action.payload.results, totalPages: action.payload.info.pages, count: action.payload.info.count
            }
        case 'GET_ALL_FAVORITES': 
            return {
                ...state, favorites: action.payload, favoritesBackup: action.payload
            }
        case 'DELETE_FAVORITE':
            return {
                ...state, favorites: state.favorites.filter((fav) => fav.id !== action.payload)
            }
        case 'FILTER_FAVORITES':
            return {
                ...state, favorites: action.payload
            }
        default:
            return state
    }
}

export default reducer;