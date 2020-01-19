import searchActions from '../actions/searchResults'


const searchResults=(state=[], action)=>{
        switch (action.type) {
            case searchActions.UPDATE_RESULTS:
                    return action.results || [];
            default:
                return state;
        }
    };

export default searchResults;


