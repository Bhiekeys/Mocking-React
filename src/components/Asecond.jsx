/** @format */

import Mike from "../assets/mike.png"

const Asecond = () => {
  return (
    <div className="flex justify-center flex-col lg:flex-row items-center pt-10  gap-10 md:pt-32">
      <div>
        <img src={Mike} alt="" />
      </div>
      <div className="w-[80%] lg:w-[48vw] mt-8 lg:mt-0 text-center lg:text-left">
        <h2 className="text-[27px] font-medium mb-4">
          We license, distribute and publish rich musiccal content for artistes,
          song writers and producers.
        </h2>
        <p className="text-lg mb-4 lg:w-[70%]">
          We have a transparent structure ensuring that revenues made through
          content distribution get to these artistes, producers and songwriters
          as due them.{' '}
        </p>
        <p className="mt-5 text-lg mb-4 lg:w-[70%]">
          We are a music company that is more artistic with extra support that
          ensures result for our signed talents.
        </p>

        <div>
          <button className="bg-[#222222] text-white px-3 py-1 rounded-sm">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};
export default Asecond;
