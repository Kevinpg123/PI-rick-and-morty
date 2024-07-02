const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
      },
      externalId: {
         type: DataTypes.INTEGER,
         allowNull:false,
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      status: {
         type: DataTypes.ENUM(["Alive", "Dead", "unknown"]),
         defaultValue: "unknown",
         allowNull: false,
      },
      species: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      gender: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      origin: {
         type: DataTypes.JSONB,
         allowNull: false,
         get() {
            // Obtén el valor de origin como un objeto JSON
            const originString = this.getDataValue('origin');
            return originString ? JSON.parse(originString) : null;
         },
         set(value) {
            // Establece el valor de origin como un objeto JSON
            this.setDataValue('origin', JSON.stringify(value));
         }
      },
      image: {
         type: DataTypes.STRING,
         allowNull:false,
      }
   }, { timestamps: false });
};


