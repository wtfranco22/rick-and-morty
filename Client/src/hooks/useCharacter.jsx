import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { cleanCharacter, getCharacter } from "../redux/actions"

const useCharacter = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const character = useSelector((state) => state.characterDetail);
    useEffect(() => {
        dispatch(getCharacter(Number(id)))
            .catch(() => { navigate('/Error'); });
        return () => { dispatch(cleanCharacter()) };
    }, [id, dispatch, navigate]);
    return character;
}
export default useCharacter;