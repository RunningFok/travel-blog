import Image from "next/image";
import Link from "next/link";

type PostProps = {
  className?: string;
  title: string;
  image: string;
  snippet?: string;
  booking?: boolean;
  categoryTag?: string;
  locationTag?: string;
  whatIs?: string;
  whyGo?: string;
  dontMiss?: string;
  id?: string;
};

export function Post({ className, title, image, snippet }: PostProps) {
  return (
    <div>
      <div className="hover:opacity-70 mx-5 my-5  ">
        <Image
          width={400}
          height={400}
          src={`/static/images/${image}`}
          alt=""
          className="max-h-56"
        />
      </div>
      <div className="mx-5 mr-24 font-bold sm:text-lg md:text-xl lg:text-xl text-wh-900 hover:underline hover:decoration-4 hover:decoration-teal-400 ">
        {title}
      </div>
      <div className="mx-5 mr-20 flex py-1 text-sm text-wh-900">{snippet}</div>
      <div className="mx-5 my-3 mr-28">
        <button className="bg-teal-200 border-2 text-sm border-gray-800 text-wh-900 font-bold w-32 h-10 hover:bg-amber-200">
          Buy tickets
        </button>
      </div>
    </div>
  );
}

export function SmallPost({ className, title, image, snippet }: PostProps) {
  return (
    <div className="lg:mx-96 md:ml-5 lg:ml-5 flex sm:flex-col md:flex-row lg:flex-row py-5">
      <div className="flex flex-col pr-10 md:basis-1/2 lg:basis-1/2">
        <div className=" py-3 sm:mt-10 md:mt-16 lg:mt-16 font-bold text-sm md:text-xl lg:text-xl text-wh-900 w-max">
          {title}
        </div>
        <div className="py-2 px-2 text-xs  md:text-base lg:text-base font-semibold text-teal-200 border-4 bg-teal-200 border-amber-300 hover:text-wh-900 ">
          {snippet}
        </div>
      </div>
      <div className="sm:block hidden mx-5 my-5">
        <Image width={300} height={300} src={`/static/images/${image}`} alt="" />
      </div>
    </div>
  );
}

export function Top10Post({
  className,
  title,
  image,
  categoryTag,
  locationTag,
  whatIs,
  whyGo,
  dontMiss,
  id,
}: PostProps) {
  return (
    <div className="lg:ml-80 ml-5 pb-16 flex flex-col relative">
      <div className="flex my-5">
        <Link href={`/locations/${id}`}>
          <Image width={600} height={600} src={`/static/images/${image}`} alt="" />
        </Link>
      </div>
      <div className="font-bold text-lg md:text-3xl lg:text-3xl text-wh-900  hover:underline hover:decoration-4 hover:decoration-teal-400 ">
        <Link href={`/locations/${id}`}>{title}</Link>
      </div>
      <div className="py-5 flex flex-row gap-3">
        <button
          type="button"
          className="px-4 py-2 text-wh-900 bg-[#ECECEC] font-bold text-xs md:text-sm lg:text-sm  rounded focus:outline-none"
          disabled
        >
          {categoryTag}
        </button>
        <button
          type="button"
          className="px-4 py-2 text-wh-900 bg-[#ECECEC] font-bold text-xs md:text-sm lg:text-sm rounded focus:outline-none"
          disabled
        >
          {locationTag}
        </button>
      </div>
      <div className="md:mr-96 lg:mr-96 py-1 text-sm md:text-base lg:text-base text-wh-900">
        <span className="font-bold">What is it? </span>
        {whatIs}
      </div>

      <Link href={`/locations/${id}`}>
        <button className="mt-5 bg-teal-200 border-2 border-gray-800 text-wh-900 font-bold w-36 h-11 hover:bg-amber-200">
          Read More
        </button>
      </Link>
    </div>
  );
}
