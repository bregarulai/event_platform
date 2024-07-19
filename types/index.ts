import { Dispatch, SetStateAction } from "react";

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
