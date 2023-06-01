import Image from "next/image";
import SocialLinks from "../shared/SocialLinks";
import { Top10Post } from "../shared/Post";

export default function TopHotels() {
  return (
    <main id="top" className="px-10 leading-7 bg-neutral-100 text-wh-900">
      <div className="py-10 ml-5 lg:ml-80 flex flex-col">
        <Image
          width={700}
          height={700}
          src={"/static/images/topHotel.jpg"}
          alt={""}
        />
        <div className="flex  mt-5 font-extrabold font-sans  text-xl md:text-3xl lg:text-3xl text-wh-900 ">
          The 5 best hotels in Cheung Chau
        </div>
        <div className="flex mt-5 pt-1 pb-5 font-bold text-lg text-wh-900">
          From beautiful bookshops to crazy sandwiches, check out the best
          things to do in Cheung Chau this year
        </div>
        <SocialLinks isDark />
        <div className="flex flex-col  mt-5 pt-1 pb-5 text-sm md:text-base lg:text-base text-wh-900">
          <p className="md:mr-96 lg:mr-96">
            Cheung Chau is a small island in Hong Kong with a great atmosphere
            and plenty of places to stay overnight. There are several hotels on
            the island, ranging from luxury to budget-friendly options.
          </p>
          <br />
          <p className="md:mr-96 lg:mr-96">
            Lodging options include traditional Chinese-style boutique hotels,
            modern hotels, and guesthouses, all providing comfortable
            accommodation for visitors. The most popular hotels in Cheung Chau
            include the Warwick Hotel, B&B Cheung Chau, and Saiyuen Camping and
            Adventure Park.
          </p>
          <br />
          <h4 className="font-bold">RECOMMENDED:</h4>
          <br />
          <h5 className="text-red-600 font-bold">
            🍹 <span className="underline">The best bars in Cheung Chau</span>
          </h5>
          <h5 className="text-red-600 font-bold">
            🥑{" "}
            <span className="underline">
              The best places for brunch in Cheung Chau
            </span>
          </h5>
          <h5 className="text-red-600 font-bold">
            🏛️{" "}
            <span className="underline">
              The best attractions in Cheung Chau
            </span>
          </h5>
          <h5 className="text-red-600 font-bold">
            🏨 <span className="underline">The best hotels in Cheung Chau</span>
          </h5>
          <h5 className="text-red-600 font-bold">
            🏘️{" "}
            <span className="underline">The best Airbnbs in Cheung Chau</span>
          </h5>
        </div>
        <div className="lg:ml-0 lg:mr-96 relative flex py-5 items-center">
          <div className="flex-grow border-t-1 md:border-t-4 border-b-4 border-wh-900"></div>
          <span className="flex-shrink mx-4 font-extrabold text-lg md:text-3xl lg:text-3xl text-wh-900">
            Top Hotels
          </span>
          <div className="flex-grow border-t-1 md:border-t-4 border-b-4 border-wh-900"></div>
        </div>
      </div>
      <Top10Post
        title="1. Warwick Hotel Cheung Chau"
        whatIs="This hotel offers stunning sea views, spacious rooms, and is located just a 10-minute walk from the ferry terminal."
        image={"cchotel1.jpg"}
        categoryTag="Hotels"
        locationTag="East"
        id="clht87nnu000kulb4of6963e5"
      />
      <Top10Post
        title="2. B&B Cheung Chau"
        whatIs="This cozy bed and breakfast overlooks the beach and offers a comfortable stay with air-conditioning, private bathrooms, and a shared lounge area."
        image={"cchotel2.jpg"}
        categoryTag="Hotels"
        locationTag="East"
        id="clht87nti000mulb4tl49rs9g"
      />
      <Top10Post
        title="3. Lychee Apartment Hotel"
        whatIs=" Located just steps away from Tung Wan Beach, this hotel offers modern and clean accommodations with excellent amenities including free Wi-Fi and bicycle rentals."
        image={"cchotel3.jpeg"}
        categoryTag="Hotels"
        locationTag="North"
        id="clht87nz6000oulb4r2ipikwc"
      />
      <Top10Post
        title="4. Saiyuen"
        whatIs=" This eco-friendly resort features comfortable seaside tents, tree houses, and cabins. Guests here can enjoy a variety of outdoor activities, such as rock climbing, kayaking, and hiking."
        image={"cchotel4.png"}
        categoryTag="Hotels"
        locationTag="South"
        id="clht87o4q000qulb4a9juqe25"
      />
      <Top10Post
        title="5.  Cheung Chau Bed & Breakfast "
        whatIs=" This charming bed and breakfast features air-conditioned rooms with ensuite bathrooms and an excellent location close to the ferry terminal and all the island's attractions."
        image={"cchotel5.jpg"}
        categoryTag="Hotels"
        locationTag="North"
        id="clht87oai000sulb42mj03vld"
      />
    </main>
  );
}
