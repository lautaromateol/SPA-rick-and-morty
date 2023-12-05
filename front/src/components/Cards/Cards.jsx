import { useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { useUserContext } from "../../UserProvider.jsx";
import { BACKEND_URL } from "../../../utils"
import Card from '../Card/Card.jsx';
import Paginate from "../Paginate/Paginate"

const Cards = () => {

   const characters = useSelector((state) => state.characters)

   const { user } = useUserContext()

   const [favorites, setFavorites] = useState([])

   useEffect(() => {
      if (user.id) {
         fetch(`${BACKEND_URL}/users/${user.id}`)
            .then(response => response.json())
            .then(({ Favorites }) => {
               setFavorites(Favorites.map((fav) => fav.id))
            })
      }
   }, [])

   return (
      <div>
         <Paginate />
         <div className="p-[2rem] grid grid-cols-1 md:grid-cols-4 gap-4">
            {
               characters.map((char) => {
                  return (
                     <Card key={char.id}
                        id={char.id}
                        image={char.image}
                        name={char.name}
                        gender={char.gender}
                        status={char.status}
                        species={char.species}
                        origin={char.origin.name}
                        fav={favorites?.includes(Number(char.id)) ? true : false}
                     />
                  )
               })
            }
         </div>
      </div>
   )
}

export default Cards;
