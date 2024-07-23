import Image from "next/image";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

import { CardProps } from "@/types";
import { formatDateTime } from "@/lib/utils";
import DeleteConfirmation from "./DeleteConfirmation";

const Card = ({ event, hasOrderLink, hidePrice }: CardProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const isEventCreator = userId === event.organizer._id.toString();

  return (
    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
      <Link
        className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
        href={`/events/${event._id}`}
        style={{ backgroundImage: `url(${event.imageUrl})` }}
      />
      {isEventCreator && !hidePrice && (
        <span className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
          <Link href={`/events/${event._id}/update`}>
            <Image
              src="/assets/icons/edit.svg"
              height={20}
              width={20}
              alt="edit"
            />
          </Link>
          <DeleteConfirmation eventId={event._id} />
        </span>
      )}
      <Link
        className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4"
        href={`/events/${event._id}`}
      >
        {!hidePrice && (
          <span className="flex gap-2">
            <span className="p-semibold-14 w-min rounded-full bg-green-100 px-4 py-1 text-green-700">
              {event.isFree ? "FREE" : `$${event.price}`}
            </span>
            <p className="p-semibold-14 w-m rounded-full bg-grey-500/10 px-4 py-1 text-grey-600 line-clamp-1">
              {event.category.name}
            </p>
          </span>
        )}
        <p className="p-medium-16 md:p-medium-18 text-grey-500">
          {formatDateTime(event.startDateTime).dateTime}
        </p>
        <p className="p-medium-18 md:p-medium-20 line-clamp-2 flex-1 text-black">
          {event.title}
        </p>
        <div className="flex-between w-full">
          <p className="p-medium-14 md:p-medium-16 text-gray-600">
            {`${event.organizer.firstName} ${event.organizer.lastName}`}
          </p>
          {hasOrderLink && (
            <Link className="flex gap-2" href={`/orders?eventId=${event._id}`}>
              <p className="text-primary-500">Order Details</p>
              <Image
                src="/assets/icons/arrow.svg"
                height={10}
                width={10}
                alt="search"
              />
            </Link>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Card;
