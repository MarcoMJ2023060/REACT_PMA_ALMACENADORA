import { useState } from "react";
import toast from "react-hot-toast";
import {getAllSuperheroes as getAllSuperheroesRequest} from "../services/api"

export const useobtenerLosSuperheroes = () => {
    const [superheros, setsuperheros] = useState([])

    const getAllSuperheroes = async (isLogged = false) => {
        try {
            const superherosData = await getAllSuperheroesRequest()
            if (superherosData.error) {
                return toast.error(
                    superherosData.e?.response?.data || 'Ocurrió un error al visualizar los supers'
                )
            }

            setsuperheros(superherosData.data)

        } catch (error) {
            console.error('Error fetching superhero:', error);
        }
    };

    return {
        getAllSuperheroes,
        isFetching: !Boolean(superheros),
        allSuperheros: superheros
    }
}