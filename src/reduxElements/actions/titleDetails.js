module.exports = {
    ADD_TITLE : 'ADD_TITLE',

    addTitle : function(title){
        return {
            type: this.ADD_TITLE,
            title
        }
    }
};
