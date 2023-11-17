import axios from 'axios'


export const getAllCharacters = (page)=> {
    try {
        const endpoint = `https://rickandmortyapi.com/api/character?page=${page}`
        return async(dispatch) => {
            const {data} = await axios.get(endpoint)
                return dispatch({
                    type:'GET_ALL_CHARACTERS',
                    payload: data.results
                })
        }
    } catch (error) {
        console.error(error)
    }
}