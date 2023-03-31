/** @format */

import Logo from '../assets/footLogo.png';

const Footer = () => {
  return (
    <>
      <div className="grid lg:flex justify-center items-center gap-3 text-center">
        <p className="text-[#222222] font-semibold text-[24px]">
          You can reach us right away. Let’s begin your project.
        </p>
        <p className="text-[#F20A0A] font-semibold text-[24px]">
          {' '}
          Write us a message.
        </p>
      </div>
      <div className="grid md:flex justify-center  items-center bg-[#222222] gap-24 py-10">
        <div className="md:w-[32%] text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <img src={Logo} />
          </div>
          <div className=" text-white pt-8">
            <p className="">
              Mocking by Jay is a major record label that is mostly focused on
              rap music. We manage loads of different artists and therefore are
              quite a large company whose image is changing constantly.
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-14 md:gap-48 items-start sm:items-center">
          <ul className="text-white">
            <li>Careers</li>
            <li>Contact</li>
            <li>Privacy Policies</li>
            <li>Artist Royalties</li>
          </ul>

          <ul className="text-white">
            <li className="text-[18px] font-semibold">Connect</li>
            <li>LinkedIn</li>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Pinterest</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
