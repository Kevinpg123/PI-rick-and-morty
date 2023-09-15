
let myFavorites = [];
let postFav = (req, res) => {
    myFavorites.push(req.body)
    return res.json(myFavorites)
}

let deleteFav = (req, res) => {
    let { id } = req.params;
    id = parseInt(id)
    
    let updateMyFavorites = myFavorites.filter((num) => {
        if(parseInt(num.id) !== id) return num
    })
    myFavorites = updateMyFavorites
    return res.json(myFavorites)
}

module.exports = { postFav, deleteFav }