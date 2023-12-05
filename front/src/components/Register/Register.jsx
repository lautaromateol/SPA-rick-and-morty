import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { BACKEND_URL } from "../../../utils"
import toast from "react-hot-toast"

const Register = () => {

    const [userInfo, setuserInfo] = useState({ email: "", password: "" })

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const error = useSelector((state) => state.error)

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const response = await fetch(`${BACKEND_URL}/users/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            })
            const data = await response.json()
            if(response.ok){
                toast.success("Registered successfully")
                navigate('/login')
                dispatch(cleanErrors())
            } else {
               toast.error(data.error)
            }
        } catch (error) {
            console.error("SERVER ERROR: ", error.message)
        }
    }

    return (
        <div className="p-10 flex items-center justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center p-20 rounded-lg">
                <div>
                    <h1 className="text-xl md:text-2xl font-bold my-5">Create an account</h1>
                </div>
                <section className="my-5 w-full">
                    <label className="block" htmlFor="email">Insert your email</label>
                    <input required className="p-2 border w-full" type="email" id="email" value={userInfo.email} onChange={(e) => setuserInfo({ ...userInfo, email: e.target.value })} />
                </section>
                <section className="my-5 w-full">
                    <label className="block" htmlFor="password">Insert your password</label>
                    <input required className="p-2 border w-full" type="password" id="password" value={userInfo.password} onChange={(e) => setuserInfo({ ...userInfo, password: e.target.value })} />
                </section>
                <div>
                    {error && <p>{error}</p>}
                </div>
                <div className="my-5 flex justify-center">
                    <button className="bg-[rgba(64,180,202,255)] px-4 py-2 text-white rounded-lg" type="submit">Register</button>
                </div>
                <p className="underline">
                    <Link to="/login">
                        Do you have an account? Login
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default Register