import axios from "axios"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSkull, faCross, faMars, faVenus, faGlobe, faLocationDot} from "@fortawesome/free-solid-svg-icons"

const Detail = () => {

    const [character, setCharacter] = useState({})

    const { id } = useParams()

    useEffect(() => {
        try {
            axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => setCharacter(data))
        } catch (error) {
            console.error(error)
        }
    }, []);

    return (
        <div className="my-10 max-w-2xl mx-auto">
                <div className="w-full h-full rounded-md shadow-lg">
                    <img src={character.image} alt={character.name} className="mx-auto border border-2 border-solid border-[rgba(64,180,202,255)] rounded-full object-cover" />
                    <h1 className="text-3xl text-center font-bold">{character.name}</h1>
                    <h2 className="uppercase font-semibold text-center text-[rgba(64,180,202,255)]">{character.species}</h2>
                    <hr className="w-[90%] mx-auto my-5" />
                    {character.status === "Dead" ? <p className="text-left text-xl ml-4 text-red-500"><FontAwesomeIcon icon={faSkull}/> {character.status}</p> : <p className="text-left text-xl ml-4 my-1 text-[rgba(195,219,67,255)]"><FontAwesomeIcon icon={faCross}/> {character.status}</p>}
                    {character.gender === "Male" ? <p className="text-left text-xl ml-4 text-blue-600"><FontAwesomeIcon icon={faMars}/> {character.gender}</p> : <p className="text-left text-xl ml-4 my-1 text-red-300"><FontAwesomeIcon icon={faVenus}/> {character.gender}</p>}
                    <p className="text-left text-xl ml-4 my-1 text-black"><FontAwesomeIcon icon={faGlobe}/> {character.origin?.name}</p>
                    <p className="text-left text-xl ml-4 my-1 text-black"><FontAwesomeIcon icon={faLocationDot}/> {character.location?.name}</p>
                </div>

      </div>
    )
}

export default Detail