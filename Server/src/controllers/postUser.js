const { User } = require('../DB_connection')


const postUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) { return res.status(400).json({ message: "Faltan datos" }) };
    try {
        const [user, created] = await User.findOrCreate({
            where: { email, password }
})
        if (created) { return res.status(200).json(user) }
        else { return res.status(200).json({ message: "Ese usuario ya existe" })}
    } catch (error) {
        res.status(500).json(error.message)
    }

}


module.exports = postUser;