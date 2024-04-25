const server = require("./app");
const PORT = 3001;
const { conn } = require('./DB_connection');

conn 
    .sync({ force: false })
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Server corriendo en el puerto ${PORT}`);
            
            
        })
    })
    .catch((err) => console.log(err))



// server.listen(PORT, () => {
//     console.log(`Server corriendo en el puerto ${PORT}`);
    
    
// })
// const express = require("express")
// const rutas = require("../src/routes/index")
// const PORT = 3001;
// const morgan = require("morgan")

// const server = express();

// server.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Credentials', 'true');
//     res.header(
//        'Access-Control-Allow-Headers',
//        'Origin, X-Requested-With, Content-Type, Accept'
//     );
//     res.header(
//        'Access-Control-Allow-Methods',
//        'GET, POST, OPTIONS, PUT, DELETE'
//        );
//        next();
//     });
    
//     server.use(express.json())
//     server.use(morgan("dev"))

// server.use("/rickandmorty", rutas)