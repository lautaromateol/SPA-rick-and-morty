import axios from 'axios'


export const getAllCharacters = (name, gender, species, status, origin, page)=> {
    try {
        const endpoint = `https://rickandmortyapi.com/api/character?name=${name}&status=${status}&species=${species}&gender=${gender}&origin=${origin}&page=${page}`
        return async(dispatch) => {
            const {data} = await axios.get(endpoint)
                return dispatch({
                    type:'GET_ALL_CHARACTERS',
                    payload: data
                })
        }
    } catch (error) {
        console.error(error)
    }
}