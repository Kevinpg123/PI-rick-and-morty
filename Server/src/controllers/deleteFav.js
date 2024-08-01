const { Favorite, User } = require('../DB_connection');

const deleteFav = async (req, res) => {
    const { id } = req.query;
    const { userID } = req.query;
    try {
        
        const favorite = await Favorite.findByPk(id)
        if (!favorite) {
            return res.status(400).json({ message: "Favorito no encontrado" })
        }

        const user = await User.findByPk(userID);
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        
         // Eliminar la relación entre el favorito y el usuario
        await user.removeFavorite(favorite);

         // Verificar si el favorito sigue siendo utilizado por algún usuario
         const favoriteUsersCount = await favorite.countUsers();
 
         // Eliminar el favorito si no está asociado a ningún usuario
         if (favoriteUsersCount === 0) {
             await favorite.destroy();
         }
 
         return res.status(200).json({ message: "Favorito eliminado correctamente" });
    }
    catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = deleteFav;