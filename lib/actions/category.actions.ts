"use server";

import { CreateCategoryParams } from "@/types";
import { handleError, parseStringify } from "../utils";
import { connectToDatabase } from "../database";
import Category from "../database/models/category.model";

export const createCategory = async ({
  categoryName,
}: CreateCategoryParams) => {
  try {
    await connectToDatabase();

    const newCategory = await Category.create({ name: categoryName });

    return parseStringify(newCategory);
  } catch (error) {
    handleError(error);
  }
};

export const getAllCategories = async () => {
  try {
    await connectToDatabase();

    const categories = await Category.find();

    return parseStringify(categories);
  } catch (error) {
    handleError(error);
  }
};
