import titleActions from '../actions/titleDetails'


const titleDetails=(state={}, action)=>{
    switch (action.type) {
        case titleActions.ADD_TITLE:
            const imdbID = action.title.imdbID;
            return {...state, [imdbID] : action.title};
        default:
            return state;
    }
};

export default titleDetails;


