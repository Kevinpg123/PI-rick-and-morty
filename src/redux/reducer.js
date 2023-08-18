import { ADD_FAV,REMOVE_FAV } from "./action";

const initialState = { myFavorites: [] }

const rootReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            console.log({...state, myFavorites: [...state.myFavorites, action.payload]});
            return {...state, myFavorites: [...state.myFavorites, action.payload]}
            break;
        case REMOVE_FAV:
            const id = parseInt(action.payload)
            console.log({ ...state, myFavorites: state.myFavorites.filter((fav)=> fav.id !== id) });
            return { ...state, myFavorites: state.myFavorites.filter((fav) => fav.id !== id) }
            break;
        default:
            return {...state}
            break;
    }
        
}

export default rootReducer;