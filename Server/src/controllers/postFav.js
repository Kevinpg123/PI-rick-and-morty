const { Favorite, User } = require('../DB_connection');

const postFav = async(req, res) => {
    const { name, origin, status, image, species, gender, userID, id } = req.body;
    
    try {
        if ( !name || !origin || !status || !image || !species || !gender || !userID || !id) { return res.status(400).json({ message: "Faltan datos" }) };
        const [favorite, created] = await Favorite.findOrCreate({
            where: { apiId: id },
            defaults: { name, origin, status, image, species, gender }
        })
        
        const user = await User.findByPk(userID);
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        // Añadir el favorito al usuario
        await user.addFavorite(favorite);

        return res.status(201).json(favorite);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

module.exports = postFav;
