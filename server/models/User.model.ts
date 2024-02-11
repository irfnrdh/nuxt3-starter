import { DataTypes, Model } from "sequelize";
import { sequelize} from "../utils/db.instance";

export class UserModel extends Model {
  declare firstName: string;
  declare lastName: string;
  declare email: string;
}

UserModel.init(
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
  },
  { sequelize, tableName: "users",  timestamps: true }
);



