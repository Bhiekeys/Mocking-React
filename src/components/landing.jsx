/** @format */
import Headset from '../assets/headset.png';

const Landing = () => {
  return (
    <div className="flex justify-center items-center bg-[#0D0D0D] flex-col sm:flex-row pt-20">
      <div className="w-[80%] sm:w-[40%]">
        <h2 className="text-[#FFFFFF] text-[40px] text-center sm:text-left font-semibold sm:text-[50px] lg:text-[60px]">
          When words fail, <span className="text-[#F20A0A]">Music </span>{' '}
          speaks.
        </h2>
        <p className="text-[#fff] sm:text-[30px] lg:text-[40px] text-[30px] italic mt-2 font-thin sm:text-left text-center">
          This is the home of music!
        </p>
        <div className='flex justify-center sm:justify-start'>
          <button className="text-[#F20A0A] bg-[#fff]  lg:px-8 lg:py-2 rounded-xl text-1xl sm:text-2xl py-1 px-4 font-semibold mt-7">
            Book an artiste.
          </button>
        </div>
      </div>
      <div className="w-[80%] sm:w-[35%] flex justify-center mt-10 md:mt-0">
        <img src={Headset} className="h-[500px]" />
      </div>
    </div>
  );
};

export default Landing;
