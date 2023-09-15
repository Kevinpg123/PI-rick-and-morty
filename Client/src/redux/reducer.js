import { ADD_FAV,FILTER,ORDER,REMOVE_FAV } from "./action";

const initialState = {
    myFavorites: [],
    allFavorites: []
}

const rootReducer = (state = initialState, action) => {
    const {payload} = action
    switch (action.type) {
        case 'ADD_FAV':
            return { ...state, myFavorites: payload, allFavorites: payload };
            break;

        case 'REMOVE_FAV':
            return { ...state, myFavorites: payload };
            break;
        
        
        
        
        // case REMOVE_FAV:
        //     const id = parseInt(action.payload)
        //     console.log({ ...state, myFavorites: state.myFavorites.filter((fav)=> fav.id !== id) });
        //     return {
        //         ...state,
        //         myFavorites: state.myFavorites.filter((fav) => fav.id !== id),
        //         // allFavorites: state.myFavorites.filter((fav) => fav.id !== id)
        //     }
        //     break;
        case FILTER:
            let favoritesFiltered = state.allFavorites.filter((char) => char.gender === action.payload)
            return {
                ...state,
                myFavorites: favoritesFiltered,
            }
            break;
        case ORDER:
            let favoritesOrder = state.myFavorites.sort((a, b) => {
                return action.payload === "Ascendente" ? a.id -b.id : b.id - a.id
            })
            return {
                ...state,
                myFavorites: favoritesOrder,
            }
            break;

        default:
            return {...state}
            break;
    }
        
}

export default rootReducer;