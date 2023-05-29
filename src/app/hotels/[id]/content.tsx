import SocialLinks from "@/app/shared/SocialLinks";
import Image from "next/image";
import Link from "next/link";
import { PostDetails } from "type";

type Props = {
  post: PostDetails;
};

export default function Content({ post }: Props) {
  return (
    <div className="py-20 px-52 flex flex-col leading-7 bg-[#FFFFFF]">
      <div className="font-bold text-5xl text-wh-900">{post.title}</div>
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
      <div className="pt-10 font-bold text-2xl text-wh-900">chewout Says</div>
      <div className="pt-3 lg:mr-96 text-wh-900">{post.content}</div>
      <div className="pt-8 text-wh-500 text-sm">{post.date}</div>
      <div className="pt-8">
        <SocialLinks isDark />
      </div>
      <div className="pt-10 lg:px-96 flex-grow border-b border-wh-100"></div>
      <div className="flex flex-row pt-10">
        <div className="flex flex-col">
          <div className="font-bold text-2xl">Details</div>
          <div className="pt-5">{post.address}</div>
          <div className="pt-5 font-bold">Contact:</div>
          <div className="pt-2">
            <Link href={post.linkAddress}>View Website</Link>
          </div>
          <div className="pt-2">{post.phoneNumber}</div>
          <div className="pt-4 font-bold">Price:</div>
          <div className="pt-2">{post.priceDescription}</div>
          <div className="pt-4 font-bold">Opening hours:</div>
          <div className="pt-4">{post.openingHours}</div>
        </div>
      </div>
    </div>
  );
}
