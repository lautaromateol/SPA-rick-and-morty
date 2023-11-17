import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux"
import { getAllCharacters } from '../../redux/action.js';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons"

const Paginate = ()=> {

    const dispatch = useDispatch()

    const [page, setPage] = useState(1)
 
    useEffect(() => {
       dispatch(getAllCharacters(page))
    }, [page])
 
    return(
        <div className="flex items-center justify-center mt-10">
            <div>
             {page !== 1 && <button className='mx-2' onClick={() => setPage(page - 1)}><FontAwesomeIcon size='sm' icon={faChevronLeft}/> {page - 1}</button>}
            <span className='mx-5'>{page} / 42</span>
            {page !== 42 && <button className='mx-2' onClick={() => setPage(page + 1)}>{page + 1} <FontAwesomeIcon size='sm' icon={faChevronRight}/></button>}
            </div>
        </div>
    )
}

export default Paginate