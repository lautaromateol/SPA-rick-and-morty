import { useState } from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHouse, faUser, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"

export default function Nav() {
  
   const [id, setId] = useState('')

   return (
      <header className="relative top-0 right-0 left-0 flex items-center">
      <nav className="w-full p-3 border border-solid border-1 border-[rgba(195,219,67,255)] bg-[rgba(64,180,202,255)]">
         <div className="flex justify-around items-center"> 
         <div>
         <a className="m-1 font-bold py-2 px-4 bg-[rgba(64,180,202,255)] hover:bg-blue-400 text-[rgba(195,219,67,255)] border border-[rgba(195,219,67,255)] rounded-full" href="/"><FontAwesomeIcon icon={faHouse} flip="horizontal" size="sm" /></a>
         </div>
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png" className="w-65 h-20 object-cover" alt="Rick And Morty" />
         <div>
         <a className="m-1 font-bold py-2 px-4 bg-[rgba(64,180,202,255)] hover:bg-blue-400 text-[rgba(195,219,67,255)] border border-[rgba(195,219,67,255)] rounded-full" href="/about"><FontAwesomeIcon icon={faUser} flip="horizontal" size="sm" /></a>
         </div>
         </div>
      </nav>
      </header>
   )
}