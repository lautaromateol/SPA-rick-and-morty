import { Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSkull, faCross, faMars, faVenus, faMarsAndVenus, faGlobe, faQuestion} from "@fortawesome/free-solid-svg-icons"

function Card({id, name, gender, species, status, origin, image}) {

   //green [rgba(195,219,67,255)] 
   // blue [rgba(64,180,202,255)] 
   
   return (
      <div className="w:2/3 h-full rounded-md overflow-hidden shadow-lg border border-solid border-1 border-gray-400 transition duration-2000 ease-in-out hover:scale-105 transform">
         <div className="w-full h-70">
            <img src={image} alt={name} className="w-full h-full object-cover" />
         </div>
         <div className="p-2">
         <Link to={`detail/${id}`}>
         <h2 className="text-xl font-bold text-left ml-4 hover:underline">{name}</h2>
         </Link>
         <h3 className="uppercase font-semibold text-left ml-4 text-[rgba(64,180,202,255)]">{species}</h3>
         </div>
         <hr className="w-[90%] mx-auto" />
         <div className="p-2">
            {status === "Dead" ? <p className="text-left ml-4 text-red-500"><FontAwesomeIcon icon={faSkull}/> {status}</p> : status === "Alive" ? <p className="text-left ml-4 text-[rgba(195,219,67,255)]"><FontAwesomeIcon icon={faCross}/> {status}</p> : <p className="text-left ml-4 text-black"><FontAwesomeIcon icon={faQuestion}/> {status}</p>}
            {gender === "Male" ? <p className="text-left ml-4 text-blue-600"><FontAwesomeIcon icon={faMars}/> {gender}</p> : gender === "Female" ? <p className="text-left ml-4 text-red-300"><FontAwesomeIcon icon={faVenus}/> {gender}</p> : <p className="text-left ml-4 text-black"><FontAwesomeIcon icon={faMarsAndVenus}/> {gender}</p>}
            <p className="text-left ml-4 text-black"><FontAwesomeIcon icon={faGlobe}/> {origin}</p>
         </div>

      </div>
   );
}

export default Card;