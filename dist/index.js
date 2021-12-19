"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const categorie_model_1 = __importDefault(require("./categorie.model"));
const fichier_model_1 = __importDefault(require("./fichier.model"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const uri = "mongodb://localhost:27017/gd";
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
mongoose_1.default.connect(uri, (err) => {
    if (err)
        console.log(err);
    else
        console.log("Mongo Data base connected successfuly");
});
app.get("/", (req, resp) => {
    resp.send("Hello Express");
});
app.get("/categories", (req, resp) => {
    categorie_model_1.default.find((err, categories) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(categories);
    });
});
app.get("/categories-search", (req, resp) => {
    let page = req.query.page || 1;
    let size = req.query.size || 5;
    let kw = req.query.kw || "";
    categorie_model_1.default.paginate({ title: { $regex: ".*(?i)" + kw + ".*" } }, { page: 1 }, (err, categorie) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(categorie);
    });
});
app.get("/fichiers", (req, resp) => {
    fichier_model_1.default.find((err, fichiers) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(fichiers);
    });
});
app.post("/categories", (req, resp) => {
    let categorie = new categorie_model_1.default(req.body);
    categorie.save(err => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(categorie);
    });
});
app.post("/fichiers", (req, resp) => {
    let fichier = new fichier_model_1.default(req.body);
    fichier.save(err => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(fichier);
    });
});
app.get("/fichiers-search", (req, resp) => {
    let page = req.query.page || 1;
    let size = req.query.size || 5;
    let kw = req.query.kw || "";
    fichier_model_1.default.paginate({ title: { $regex: ".*(?i)" + kw + ".*" } }, { page: 1 }, (err, fichier) => {
        if (err)
            resp.status(500).send(err);
        else
            resp.send(fichier);
    });
});
app.listen(8085, () => {
    console.log("Serve started");
});
