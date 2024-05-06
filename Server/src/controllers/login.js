
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../DB_connection');
const login = async(req, res) => {
    const { email, password } = req.query;
    if (!email || !password) { return res.status(400).json({ message: "Faltan datos" }) };
    try {
        const user = await User.findOne({ where: { email } })
        if (!user) {
            return res.status(401).json({message: 'Credenciales invalidas'})
        }

        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) {
            return res.status(401).json({message: 'Contraseña invalida'})
        }

        const token = jwt.sign({ userId: user.id }, 'aguanteLaProgramacionWachin', { expiresIn: '1h' })
        return res.json({token})
        
    } catch (error) {
        return res.status(404).json({ message: "Usuario no encontrado"})
    }
}








// const users = require("../utils/users")
// // console.log(users);

// const login = (req, res) => {
//     const { email, password } = req.query;
//     let access = false
//     users.forEach((log) => {
//         if (log.email === email && log.password === password) {
//             access = true;
//             return res.status(200).json(access)
//         }else {return res.status(200).json(access)}
//     })

// }

module.exports = login;


///// usuario: admin@admin.com  pass: admin123