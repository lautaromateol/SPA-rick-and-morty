import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import {BACKEND_URL} from "../utils"
import toast from "react-hot-toast"

const UserContext = React.createContext()

export const useUserContext = ()=> {
    return(useContext(UserContext))
}

export function UserProvider({children}){

    const navigate = useNavigate()

    const [user, setUser] = useState([])

    const dispatch = useDispatch()

    const login = async(email, password)=> {
        try {
            const response = await fetch(`${BACKEND_URL}/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({email, password})
            })
            const data = await response.json()
            if(response.ok){
                localStorage.setItem("token", data.token)
                setUser({email, id: data.id})
                toast.success("Logged in successfully")
                navigate('/')
            }
            else {
                toast.error(data.error)
            }
        } catch (error) {
            console.error("THIS IS AN SERVER ERROR: ", error.message)
        }
            
    }

    const logout = ()=> {
        localStorage.removeItem("token"),
        setUser(null)
    }

    return(
        <UserContext.Provider value={{user, login, logout}}>
                {children}
        </UserContext.Provider>
    )
}