import React from "react";
import Link from "next/link";
import Image from "next/image";

type PostProps = {
  className?: string;
  title: string;
  image?: string;
  snippet?: string;
  linkAddress: string;
};

const TopPostCard = ({
  className,
  title,
  snippet,
  linkAddress,
}: PostProps) => {
  return (
    <div
      id="top"
      className={`${className} sm:mt-0 sm:h-auto lg:ml-96 flex flex-col m-5 h-96`}
    >
      <Link href={`/topLocations`} className="hover:opacity-70">
        <Image
          width={600}
          height={600}
          alt=""
          src={"/static/images/TopPost.jpeg"}
          sizes="(max-width: 480px) 100vw,
                (max-width: 768px) 75vw,
                (max-width: 1060px) 50vw,
                33vw"
          style={{ objectFit: "contain" }}
        />
      </Link>

      <div className="text-wh-900 flex flex-initial font-extrabold font-sans text-xl md:text-3xl lg:text-3xl mt-2">
        <Link
          href={linkAddress}
          className=" hover:underline hover:decoration-4 hover:decoration-teal-400"
        >
          {title}
        </Link>
      </div>
      <h4 className="hidden sm:block py-1 text-sm md:text-base lg:text-base text-wh-900">
        {snippet}
      </h4>
    </div>
  );
};

const SidePostCard = ({ className, title, image, linkAddress }: PostProps) => {
  return (
    <div
      className={`${className} sm:mt-0 sm:h-auto flex flex-row relative items-start pb-0`}
    >
      <Link
        className={`${className} sm:mt-0 sm:h-auto flex hover:opacity-70`}
        href={linkAddress}
      >
        <div className="justify-between flex content-start relative w-40 h-40">
          <Image
            alt=""
            src={`/static/images/${image}`}
            width={150}
            height={150}
            sizes="(max-width: 480px) 100vw,
                (max-width: 768px) 75vw,
                (max-width: 1060px) 50vw,
                33vw"
            style={{ objectFit: "cover" }}
            className="basis-1/2 flex mb-5"
          />
        </div>
      </Link>
      <div className="text-wh-900 text-left align-middle font-semibold sm:text-lg md:text-lg lg:text-lg mt-10">
        <Link
          href={linkAddress}
          className=" hover:underline hover:decoration-4 hover:decoration-teal-400 font-bold font-sans"
        >
          {title}
        </Link>
      </div>
    </div>
  );
};

export default function TopLocations() {
  return (
    <section className="pt-3 pb-0 md:pb-28 lg:pb-28">
      <div className="sm:grid sm:gap-0 md:grid-cols-5 md:grid-rows-3 lg:grid-cols-5 lg:grid-rows-3 h-[200px] md:h-[400px] mx-0 my-3 w-11/12">
        <TopPostCard
          className="col-span-3 row-span-3"
          title="The 8 best things to do in Cheung Chau"
          snippet="We are absolutely in love with this island. For its narrow streets and colorful houses, breathtaking views, its galleries full of ancient and contemporary art,..."
          linkAddress="/topLocations"
        />
        <div className="hidden sm:block w-max">
          <SidePostCard
            className="col-span-2 row-span-1"
            title="The 5 best hotels in Cheung Chau"
            image="cchotel.jpg"
            linkAddress="/topHotels"
          />
          <SidePostCard
            className="col-span-2 row-span-1"
            title="The top 8 attractions in Cheung Chau"
            image="bestThings.jpg"
            linkAddress="/topLocations"
          />
          <SidePostCard
            className="col-span-2 row-span-1"
            title="The 5 best foodie spots in Cheung Chau"
            image="buns.jpeg"
            linkAddress="/topRestaurants"
          />
        </div>
      </div>
    </section>
  );
}
