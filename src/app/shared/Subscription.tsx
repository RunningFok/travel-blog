type Props = {};

export default function Subsecription(props: Props) {
  return (
    <div className="bg-[#F4F4F4] border flex flex-col sm:flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between items-start px-20 py-5">
      <div className="px-5 flex flex-col">
        <h5 className="font-bold text-lg text-wh-900 ">Get us in your inbox</h5>
        <h6 className="text-wh-900 text-md w-6/8">
          Sign up to our newsletter for the latest and greatest from your city
          and beyond
        </h6>
      </div>
      <div className="flex flex-col pl-5 pt-5 md:pl-10 md:pr-5 lg:pl-10 lg:pr-5">
        <input
          className="text-left w-11/12 min-w-[100px] px-5 py-2 border rounded-sm"
          placeholder="Enter email address"
        ></input>
        <p className="text-xs w-11/12 text-wh-500 mt-5">
          By entering your email address you agree to our Terms of Use and
          Privacy Policy and consent to receive emails from ChewOut about news,
          events, offers and partner promotions.
        </p>
      </div>
      <div className="flex pl-5 pt-5 md:pl-0 md:pr-10 lg:pl-0 lg:pr-10 ">
        <button className="bg-red-400 rounded-md text-neutral-100 font-semibold w-48 py-2 min-w-[100px]">
          Subscribe now
        </button>
      </div>
    </div>
  );
}
