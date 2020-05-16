/* eslint-disable linebreak-style */
// Creating our Review model
module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define("Review", {
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    coffeeReview: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    }

  });

  Review.associate = function(models) {
    Review.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });

    Review.belongsTo(models.Category, {
      foreignKey: {
        allowNull: false
      }
    });

    Review.belongsTo(models.Coffee, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Review;
};