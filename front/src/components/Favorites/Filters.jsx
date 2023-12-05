import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faHeart } from "@fortawesome/free-solid-svg-icons"
import { useUserContext } from "../../UserProvider"
import { filterCharacters } from "../../redux/action"

const Filters = ()=> {

    const dispatch = useDispatch()

    const {user} = useUserContext()

    const [name, setName] = useState("")

    const [gender, setGender] = useState("")

    const [species, setSpecies] = useState("")

    const [status, setStatus] = useState("")

    const [dropdown, setDropdown] = useState(false)

    useEffect(()=> {
        dispatch(filterCharacters(name, gender, status, species, user.id))
    }, [name, gender, species, status])

    return(
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold my-5">Favorites <FontAwesomeIcon className="text-red-500" icon={faHeart}/></h1>
            <div className='grid grid-cols-4 sm:grid hidden'>
                <input className='rounded-lg outline-none border border-2 border-solid border-gray-400 p-1 mx-2' placeholder='Find by name' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <select className='rounded-lg outline-none border border-2 border-solid border-gray-400 p-1 mx-2' onClick={(e) => setGender(e.target.value)}>
                    <option value="">No Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="Unknown">Unknown</option>
                </select>
                <input className='rounded-lg outline-none border border-2 border-solid border-gray-400 p-1 mx-2' placeholder='Find by species' value={species} onChange={(e) => setSpecies(e.target.value)} />
                <select className='rounded-lg outline-none border border-2 border-solid border-gray-400 p-1 mx-2' onClick={(e) => setStatus(e.target.value)}>
                    <option value="">No Status</option>
                    <option value="Alive">Alive</option>
                    <option value="Dead">Dead</option>
                    <option value="Unknown">Unknown</option>
                </select>
            </div>
            <div className="md:hidden mx-auto">
                <button onClick={() => setDropdown(!dropdown)} className='w-full'>Filters <FontAwesomeIcon size='sm' icon={faChevronDown} /></button>
                <div className="flex flex-col mx-auto">
                    {
                        dropdown ?
                            <>
                                <input className='rounded-lg outline-none border border-2 border-solid border-gray-400 p-1 my-2' placeholder='Find by name' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                                <select className='rounded-lg outline-none border border-2 border-solid border-gray-400 p-1 my-2' onClick={(e) => setGender(e.target.value)}>
                                    <option value="">No Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="genderless">Genderless</option>
                                    <option value="unknown">Unknown</option>
                                </select>
                                <input className='rounded-lg outline-none border border-2 border-solid border-gray-400 p-1 my-2' placeholder='Find by species' value={species} onChange={(e) => setSpecies(e.target.value)} />
                                <select className='rounded-lg outline-none border border-2 border-solid border-gray-400 p-1 my-2' onClick={(e) => setStatus(e.target.value)}>
                                    <option value="">No Status</option>
                                    <option value="alive">Alive</option>
                                    <option value="dead">Dead</option>
                                    <option value="unknown">Unknown</option>
                                </select>
                            </>
                            : ""
                    }
                </div>
            </div>
        </div>
    )
}

export default Filters;