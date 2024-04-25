const { Favorite } = require('../DB_connection');

const postFav = async(req, res) => {
    const { name, origin, status, image, species, gender } = req.body;
    
    try {
        if (!name || !origin || !status || !image || !species || !gender) { return res.status(400).json({ message: "Faltan datos" }) };
        const [favorite, created] = await Favorite.findOrCreate({
            where: {
                name, origin, status, image, species, gender
            }
        })
        if (created) { return res.status(201).json(favorite) }
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

module.exports = postFav;
