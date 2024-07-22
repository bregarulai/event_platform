import { formatDateTime } from "@/lib/utils";
import { CardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const Card = ({ event, hasOrderLink, hidePrice }: CardProps) => {
  return (
    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
      <Link
        className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
        href={`/events/${event._id}`}
        style={{ backgroundImage: `url(${event.imageUrl})` }}
      />
      {/* TODO: IS EVENT CREATOR... */}
      <Link
        className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4"
        href={`/events/${event._id}`}
      >
        {!hidePrice && (
          <div className="flex gap-2">
            <span className="p-semibold-14 w-min rounded-full bg-green-100 px-4 py-1 text-green-700">
              {event.isFree ? "FREE" : `$${event.price}`}
            </span>
            <p className="p-semibold-14 w-m rounded-full bg-grey-500/10 px-4 py-1 text-grey-500">
              {event.category.name}
            </p>
          </div>
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
