import { Op } from "sequelize";

import { UserModel } from "../../models/User.model";

export default defineEventHandler(async (event) => {
  try {
    // Get Param
    const param = await getRouterParam(event, "id");

    // Check Param
    if (!param) {
      throw new Error('Missing parameter "id"');
    }

    // Get Body
    const body = await readBody(event);

    // Validate Body
    const { error } = UserSchema.validate(body, {
      abortEarly: true,
      allowUnknown: true,
    });

    // Check Exist
    const userExist = await UserModel.findOne({
      where: { id: { [Op.eq]: param } },
    });

    if (!userExist) {
      throw new Error("User not found");
    }

    // delete user
    try {
      await UserModel.update(body, { where: { id: { [Op.eq]: param } } }); 
      return { message: "User Has Been Updated" };
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
