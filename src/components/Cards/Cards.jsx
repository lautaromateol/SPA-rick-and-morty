import { useSelector } from "react-redux"
import Card from '../Card/Card.jsx';
import Paginate from "../Paginate/Paginate"

const Cards = () => {

   const characters = useSelector((state) => state.characters)

   return (
      <div>
         <Paginate/>
         <div className="p-[2rem] grid grid-cols-1 md:grid-cols-4 gap-4">
            {
               characters.map((char) => {
                  return (
                     <Card
                        id={char.id}
                        image={char.image}
                        name={char.name}
                        gender={char.gender}
                        status={char.status}
                        species={char.species}
                        origin={char.origin.name}
                        />
                        )
                     })
                  }
         </div>
         </div>
   )
}

export default Cards;
