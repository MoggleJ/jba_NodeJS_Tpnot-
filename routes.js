
const CtrlR = require("./src/controller/rhum");
const CtrlC = require("./src/controller/compte");

const  routing=(app) => {
    app.get('/api/v1/rhum',CtrlR.getRhumList);
   /* app.get('/api/v1/rhum/register',Ctrl.searchRhum);
    app.get('/api/v1/rhum/login',Ctrl.searchRhum);
    app.get('/api/v1/rhum/addingredient',Ctrl.searchRhum);
    app.get('/api/v1/rhum/listingredients',Ctrl.searchRhum);
    app.get('/api/v1/rhum/search',Ctrl.searchRhum);
    app.get('/api/v1/rhum/recipe',Ctrl.searchRhum);
    app.get('/api/v1/rhum/listrecipes',Ctrl.searchRhum);
    app.get('/api/v1/rhum/listpublicrecipes',Ctrl.searchRhum);
    app.get('/api/v1/rhum/modifyrecipe',Ctrl.searchRhum);*/
}
module.exports=routing;