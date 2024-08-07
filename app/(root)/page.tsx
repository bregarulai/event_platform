import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import Collection from "@/components/shared/Collection";
import { getAllEvents } from "@/lib/actions/event.actions";
import { CollectionTypes } from "@/constants";
import Search from "@/components/shared/Search";
import { SearchParamProps } from "@/types";
import CategoryFilter from "@/components/shared/CategoryFilter";

const Home = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6,
  });

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Host, Connect, Celebrate: Your Events, Our Platform!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Book and learn helpful tips from 3,168+ mentors in world-class
              companies with our global community.
            </p>
            <Button className="button w-full sm:w-fit" asChild size="lg">
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>
          <Image
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
            src="/assets/images/hero.png"
            height={1000}
            width={1000}
            alt="hero"
          />
        </div>
      </section>
      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">
          Trust by <br /> Thousands of Events
        </h2>
        <div className="flex w-full flex-col md:flex-row gap-5">
          <Search />
          <CategoryFilter />
        </div>
        <Collection
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType={CollectionTypes.ALL_EVENTS}
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
      </section>
    </>
  );
};

export default Home;
