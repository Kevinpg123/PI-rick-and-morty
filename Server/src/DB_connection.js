require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, PORT } = process.env;
const FavoriteModel = require('./models/Favorite');
const UserModel = require('./models/User');
const UserFavoriteModel = require('./models/UserFavorite')

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
   // URL
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
   { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
FavoriteModel(sequelize, DataTypes);
UserModel(sequelize, DataTypes);
UserFavoriteModel(sequelize, DataTypes)
//

//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite, UserFavorite } = sequelize.models;

User.belongsToMany(Favorite, { through: UserFavorite, foreignKey: "userId", otherKey: "favoriteApiId"});
Favorite.belongsToMany(User, { through: UserFavorite, foreignKey: "favoriteApiId", otherKey: "userId" });


module.exports = {
   User,
   Favorite,
   UserFavorite,
   conn: sequelize,
};
