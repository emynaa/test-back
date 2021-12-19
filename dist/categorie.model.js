"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
let categorieSchema = new mongoose_1.default.Schema({
    nom: { type: String, required: true },
    SousCategories: { type: String, required: true },
    fichiers: { type: String, required: true },
});
categorieSchema.plugin(mongoose_paginate_1.default);
const Categorie = mongoose_1.default.model("categorie", categorieSchema);
exports.default = Categorie;
