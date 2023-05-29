import SocialLinks from "./SocialLinks";
import { nothingYou } from "../font";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#1A1A1A] text-wh-50 py-10 px-10">
      <div id="footer" className="mt-40">
        <div className="mt-40 px-12 py-5">
          <div className="text-3xl text-teal-200 font-serif font-thin">
            <div className={nothingYou.className}>chewout</div>
          </div>
        </div>
        <div className="justify-between px-12 mx-auto gap-16 sm:flex">
          <div className="mt-16 basis-1/2 sm:mt-0">
            <div className="mt-16 basis-1/4 sm:mt-0">
              <h6 className="font-bold text-sm my-3 ">About Us</h6>

              <h6 className="text-xs my-4">Press office</h6>
              <h6 className="text-xs my-4">Investor relations</h6>
              <h6 className="text-xs my-4">Our awards</h6>
              <h6 className="text-xs my-4">Work for chewout</h6>
              <h6 className="text-xs my-4">Editorial guidelines</h6>
              <h6 className="text-xs my-4">Privacy notice</h6>
              <h6 className="text-xs my-4">Cookie policy</h6>
              <h6 className="text-xs my-4">Do not sell my information</h6>
              <h6 className="text-xs my-4">Accessibility statement</h6>
              <h6 className="text-xs my-4">Terms of use</h6>
              <h6 className="text-xs my-4">Advertising terms and conditions</h6>
              <h6 className="text-xs my-4">Manage cookies</h6>
            </div>
          </div>
          <div className="mt-16 basis-1/4 sm:mt-0">
            <h6 className="font-bold text-sm my-3 ">Contact Us</h6>
            <h6 className="text-xs my-4">Advertising</h6>
            <h6 className="text-xs my-4">chewout Market</h6>
          </div>

          <div className="mt-16 basis-1/4 sm:mt-0">
            <h6 className="font-bold text-sm my-4 ">chewout Products</h6>
            <h6 className="text-xs my-4">chewout Worldwide</h6>
          </div>

          <div className="mt-16 basis-1/4 sm:mt-0">
            <h6 className="font-bold text-sm my-4 ">Follow Us</h6>
            <SocialLinks />
          </div>
        </div>
        <div className="px-12 ">
          <h6 className="text-xs mt-8">SITE MAP</h6>
          <p className="text-xs my-4 w-3/6">
            © 2023 chewout Web Dev Limited and affiliated companies owned by
            chewout Group Plc. All rights reserved. chewout is a registered
            trademark of chewout Digital Limited.
          </p>
        </div>
      </div>
    </footer>
  );
}
