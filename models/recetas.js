const moongose = require("mongoose");

const RecipeSchema = moongose.Schema({
    name : {
        type: String,
        required: true,
        unique: true
    },
    descripcion : String,
    ingredients : Array,
    img : String,
    file: String
})

module.exports = moongose.model("Recipes", RecipeSchema)