export const headerLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Create Event",
    route: "/events/create",
  },
  {
    label: "My Profile",
    route: "/profile",
  },
];

export const eventDefaulValues = {
  title: "",
  description: "",
  location: "",
  imageUrl: "",
  startDateTime: new Date(),
  endtDateTime: new Date(),
  categoryId: "",
  price: "",
  isFree: false,
  url: "",
};

export enum CollectionTypes {
  EVENT_ORGANIZED = "Events_Organized",
  MY_TICKETS = "My_Tickets",
  ALL_EVENTS = "All_Events",
}
