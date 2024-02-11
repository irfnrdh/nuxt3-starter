import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../utils/db.instance";

export class ArticleModel extends Model {
  declare id: number;
  declare title: string;
  declare desc: string;
  declare position: string;
  declare type: number;
  declare content: string;
  declare isPublish: string;
  declare thumbnailUrl: string;
  declare createdBy: string;
  declare createdAt: string;
}

ArticleModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [1, 50],
      },
    },
    desc: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [1, 50],
      },
    },
    position: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          len: [1, 50],
        },
      },
    type: {
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



