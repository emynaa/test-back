import express, {Request, Response} from "express";
import mongoose from "mongoose";
import Categorie from "./categorie.model";
import Fichier from "./fichier.model";
import bodyParser from "body-parser";
import cors from "cors";



const app=express();
const uri="mongodb://localhost:27017/gd";


app.use(bodyParser.json());
app.use(cors());
mongoose.connect(uri,(err)=>{
    if(err) console.log(err);
    else console.log("Mongo Data base connected successfuly");
});

app.get("/",(req:Request,resp:Response)=>{
    resp.send("Hello Express");
});

app.get("/categories",(req:Request,resp:Response)=>{
   Categorie.find((err,categories)=>{
       if(err) resp.status(500).send(err);
       else resp.send(categories);
    });
});

app.get("/categories-search",(req:Request,resp:Response)=>{
    let page=req.query.page || 1;
    let size=req.query.size || 5;
    let kw= req.query.kw || "";
    Categorie.paginate({title:{$regex:".*(?i)"+kw+".*"}},{page:1},(err,categorie)=>{
        if(err) resp.status(500).send(err);
        else resp.send(categorie);
    });
});

app.get("/fichiers",(req:Request,resp:Response)=>{
    Fichier.find((err,fichiers)=>{
        if(err) resp.status(500).send(err);
        else resp.send(fichiers);
     });
 });

 app.post("/categories",(req:Request,resp:Response)=>{
    let categorie =new Categorie(req.body);
    categorie.save(err=>{
        if(err) resp.status(500).send(err);
        else resp.send(categorie);
    });
});

    app.post("/fichiers",(req:Request,resp:Response)=>{
        let fichier =new Fichier(req.body);
        fichier.save(err=>{
            if(err) resp.status(500).send(err);
            else resp.send(fichier);
        });
});
app.get("/fichiers-search",(req:Request,resp:Response)=>{
    let page=req.query.page || 1;
    let size=req.query.size || 5;
    let kw= req.query.kw || "";
    Fichier.paginate({title:{$regex:".*(?i)"+kw+".*"}},{page:1},(err,fichier)=>{
        if(err) resp.status(500).send(err);
        else resp.send(fichier);
    });
});

        app.listen(8085,()=>{
            console.log("Serve started");
        });
