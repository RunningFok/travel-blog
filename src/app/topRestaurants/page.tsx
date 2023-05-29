import Image from "next/image";
import SocialLinks from "../shared/SocialLinks";
import { Top10Post } from "../shared/Post";

export default function TopRestaurants() {
  return (
    <main id="top" className="px-10 leading-7 bg-neutral-100 text-wh-900">
      <div className="py-10 ml-5 lg:ml-80 flex flex-col">
        <Image
          width={700}
          height={700}
          src={"/public/static/images/buns.jpeg"}
          alt={""}
        />
        <div className="flex  mt-5 font-extrabold font-sans text-xl md:text-3xl lg:text-3xl text-wh-900 ">
          The 5 best foodie spots in Cheung Chau
        </div>
        <div className="flex mt-5 pt-1 pb-5 font-bold text-lg text-wh-900">
          As Cheung Chau is a popular tourist destination, there are many
          different types of cuisines on the island to cater to the diverse
          taste preferences of visitors.
        </div>
        <SocialLinks isDark />
        <div className="flex flex-col  mt-5 pt-1 pb-5 text-sm md:text-base lg:text-base text-wh-900">
          <p className="md:mr-96 lg:mr-96">
            Cheung Chau is a small island located in Hong Kong, and the food
            culture is mostly centered around seafood and snacks. Cheung Chau is
            famous for its street food like fish balls, squid skewers, tofu
            pudding, and egg waffles. The island is also known for its
            traditional seafood restaurants where locals and tourists enjoy
            fresh seafood like steamed fish, crabs, and shellfish. Tofu-based
            dishes like tofu soup are also popular on the island.
          </p>
          <br />
          <p className="md:mr-96 lg:mr-96">
            One unique aspect of Cheung Chau's food culture is the annual Cheung
            Chau Bun Festival, where a unique type of vegetarian bun made with
            bean paste, mushrooms, and vegetables is served. During the
            festival, enormous towers of the buns are created as a centrepiece
            of the celebration. In addition to seafood and traditional dishes,
            western food options like pizza and pasta are also available on the
            island.
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
          <div className="flex-grow border-t-4 border-b-4 border-wh-900"></div>
          <span className="flex-shrink mx-4 font-extrabold text-lg md:text-3xl lg:text-3xl text-wh-900">
            Best Food Spots
          </span>
          <div className="flex-grow border-t-4 border-b-4 border-wh-900"></div>
        </div>
      </div>
      <Top10Post
        title="1. Kanna Kitchen"
        whatIs="Kanna Kitchen is a family-owned Japanese home food restaurant that serves authentic and delicious Japanese cuisine. With generations of family recipes passed down."
        image={"/public/static/images/restaurant1.jpg"}
        categoryTag="Attractions"
        locationTag="West"
        id="cli0k4wze0000ulb4x78lkeu1"
      />
      <Top10Post
        title="2. Sidan"
        whatIs="Sidan is a charming Italian restaurant located in the heart of Cheung Chau island. It offers a cozy and inviting ambiance that is perfect for intimate gatherings or family dinners."
        image={"/public/static/images/restaurant2.jpg"}
        categoryTag="Attractions"
        locationTag="North"
        id="cli0k6rra0002ulb4rlqt9cvy"
      />
      <Top10Post
        title="3. Islander Cheung Chau"
        whatIs="Islander Cheung Chau is a beer shop located in the picturesque island of Cheung Chau in Hong Kong."
        image={"/public/static/images/restaurant3.jpg"}
        categoryTag="Temple"
        locationTag="North"
        id="cli0k8aom0004ulb4wvjsecq9"
      />
      <Top10Post
        title="4. Ling Heung"
        whatIs="Ling Heung is a cozy and inviting restaurant nestled in the heart of Cheung Chau, known for its delicious authentic Cantonese cuisine."
        image={"/public/static/images/restaurant4.jpg"}
        categoryTag="Historical"
        locationTag="South"
        id="cli0kcqbf0006ulb4s3dvx37c"
      />
      <Top10Post
        title="5. Hometown Teahouse "
        whatIs="Hometown Teahouse is a charming little bakery located in the heart of Cheung Chau that specializes in crafting delicious and authentic red bean pastries. "
        image={"/public/static/images/restaurant5.jpg"}
        categoryTag="Scenic"
        locationTag="South"
        id="cli0ketfw0008ulb4k22saj5w"
      />
    </main>
  );
}
