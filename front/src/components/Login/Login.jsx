import { useState } from "react"
import { Link } from "react-router-dom"
import { useUserContext } from "../../UserProvider"
import { useSelector } from "react-redux"

const Login = () => {

    const [data, setData] = useState({ email: "", password: "" })

    const {login} = useUserContext()

    const error = useSelector((state) => state.error)

    const handleSubmit = (e) => {
        e.preventDefault()
       login(data.email, data.password)
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center rounded-lg">
                <div>
                    <h1 className="text-xl md:text-2xl font-bold my-5">Login to your account</h1>
                </div>
                <section className="my-5 w-full">
                    <label className="block" htmlFor="email">Email</label>
                    <input required className="p-2 border w-full" type="email" id="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                </section>
                <section className="my-5 w-full">
                    <label className="block" htmlFor="password">Password</label>
                    <input required className="p-2 border w-full" type="password" id="password" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
                </section>
                <div>
                    {error && <p>{error}</p>}
                </div>
                <div className="my-5 flex justify-center">
                    <button className="bg-[rgba(64,180,202,255)] px-4 py-2 text-white rounded-lg" type="submit">Login</button>
                </div>
                <p className="underline">
                    <Link to="/register">
                        Don't have an account yet? Register
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default Login