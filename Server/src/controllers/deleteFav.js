const { Favorite } = require('../DB_connection');

const deleteFav = async (req, res) => {
    const { id } = req.params;
    try {
        
        const character = await Favorite.findByPk(id);
        await character.destroy();
        const characterUpdate = await Favorite.findAll();
        return res.status(200).json(characterUpdate);
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = deleteFav;