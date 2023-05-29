import { Post } from "../shared/Post";
export default function Booking() {
  return (
    <section className="pb-10">
      <div className="lg:ml-96 lg:mr-96 relative flex py-5 items-center">
        <div className="flex-grow border-t-4 border-b-4 border-wh-900"></div>
        <span className="flex-shrink mx-4 font-extrabold font-sans text-xl md:text-3xl lg:text-3xl text-wh-900">
          Find Local Activities
        </span>
        <div className="flex-grow border-t-4 border-b-4 border-wh-900"></div>
      </div>

      <div className="lg:ml-96 lg:mr-96 relative py-5 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 gap-3 justify-center items-stretch content-evenly ">
        <Post
          image="public/static/images/bunfestival2.jpg"
          title="Cheung Chau Bun Festival"
          snippet="Cheung Chau bun festival is a traditional event held in Hong Kong every year where locals climb a massive bun tower, each contains up to 60 thick buns, and compete to grab as many as possible."
          
        />
        <Post
          image="public/static/images/windsurfing3.jpg"
          title="Cheung Chau Windsurfing Centre"
          snippet="Cheung Chau windsurfing center is a watersports facility located in Cheung Chau Island, Hong Kong, known for offering windsurfing lessons and equipment rental services to enthusiasts of all levels."
          className="hover:underline hover:decoration-4 hover:decoration-teal-400 "
        />
        <Post
          image="public/static/images/musicfestival.jpeg"
          title="Shi Fu Miz Festival"
          snippet="The Shi Fu Miz Festival in Cheung Chau showcases a vibrant mixture of music, art and culture amidst stunning natural scenery. Visitors can enjoy live performances, workshops, installations and international cuisine."
          className="hover:underline hover:decoration-4 hover:decoration-teal-400 "
        />
        <Post
          image="public/static/images/adventurecamping.jpeg"
          title="Camping Adventure at Saiyuen"
          snippet="Saiyuen is an eco-adventure park situated in Cheung Chau, Hong Kong. It offers exciting activities such as ziplining, rock climbing, kayaking, and camping, making it a perfect destination for a nature escape."
          className="hover:underline hover:decoration-4 hover:decoration-teal-400 "
        />
      </div>
    </section>
  );
}
