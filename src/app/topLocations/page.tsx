import Image from "next/image";
import SocialLinks from "../shared/SocialLinks";
import { Top10Post } from "../shared/Post";

export default function TopLocations() {
  return (
    <main id="top"  className="px-10 leading-7 bg-neutral-100 text-wh-900">
      <div className="py-10 ml-5 lg:ml-80 flex flex-col">
        <Image
          width={700}
          height={700}
          src={"/static/images/bestThings.jpg"}
          alt={""}
        />
        <div className="flex  mt-5 font-extrabold font-sans text-xl md:text-3xl lg:text-3xl text-wh-900 ">
          The 8 best things to do in Cheung Chau 2023
        </div>
        <div className="flex mt-5 pt-1 pb-5 font-bold text-base md:text-lg lg:text-lg text-wh-900">
          From beautiful beaches to crazy pirate hideout, check out the best
          things to do in Cheung Chau this year
        </div>
        <SocialLinks isDark />
        <div className="flex flex-col  mt-5 pt-1 pb-5 text-sm md:text-base lg:text-base text-wh-900">
          <p className="md:mr-96 lg:mr-96">
            Cheung Chau is a small island located in Hong Kong's New
            Territories. It is a popular destination for tourists as it offers a
            peaceful atmosphere and a glimpse into the traditional way of life
            in Hong Kong. Touring Cheung Chau involves exploring its narrow
            streets packed with colorful shops selling local delicacies,
            souvenirs, and fishing gear. One of the most popular must-visit
            attraction on the island is the Pak Tai Temple, which is dedicated
            to the Taoist God, Pak Tai. Hiking enthusiasts can also explore the
            island's hills for scenic views of the surrounding sea and hills.
            There is also a hiking trail, known as the "Mini Great Wall," which
            has been built to resemble China's Great Wall, providing a unique
            experience.
          </p>
          <br />
          <p className="md:mr-96 lg:mr-96">
            Another popular tourist activity is enjoying Cheung Chau's seafood,
            which is fresh and sourced from the surrounding waters. Seafood
            restaurants are located near the waterfront, where visitors can
            enjoy a variety of seafood dishes. Overall, touring Cheung Chau
            offers a relaxing and enjoyable day trip experience with plenty of
            opportunities to experience Hong Kong's rich culture and stunning
            natural beauty.
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
            Top Things To Do
          </span>
          <div className="flex-grow border-t-4 border-b-4 border-wh-900"></div>
        </div>
      </div>
      <Top10Post
        title="1. Catch a ferry or two in the famous pier"
        whatIs="This is the main entrance to the island and where most visitors arrive by ferry. It's a great spot for people-watching, and you can catch a glimpse of fishermen unloading their daily catch."
        image={"/static/images/cc1.jpg"}
        categoryTag="Attractions"
        locationTag="West"
        id="clht87lum0000ulb4wlqnrf76"
      />
      <Top10Post
        title="2. Take in the views from the Tung Wan Beach"
        whatIs="A popular sandy beach on the island where visitors can swim, sunbathe, and enjoy water sports activities. There are also plenty of seafood restaurants and cafes nearby."
        image={"/static/images/cc2.jpg"}
        categoryTag="Attractions"
        locationTag="North"
        id="clht87m6t0002ulb4rpi9o5vt"
      />
      <Top10Post
        title="3. Drink, eat and people watch at  Pak Tai Temple"
        whatIs=" A historic temple dedicated to the Taoist God of the Sea, Pak Tai. The temple houses several beautiful statues and traditional Chinese architecture."
        image={"/static/images/cc3.jpeg"}
        categoryTag="Temple"
        locationTag="North"
        id="clht87mcn0004ulb43jzhiwml"
      />
      <Top10Post
        title="4. Find that legednary treasure at Cheung Po Tsai Cave"
        whatIs="The historic site where infamous pirate of the century Cheung Po Tsai hid his booty. "
        image={"/static/images/cc4.jpg"}
        categoryTag="Historical"
        locationTag="South"
        id="clht87mid0006ulb4l89c1h85"
      />
      <Top10Post
        title="5. Discover exciting natural minerals at Reclining Rock "
        whatIs="A unique rock formation that looks like a reclining body. It's a popular spot for taking photos and just hanging out."
        image={"/static/images/cc5.jpeg"}
        categoryTag="Scenic"
        locationTag="South"
        id="clht87mo30008ulb4mwt1cv4b"
      />
      <Top10Post
        title="6. Reimagine life as a surfer at Kwun Yam Beach"
        whatIs=" Another beautiful beach in Cheung Chau, with crystal clear water and stunning views of the surrounding hills."
        image={"/static/images/cc6.jpg"}
        categoryTag="Scenic"
        locationTag="East"
        id="clht87mu0000aulb46xagsfak"
      />
      <Top10Post
        title="7. Get lost in  Mini Great Wall "
        whatIs="Chocolataria Equador is a brand, 100% Portuguese, made of handmade chocolate. In Invicta there are stores in Rua Sá da Bandeira, Rua das Flores and Rua Sousa Viterbo."
        image={"/static/images/cc8.jpg"}
        categoryTag="Hiking"
        locationTag="Scenic"
        id="clht87n5o000eulb4tj4wbpaw"
      />
      <Top10Post
        title="8. Stroll around Tung Wan Tsai"
        whatIs="A small island located off Cheung Chau Island. Visitors can take a short boat ride to explore its gorgeous beaches and crystal-clear waters."
        image={"/static/images/cc10.jpg"}
        categoryTag="Scenic"
        locationTag="North"
        id="clht87nht000iulb423iyqci2"
      />
    </main>
  );
}
