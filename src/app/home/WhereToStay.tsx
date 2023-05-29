import Image from "next/image";
import Link from "next/link";

export default function WhereToStay() {
  return (
    <section className="pb-10">
      <div className="lg:ml-96 lg:mr-96 relative flex py-5 items-center">
        <div className="flex-grow border-t-4 border-b-4 border-wh-900"></div>
        <span className="flex-shrink mx-4 font-extrabold font-sans text-xl md:text-3xl lg:text-3x; text-wh-900">
          Where To Stay
        </span>
        <div className="flex-grow border-t-4 border-b-4 border-wh-900"></div>
      </div>

      <div className="sm:mx-0 lg:mx-96 md:mx-32 relative py-5 inline-block flex-col ">
        <Link href={"/topHotels"} className="hover:opacity-70">
          <Image
            src={"/../public/assets/cchotel2.jpg"}
            alt={""}
            width={600}
            height={600}
          />
        </Link>
        <div className="py-3 mr-24 font-bold text-2xl text-wh-900 ">
          <Link
            href={"/topHotels"}
            className=" hover:underline hover:decoration-4 hover:decoration-teal-400 "
          >
            <h1>Best hotels in Cheung Chau</h1>
          </Link>
        </div>
        <div id="trivia" className=" sm:mx-0 md:mr-96 lg:mr-96 flex py-1 text-md text-wh-900">
          <p>
            Baixa, the downtown area of Cheung Chau is the vibrant heart of the
            city, with nightlife, shopping and loads of people having a good
            time. If you want a hotel near...
          </p>
        </div>
      </div>
    </section>
  );
}
