/** @format */
import First from '../assets/pics1.png'
import Second from '../assets/pics2.png';
import Third from '../assets/pics3.png';

const About = () => {
  return (
    <div className="flex justify-center flex-col-reverse lg:flex-row items-center pt-10  lg:space-x-12 xl:space-x-20 md:pt-32">
      <div className="w-[80%] lg:w-[33vw] mt-8 lg:mt-0 text-center lg:text-left">
        <h2 className="text-[27px] font-medium mb-4">
          We are home to the very best talents & artistes, leading the music
          industry.
        </h2>
        <p className="text-lg mb-4">
          Mocking by Jay has maintained a strong and innovative push to promote
          capacity building and creativity that showcase the richness and
          diversity of the Music culture via story-telling.
        </p>
        <div>
          <button className="bg-[#222222] text-white px-3 py-1 rounded-sm">
            Learn more
          </button>
        </div>
      </div>
      <div className="flex justify-center flex-col sm:flex-row items-center xl:gap-4  lg:w-[48%] ">
        <img src={First} className="" />
        <img src={Second} className="" />
        <img src={Third} className="" />
      </div>
    </div>
  );
};

export default About;
