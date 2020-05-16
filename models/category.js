module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define("Category", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
  });

  Category.associate = function(models) {
    Category.hasMany(models.Review, {
      onDelete: "cascade"
    });
  };

  return Category;
};
