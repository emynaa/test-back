"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let fichierSchema = new mongoose_1.default.Schema({
    nom: { type: String, required: true },
    taille: { type: String, required: true },
    lien: { type: String, required: true },
    categorie: { type: String, required: true },
    sousCategorie: { type: String, required: true },
});
fichierSchema.plugin(mongoose_paginate_1.default);
const Fichier = mongoose_1.default.model("fichier", fichierSchema);
exports.default = Fichier;
