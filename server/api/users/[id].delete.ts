import { UserModel } from "../../models/User.model";
import { Op } from "sequelize";

export default defineEventHandler(async (event) => {
  try {
    // Get Param
    const param = await getRouterParam(event, "id");

    // Check Param
    if (!param) {
      throw new Error('Missing parameter "id"');
    }

    // Check Exist
    const userExist = await UserModel.findOne({
      where: { id: { [Op.eq]: param } }, 
    });

    if (!userExist) {
      throw new Error("User not found");
    }

    // delete user
    try {
      await UserModel.destroy({ where: { id: { [Op.eq]: param } } }); 
      return { message: "User Has Been Deleted" };
    } catch (e: unknown) {
      throw createError({
        message: (e as Error).message,
        statusCode: 400,
        fatal: false,
      });
    }
  } catch (e: unknown) {
		throw createError({
			message: (e as Error).message,
      statusCode: 400,
      fatal: false,
		});
	}
});
