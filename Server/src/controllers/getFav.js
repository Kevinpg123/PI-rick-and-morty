const { User, Favorite } = require("../DB_connection");

const getFav = async (req, res) => {
    const { userID } = req.params;
    console.log(userID);
    try {
        const user = await User.findByPk(userID, {
            include: Favorite,
            through: { attributes: [] }
        })

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" })
        }

        return res.status(200).json(user.Favorites)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

module.exports = getFav;