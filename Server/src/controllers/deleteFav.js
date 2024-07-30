const { Favorite, User } = require('../DB_connection');

const deleteFav = async (req, res) => {
    const { id } = req.query;
    const { userID } = req.query;
    try {
        
        const favorite = await Favorite.findByPk(id)
        if (!favorite) {
            return res.status(400).json({ message: "Favorito no encontrado" })
        }

        
        return res.status(200).json("todo bien")
    }
    catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = deleteFav;