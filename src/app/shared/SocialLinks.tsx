import React from "react";
import Image from "next/image";
import Facebook from "/public/static/images/social_facebook.png";
import Instagram from "/public/static/images/social_instagram.png";
import Link from "next/link";

type Props = {
  isDark?: boolean;
};

export default function SocialLinks({ isDark = false }: Props) {
  return (
    <div className="flex justify-items-start items-center gap-6">
      <Link href="https://facebook.com">
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          src={Facebook}
          alt="facebook"
          width={20}
          height={20}
        />
      </Link>
      <Link href="https://instagram.com">
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          src={Instagram}
          alt="instagram"
          width={20}
          height={20}
        />
      </Link>
    </div>
  );
}
