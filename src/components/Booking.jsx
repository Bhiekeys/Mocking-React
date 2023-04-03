/** @format */
import image from '../assets/sessionimage.png';
import Logo from '../assets/footLogo.png';
const Booking = () => {
  return (
    <div className="flex justify-between">
      <div className="ml-[70px] mt-14">
        <h2 className="text-2xl font-semibold mb-5">Book a Studio Session!</h2>
        <div
          className=" pl-[40px] py-[30px]  pr-[90px] rounded-3xl shadow-[0_4px_50px_0px_rgba(0,0,0,0.08)]
">
          <div className="mt-4">
            <p>Full Name</p>
            <input
              type="text"
              className="border border-[#222] px-7 py-[3px] rounded-md mt-2 outline-0"
            />
          </div>
          <div className="mt-4">
            <p>Stage Name</p>
            <input
              type="text"
              className="border border-[#222] px-7 py-[3px] rounded-md mt-2 outline-0"
            />
          </div>
          <div className="mt-4">
            <p>E-mail address</p>
            <input
              type="email"
              className="border border-[#222] px-7 py-[3px] rounded-md mt-2 outline-0"
            />
          </div>
          <div className="mt-4">
            <p>Duration (Hours)</p>
            <input
              type="text"
              className="border border-[#222] px-7 py-[3px] rounded-md mt-2 outline-0"
            />
          </div>
          <div className="mt-4">
            <p>Date</p>
            <input
              type="date"
              className="border border-[#222] px-[58px] py-[3px] rounded-md mt-2 outline-0"
            />
          </div>
          <div className="text-center mt-6">
            <button
              type="button"
              className="px-6 py-3 bg-[#F20A0A] text-white rounded-xl text-lg font-semibold">
              Book a Session
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <img src={image} className="w-[40vw] h-[100vh]" />
        <div className=" bg-[#222] py-4 grid justify-center text-center -translate-y-28">
          <div className='flex justify-center'>
            <img src={Logo} alt="" />
          </div>

          <div className="w-96 text-white mt-2 text-md">
            <p>
              Book a studio session with us and work with our talented and
              experienced producers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
