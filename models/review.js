/* eslint-disable linebreak-style */
// Creating our Review model
module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define("Review", {

    coffeeCategory: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    coffeeName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
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
  };

  return Review;
};