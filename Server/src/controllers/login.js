const users = require("../utils/users")
// console.log(users);

const login = (req, res) => {
    const { email, password } = req.query;
    let access = false
    users.forEach((log) => {
        if (log.email === email && log.password === password) {
            access = true;
            return res.status(200).json(access)
        }else {return res.status(200).json(access)}
    })

}

module.exports = login;