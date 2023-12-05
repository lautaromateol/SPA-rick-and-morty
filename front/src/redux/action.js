import axios from 'axios'
import { BACKEND_URL } from '../../utils'

export const getAllCharacters = (name, gender, species, status, origin, page) => {
    try {
        const endpoint = `https://rickandmortyapi.com/api/character?name=${name}&status=${status}&species=${species}&gender=${gender}&origin=${origin}&page=${page}`
        return async (dispatch) => {
            const { data } = await axios.get(endpoint)
            return dispatch({
                type: 'GET_ALL_CHARACTERS',
                payload: data
            })
        }
    } catch (error) {
        console.error(error)
    }
}

export const getAllFavorites = (user) => {
    try {
        return async (dispatch) => {
            fetch(`${BACKEND_URL}/users/${user.id}`)
                .then((response) => response.json())
                .then(async ({ Favorites }) => {
                    const favsPromises = Favorites.map((fav) => axios.get(`https://rickandmortyapi.com/api/character/${fav.id}`))
                    const favsResponses = await axios.all(favsPromises)
                    const favs = favsResponses.map((response) => response.data)
                    return dispatch({
                        type: 'GET_ALL_FAVORITES',
                        payload: favs
                    })
                })
        }
    } catch (error) {
        console.error(error)
    }
}

export const deleteFav = (id) => {
    return {
        type: 'DELETE_FAVORITE',
        payload: id
    }
}

export const filterCharacters = (name, gender, status, species, id)=> {
    try {
        return (dispatch)=> {
            fetch(`${BACKEND_URL}/favorites/filter?name=${name}&gender=${gender}&status=${status}&species=${species}&id=${id}`)
            .then( response => response.json())
            .then( data => {
                return dispatch({
                    type: 'FILTER_FAVORITES',
                    payload: data
                })
            })
        }
    } catch (error) {
        console.error(error)
    }
}
