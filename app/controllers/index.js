const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");

mongoose.Promise = global.Promise;


const db = {};

db.mongoose = mongoose;

db.url = dbConfig.URI;

db.products = require("./product.controller.js")(mongoose);

db.categories = require("./category.controller")(mongoose);


module.exports = db;