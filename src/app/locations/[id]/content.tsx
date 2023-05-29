import SocialLinks from "@/app/shared/SocialLinks";
import Image from "next/image";
import Link from "next/link";
import { PostDetails } from "type";

type Props = {
  post: PostDetails;
};

export default function Content({ post }: Props) {
  return (
    <div className="py-20 md:px-52 lg:px-52 flex flex-col leading-7 bg-[#FFFFFF]">
      <div className="font-bold text-3xl md:text-5xl lg:text-5xl text-wh-900">
        {post.title}
      </div>
      <div className="py-5 flex flex-row gap-3">
        <button
          type="button"
          className="px-4 py-2 text-wh-900 bg-[#ECECEC] font-bold text-sm  rounded focus:outline-none"
          disabled
        >
          {post.categoryTag}
        </button>
        <button
          type="button"
          className="px-4 py-2 text-wh-900 bg-[#ECECEC] font-bold text-sm  rounded focus:outline-none"
          disabled
        >
          {post.locationTag}
        </button>
      </div>
      <div>
        <Image
          src={`/static/images/${post.image}`}
          alt=""
          width={800}
          height={800}
        />
      </div>
      <div className="text-wh-100 text-xs">©{post.photographer}</div>
      <div className="pt-10 font-bold text-xl md:text-2xl lg:text-2xl text-wh-900">
        chewout Says
      </div>
      <div className="pt-3 lg:mr-96  text-sm md:text-base lg:text-base text-wh-900">
        {post.content}
      </div>
      <div className="pt-8 text-wh-500 text-xs md:text-sm lg:text-sm">
        {post.date}
      </div>
      <div className="pt-8">
        <SocialLinks isDark />
      </div>
      <div className="pt-10 lg:px-96 flex-grow border-b border-wh-100"></div>
      <div className="flex flex-row pt-10">
        <div className="flex flex-col">
          <div className="font-bold text-xl md:text-2xl lg:text-2xl">
            Details
          </div>
          <div className="pt-5 text-sm md:text-base lg:text-base">
            {post.address}
          </div>
          <div className="pt-5 font-bold text-base md:text-xl lg:text-xl">
            Contact:
          </div>
          <div className="pt-2">
            <Link
              href={post.linkAddress}
              className="text-sm md:text-base lg:text-base"
            >
              View Website
            </Link>
          </div>
          <div className="pt-2 text-sm md:text-base lg:text-base">
            {post.phoneNumber}
          </div>
          <div className="pt-4 font-bold text-base md:text-xl lg:text-xl">
            Price:
          </div>
          <div className="pt-2 text-sm md:text-base lg:text-base">
            {post.priceDescription}
          </div>
          <div className="pt-4 font-bold text-base md:text-xl lg:text-xl">
            Opening hours:
          </div>
          <div className="pt-4 text-sm md:text-base lg:text-base">
            {post.openingHours}
          </div>
        </div>
      </div>
    </div>
  );
}
