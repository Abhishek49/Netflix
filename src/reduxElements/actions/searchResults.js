module.exports = {
    UPDATE_RESULTS : 'UPDATE_RESULTS',

    updateResults : function(results){
        return {
            type: this.UPDATE_RESULTS,
            results
        }
    }
};
