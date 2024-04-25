
const { User } = require('../DB_connection');
const login = async(req, res) => {
    const { email, password } = req.query;
    if (!email || !password) { return res.status(400).json({ message: "Faltan datos" }) };
    try {
        const searchUser = await User.findAll({
            where: {email:email}
        })
        // console.log(searchUser[0].dataValues);
        if (searchUser) {
            if (searchUser[0].dataValues.password == password) {
                return res.status(201).json({access: true})
            }else return res.status(403).json({message: "Contraseña incorrecta"})
        }
        
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