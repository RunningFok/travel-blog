import Image from "next/image";
import TopLocations from "./home/TopLocations";
import Booking from "./home/Booking";
import WhereToStay from "./home/WhereToStay";
import DidYouKnow from "./home/DidYouKnow";

export default function Home() {
  return (
    <main className="px-10 leading-7 bg-[#FFFFFF] text-wh-900">
      <TopLocations />
      <Booking />
      <WhereToStay />
      <DidYouKnow />
    </main>
  );
}
