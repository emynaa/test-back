import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";
let fichierSchema=new mongoose.Schema({
    nom:{type:String, required:true},
    taille:{type: String, required: true},
    lien:{type:String, required:true},
    categorie:{type:String, required:true},
    sousCategorie:{type:String, required:true},
  
});
fichierSchema.plugin(mongoosePaginate);
const Fichier=mongoose.model("fichier",fichierSchema);
export default Fichier;