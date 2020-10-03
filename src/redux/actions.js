// Actions
import Axios from "axios"

export const BuyPokemonActions = (cant) => {
    return {
        type: BuyPokemon,
        payload: cant,
    }
}

export const ReturnPokemonActions = (cant) => {
    return {
        type: ReturnPokemon,
        payload: cant
    }
}

// Async Actions
export const FetchPokemonRequestAction = () => {
    return {
        type: FetchPokemonRequest,

    }
}
export const FetchPokemonSuccessAction = (pokemon) => {
    return {
        type: FetchPokemonSuccess,
        payload: pokemon

    }
}
export const FetchPokemonFailureAction = (error) => {
    return {
        type: FetchPokemonFailure,
        payload: error

    }
}
export const fetchPokemonAction = (valor) => {
    return (dispatch) => {
        dispatch(FetchPokemonRequestAction());
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
            .then(response => {
                dispatch(FetchPokemonSuccessAction([response.data]))
            })
            .catch(error => {
                dispatch(FetchPokemonFailureAction("No se encontro el pokemon"))
            })
    }
}