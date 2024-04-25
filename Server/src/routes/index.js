const { Router } = require("express")
const getCharById = require("../controllers/getCharById")
const login = require("../controllers/login")
// const {postFav, deleteFav} = require("../controllers/handleFavorites")
const postFav = require('../controllers/postFav')
const deleteFav = require('../controllers/deleteFav');
const postUser = require('../controllers/postUser');


const rutas = Router();

rutas.post("/login", (req, res) => {
    postUser(req,res)
})


rutas.get("/character/:id", (req, res) => {
    getCharById(req,res)
})

rutas.get("/login", (req, res) => {
    login(req,res)
})

rutas.post("/fav", (req, res) => {
    postFav(req, res)
})

rutas.delete("/fav/:id", (req, res) => {
    deleteFav(req, res)
})

module.exports = rutas;