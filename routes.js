
const CtrlRhum = require("./src/controller/rhum");
const CtrlUser = require("./src/controller/user");
const CtrlIngredient = require("./src/controller/ingredient");
const CtrlRecipe = require("./src/controller/recipe");



const  routing=(app) => {
    app.get('/api/v1/rhum',CtrlRhum.getRhumList);
    app.get('/api/v1/rhum/register',CtrlUser.register);
    app.get('/api/v1/rhum/login',CtrlUser.logIn);
    app.get('/api/v1/rhum/addingredient',CtrlIngredient.searchRhum);
    app.get('/api/v1/rhum/listingredients',CtrlIngredient.searchRhum);
    app.get('/api/v1/rhum/search',CtrlRhum.searchRhum);
    app.get('/api/v1/rhum/recipe',CtrlRecipe.searchRhum);
    app.get('/api/v1/rhum/listrecipes',CtrlRecipe.searchRhum);
    app.get('/api/v1/rhum/listpublicrecipes',CtrlRecipe.searchRhum);
    app.get('/api/v1/rhum/modifyrecipe',CtrlRecipe.searchRhum);*/
}
module.exports=routing;