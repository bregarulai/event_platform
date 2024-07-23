import { IEvent } from "@/lib/database/models/event.model";
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

export type GetAllEventsParams = {
  query: string;
  limit: number;
  page: number;
  category: string;
};

export type DeleteEventParams = {
  eventId: string;
  path: string;
};

export type UpdateEventProps = {
  params: {
    id: string;
  };
};

export type CollectionType = "Events_Organized" | "My_Tickets" | "All_Events";

export type CollectionProps = {
  data: IEvent[];
  emptyTitle: string;
  emptyStateSubtext: string;
  collectionType?: CollectionType;
  limit: number;
  page: number | string;
  totalPages?: number;
  urlParamName?: string;
};

export type CardProps = {
  event: IEvent;
  hasOrderLink?: boolean;
  hidePrice?: boolean;
};

export type SearchParamProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export type EventFormProps = {
  userId: string;
  type: "Create" | "Update";
  event?: IEvent;
  eventId?: string;
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
