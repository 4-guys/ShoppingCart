module.exports = function (sequelize, DataTypes) {
    var Item = sequelize.define("Item", {
      // Giving the user model a name of type STRING
      brandName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      itemName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      itemDescription: {
        type: DataTypes.STRING,
        allowNull: false
      },
      itemImg: {
        type: DataTypes.STRING,
        allowNull: false
      },
      itemCategory: {
        type: DataTypes.STRING,
        allowNull: false
      },
      quantity: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      MSRP: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      ourPrice: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      itemID: {
        type: DataTypes.STRING,
        allowNull: false
      },
    });

    return Item;
}