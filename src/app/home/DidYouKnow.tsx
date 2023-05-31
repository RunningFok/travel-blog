import { Post, SmallPost } from "../shared/Post";
import Image from "next/image";

export default function DidYouKnow() {
  return (
    <section className="pb-28">
      <div className="lg:ml-96 lg:mr-96 relative flex sm:py-0 md:py-5 lg:py-5 items-center">
        <div className="flex-grow border-t-4 border-b-4 border-wh-900"></div>
        <span className="flex-shrink mx-4 font-extrabold font-sans text-xl md:text-3xl lg:text-3xl text-wh-900">
          Did You Know
        </span>
        <div className="flex-grow border-t-4 border-b-4 border-wh-900"></div>
      </div>
      <div className="relative sm:py-0  flex-col">
        <SmallPost
          title="Why is Cheung Chau called Cheung Chau?"
          snippet="Cheung Chau is an island located in the southwest of Hong Kong, and it's also known as 'Long Island' because of its shape."
          image="trivia1.jpg"
          className="items-center "
        />
        <div className="lg:mx-96 flex  border-b border-wh-300"></div>
        <SmallPost
          title="What is the population of Cheung Chau?"
          snippet="Cheung Chau has a population of around 23,000 people and is one of the oldest fishing communities in Hong Kong."
          image="trivia2.jpg"
        />
        <div className="lg:mx-96 flex border-b border-wh-300"></div>
        <SmallPost
          title="What is the activity of the Bun festival?"
          snippet=" The annual Bun Festival involves contestants climbing up the tower made of bamboo to grab the highest buns possible."
          image="trivia3.jpg"
        />
        <div className="lg:mx-96 flex border-b border-wh-300"></div>
        <SmallPost
          title="Where are all the cars in Cheung Chau?"
          snippet="Vehicles are not allowed on the main streets, which provides a more peaceful environment for its residents and visitors."
          image="trivia4.jpg"
        />
      </div>
      <div id="subscribe" />
    </section>
  );
}
