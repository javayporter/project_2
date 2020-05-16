module.exports = function(sequelize, DataTypes) {
  var Coffee = sequelize.define("Coffee", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
  });

  Coffee.associate = function(models) {
    Coffee.hasMany(models.Review, {
      onDelete: "cascade"
    });
  };

  return Coffee;
};
