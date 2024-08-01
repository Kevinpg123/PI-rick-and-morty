const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   const UserFavorite = sequelize.define('UserFavorite', {
      userId: {
         type: DataTypes.INTEGER,
         references: {
            model: 'User',
            key: 'id'
         },
         allowNull: false,
      },
      favoriteApiId: {
         type: DataTypes.INTEGER,
         references: {
            model: 'Favorite',
            key: 'apiId'
         },
         allowNull: false,
      }
   }, {
      tableName: 'UserFavorites',
      timestamps: false,
   });

   return UserFavorite;
};
