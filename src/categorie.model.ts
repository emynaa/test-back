import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";
let categorieSchema=new mongoose.Schema({
    nom:{type:String, required:true},
    SousCategories:{type: String, required: true},
    fichiers:{type:String, required:true},
    
});
categorieSchema.plugin(mongoosePaginate);
const Categorie=mongoose.model("categorie",categorieSchema);
export default Categorie;