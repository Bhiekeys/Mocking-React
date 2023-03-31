/** @format */
import Love from '../assets/love.png'
import North from '../assets/north.png'
import Pg from '../assets/pg.png'
import Tatneft from '../assets/tatneft.png'
import Pancho from '../assets/Pancho.png'
import Victory from '../assets/victory.png'

const Break = () => {
    return (
      <div>
        <div className="bg-[#222222] py-8 mt-12 flex justify-center">
          <p className="text-[#fff] text-xl text-center ">
            We have worked with some of the world’s smartest companies.
          </p>
        </div>
        <div className="mt-9 grid space-y-5 md:space-y-24 mb-10">
          <div className="flex justify-center items-center space-x-10 md:space-x-28 ">
            <img src={Love} className="w-[17vw]" />
            <img src={North} className="w-[17vw]" />
            <img src={Pg} className="w-[17vw]" />
          </div>
          <div className="flex justify-center items-center space-x-10 md:space-x-28">
            <img src={Tatneft} className="w-[17vw]" />
            <img src={Pancho} className="w-[17vw]" />
            <img src={Victory} className="w-[17vw]" />
          </div>
        </div>
      </div>
    );
};

export default Break;
