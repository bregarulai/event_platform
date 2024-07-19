"user server";

import { CreateUserParams } from "@/types";
import { handleError, parseStringify } from "../utils";
import { connectToDatabase } from "../database";
import User from "../database/models/user.model";

export const createUser = async (user: CreateUserParams) => {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);

    return parseStringify(newUser);
  } catch (error) {
    handleError(error);
  }
};
