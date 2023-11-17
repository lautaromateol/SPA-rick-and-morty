import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { getAllCharacters } from '../../redux/action.js';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons"

const Paginate = ()=> {

    const dispatch = useDispatch()

    const {totalPages, count} = useSelector((state) => state)

    const [name, setName] = useState("")

    const [gender, setGender] = useState("")

    const [species, setSpecies] = useState("")

    const [status, setStatus] = useState("")

    const [origin, setOrigin] = useState("")

    const [page, setPage] = useState(1)
 
    useEffect(() => {
       dispatch(getAllCharacters(name, gender, species, status, origin, page))
    }, [name, gender, species, status, origin, page])
 
    return(
        <div className='flex flex-col items-center justify-center mt-8'>
        <div className="flex flex-row items-center justify-center">
            <div className='mx:auto md:mr-10'>
             {page !== 1 && <button className='mx-2' onClick={() => setPage(page - 1)}><FontAwesomeIcon size='sm' icon={faChevronLeft}/> {page - 1}</button>}
            <span className='mx-5'>{page} / {totalPages}</span>
            {page !== totalPages && <button className='mx-2' onClick={() => setPage(page + 1)}>{page + 1} <FontAwesomeIcon size='sm' icon={faChevronRight}/></button>}
            </div>
            <div className='grid grid-cols-5 sm:grid hidden'>
                <input className='rounded-lg outline-none border border-2 border-solid border-gray-400 p-1 mx-2' placeholder='Find by name' type="text" value={name} onChange={(e)=> setName(e.target.value)} />
                <select className='rounded-lg outline-none border border-2 border-solid border-gray-400 p-1 mx-2'onClick={(e)=> setGender(e.target.value)}>
                    <option value="">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="Unknown">Unknown</option>
                </select>
                <input className='rounded-lg outline-none border border-2 border-solid border-gray-400 p-1 mx-2' placeholder='Find by species' value={species} onChange={(e)=> setSpecies(e.target.value)}/>
                <select className='rounded-lg outline-none border border-2 border-solid border-gray-400 p-1 mx-2' onClick={(e)=> setStatus(e.target.value)}>
                    <option value="">Status</option>
                    <option value="Alive">Alive</option>
                    <option value="Dead">Dead</option>
                    <option value="Unknown">Unknown</option>
                </select>
                <input className='rounded-lg outline-none border border-2 border-solid border-gray-400 p-1 mx-2' placeholder='Find by origin' value={origin} onChange={(e)=> setOrigin(e.target.value)}/>
            </div>
        </div>
        <div className='mx-auto mt-6'>
            <p className='font-bold'>Characters shown: {count}</p>
        </div>
        </div>
    )
}
// green [rgba(195,219,67,255)] 
// blue [rgba(64,180,202,255)]

export default Paginate