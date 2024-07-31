const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {
    const UserFavorite = sequelize.define('UserFavorite', {
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User', 
                key: 'id'
            },
        },
        favoriteApiId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Favorite',
                key: 'apiId'
            }
        },
    },{
        tableName: 'UserFavorites',

    })
    return UserFavorite;
}