const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("postgres://localhost:5432/test");

module.exports = class Room extends Model {};
Room.init(
  {
    roomName: DataTypes.STRING,
    id: DataTypes.INTEGER,
  },
  { sequelize, modelName: "room" }
);

module.exports.connect = async () => {
  await sequelize.sync();
};

const jane = await Room.create({
  username: "janedoe",
  birthday: new Date(1980, 6, 20),
});
console.log(jane.toJSON());
