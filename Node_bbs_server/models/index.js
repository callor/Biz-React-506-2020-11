const path = require("path");
const Sequelize = require("sequelize");

// *.json 파일로 설정값을 만들어 두고 불러와서 사용하는 방법
// configPath = "../config/config.json"
// const configPath = path.join(__dirname, "..", "config", "config.json");
const configPath = "../config/config.json";
const mysqlConfig = require(configPath)["mysql"];

const seqDB = new Sequelize(
  mysqlConfig.database,
  mysqlConfig.username,
  mysqlConfig.password,
  mysqlConfig
);

const db = {};
db.sequelize = seqDB;
db.DataTypes = Sequelize;

db.bbsDao = require("./tbl_bbs")(seqDB, Sequelize);

module.exports = db;
