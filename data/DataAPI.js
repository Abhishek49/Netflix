const TrieSearch = require('trie-search');
const data = require('./data.json');

const trieObjectByName = new TrieSearch('title');
const trieObjectById = new TrieSearch('imdbID');
const apiKey = '1aa00063';
trieObjectByName.addAll(data.shows);
trieObjectById.addAll(data.shows);

module.exports = {
    getResultsByName: (key) => {
        if(!!key) {
            return trieObjectByName.get(key)
        } else {
            return data.shows
        }
    },

    getTitleById: (key) => {
        let title = null;
        if(!!key) {
            const [titleDetails] = trieObjectById.get(key);
            if( titleDetails && titleDetails.imdbID && titleDetails.imdbID===key){
                title = titleDetails;
            }
        }
        return title;
    },

    getImdbRating: async(key) =>{
         return fetch(`http://www.omdbapi.com/?i=${key}&apikey=${apiKey}`).then((response)=>{
             if(response.ok){
                 return response.json();
             }else{
                 return null;
             }
         }).then((data)=> {
             if(data){
                 const {Ratings} = data;
                 const [rating] = Ratings;
                 return rating.Value;
             } else {
                 return null;
             }
         })
    }
};

