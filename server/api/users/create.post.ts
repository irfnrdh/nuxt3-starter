import { UserModel } from "../../models/User.model";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    // Validate user input
    const { error } = UserSchema.validate(body, {
      abortEarly: true,
      allowUnknown: true,
    });

    if (error) {
      throw createError({
        message: error.message.replace(/"/g, ""),
        statusCode: 400,
        fatal: false,
      });
    }

    // Check if user with the provided email already exists
    const existingUser = await UserModel.findOne({
      where: { email: body.email },
    });

    if (existingUser) {
      throw createError({
        message: "Sorry, this email is already in use",
        statusCode: 400,
        fatal: false,
      });
    }

    // Create user
    try {
      await UserModel.create(body);
      return {
        message: "User created",
        statusCode: 201, // Use 201 Created status code for successful resource creation
      };
    } catch (e) {
      throw createError({
        message: "Failed to create user",
        statusCode: 500, // Use 500 Internal Server Error status code for server errors
        fatal: true, // Marking this error as fatal, as it indicates a server-side issue
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
