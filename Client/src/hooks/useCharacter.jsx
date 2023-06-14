import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCharacter, cleanCharacter } from "../redux/actions"

const useCharacter = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const character = useSelector((state) => state.characterDetail)
    useEffect(() => {
        dispatch(getCharacter(id));
        return () => { dispatch(cleanCharacter()) }
    }, [id, dispatch]);
    return character
}
export default useCharacter;