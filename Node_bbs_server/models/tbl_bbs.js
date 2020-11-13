const tbl_bbs = (sequelize, DataTypes) =>
  sequelize.define(
    "tbl_bbs",
    {
      b_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      b_date_time: { type: DataTypes.STRING(125), allowNull: false },
      b_writer: { type: DataTypes.STRING(25), allowNull: false },
      b_subject: { type: DataTypes.STRING(125), allowNull: false },
      b_content: { type: DataTypes.STRING(1000), allowNull: false },
      b_count: { type: DataTypes.INTEGER, defaultValue: 0 },
    },
    { timestamps: true }
  );

module.exports = tbl_bbs;
