import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteFav } from "../../redux/action";
import { BACKEND_URL } from "../../../utils";
import { useUserContext } from "../../UserProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSkull, faCross, faMars, faVenus, faMarsAndVenus, faGlobe, faQuestion, faHeart } from "@fortawesome/free-solid-svg-icons"

function Card({ id, name, gender, species, status, origin, image, fav }) {

   const navigate = useNavigate()

   const { user } = useUserContext()

   const [isFav, setIsFav] = useState(null)

   const dispatch = useDispatch()

   const addFav = async () => {
      if (user.id) {
         try {
            const response = await fetch(`${BACKEND_URL}/favorites/new-favorite`, {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json'
               },
               body: JSON.stringify({ userId: user.id, favId: id })
            })
            if (response.ok) {
               setIsFav(true)
            }
         } catch (error) {
            console.error(error)
         }
      } else navigate('/login')
   }

   const removeFav = async () => {
      try {
         const response = await fetch(`${BACKEND_URL}/favorites/delete-favorite?id=${id}`, {
            method: 'DELETE',
            headers: {
               'Content-Type': 'application/json'
            }
         })
         if (response.ok) {
            setIsFav(false)
            dispatch(deleteFav(id))
         }
      } catch (error) {
         console.error(error)
      }
   }

   useEffect(() => {
      if (!isFav) setIsFav(fav)
   }, [fav])

   return (
      <div className="w:2/3 h-full rounded-md overflow-hidden shadow-lg border border-solid border-1 border-gray-400 transition duration-2000 ease-in-out hover:scale-105 transform">

         {

               isFav ?
                  <FontAwesomeIcon onClick={removeFav} className="absolute text-red-500 right-2 top-2 hover:cursor-pointer" icon={faHeart} />
                  :
                  <FontAwesomeIcon onClick={addFav} className="absolute right-2 top-2 hover:cursor-pointer" icon={faHeart} />

            
         }

         <div className="w-full h-70">
            <img src={image} alt={name} className="w-full h-full object-cover" />
         </div>
         <div className="p-2">
            <Link to={`/detail/${id}`}>
               <h2 className="text-xl font-bold text-left ml-4 hover:underline">{name}</h2>
            </Link>
            <h3 className="uppercase font-semibold text-left ml-4 text-[rgba(64,180,202,255)]">{species}</h3>
         </div>
         <hr className="w-[90%] mx-auto" />
         <div className="p-2">
            {status === "Dead" ? <p className="text-left ml-4 text-red-500"><FontAwesomeIcon icon={faSkull} /> {status}</p> : status === "Alive" ? <p className="text-left ml-4 text-[rgba(195,219,67,255)]"><FontAwesomeIcon icon={faCross} /> {status}</p> : <p className="text-left ml-4 text-black"><FontAwesomeIcon icon={faQuestion} /> {status}</p>}
            {gender === "Male" ? <p className="text-left ml-4 text-blue-600"><FontAwesomeIcon icon={faMars} /> {gender}</p> : gender === "Female" ? <p className="text-left ml-4 text-red-300"><FontAwesomeIcon icon={faVenus} /> {gender}</p> : <p className="text-left ml-4 text-black"><FontAwesomeIcon icon={faMarsAndVenus} /> {gender}</p>}
            <p className="text-left ml-4 text-black"><FontAwesomeIcon icon={faGlobe} /> {origin}</p>
         </div>

      </div>
   );
}

export default Card;