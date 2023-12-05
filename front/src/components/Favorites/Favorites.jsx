import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useUserContext } from "../../UserProvider";
import { getAllFavorites } from "../../redux/action";
import Card from "../Card/Card";
import Filters from "./Filters";

const Favorites = () => {

    const favorites = useSelector((state) => state.favorites)

    const dispatch = useDispatch()

    const { user } = useUserContext()

    useEffect(() => {
        dispatch(getAllFavorites(user))
    }, [])

    return (
        <div>
            <Filters />
            <div className="p-[2rem] grid grid-cols-1 md:grid-cols-4 gap-4">
                {favorites.map(({ id, name, status, gender, origin, image, species }) => (
                    <Card key={id}
                        id={id}
                        name={name}
                        status={status}
                        gender={gender}
                        origin={origin.name}
                        image={image}
                        species={species}
                        fav={true}
                    />
                ))}
            </div>
        </div>
    )
}

export default Favorites;