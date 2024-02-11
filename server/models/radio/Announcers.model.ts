import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../utils/db.instance";

export class AnnouncerModel extends Model {
  declare id: number;
  declare firstName: string;
  declare lastName: string;
  declare email: string;
  declare phoneNumber: number;
  declare bio: string;
  declare profileImageUrl: string;
  declare joinedAt: string;
}

AnnouncerModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [1, 50],
      },
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [1, 50],
      },
    },
    email: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    phoneNumber: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
    },
    bio: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          len: [1, 50],
        },
    },
    profileImageUrl: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          len: [1, 50],
        },
    },
    joinedAt: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          len: [1, 50],
        },
    },

  },
  { sequelize, tableName: "announcers",  timestamps: true }
);



