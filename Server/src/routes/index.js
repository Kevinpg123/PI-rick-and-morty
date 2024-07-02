const { Router } = require("express")
const getCharById = require("../controllers/getCharById")
const login = require("../controllers/login")
// const {postFav, deleteFav} = require("../controllers/handleFavorites")
const postFav = require('../controllers/postFav')
const deleteFav = require('../controllers/deleteFav');
const postUser = require('../controllers/postUser');
const getFav = require('../controllers/getFav')


const rutas = Router();

rutas.post("/logup", (req, res) => {
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

rutas.delete("/favDelete", (req, res) => {
    deleteFav(req, res)
})

rutas.get("/getFav/:userID", (req, res) => {
    getFav(req, res)
})
module.exports = rutas;