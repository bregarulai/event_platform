import { Dispatch, SetStateAction } from "react";

// ============ USER PARAMS
export type CreateUserParams = {
  clerkId: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  photo: string;
};

export type UpdateUserParams = {
  firstName: string;
  lastName: string;
  username: string;
  photo: string;
};

// =============== CATEGORY PARAMS
export type CreateCategoryParams = {
  categoryName: string;
};

// =============== EVENT PARAMS
export type CreateEventParams = {
  userId: string;
  event: {
    title: string;
    description: string;
    location: string;
    imageUrl: string;
    startDateTime: Date;
    endDateTime: Date;
    categoryId: string;
    price: string;
    isFree: boolean;
    url: string;
  };
  path: string;
};

export type SearchParamProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export type EventFormProps = {
  userId: string;
  type: "Create" | "Update";
};

export type DropdownProps = {
  value?: string;
  onChangeHandler?: () => void;
};

export type FileUploadProps = {
  imageUrl: string;
  onFieldChange: (value: string) => void;
  setFiles: Dispatch<SetStateAction<File[]>>;
};
