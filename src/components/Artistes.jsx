/** @format */

import ArtistesContent from './ArtistesContent';
import Abby from '../assets/abby.png';
import Brian from '../assets/brian.png';
import Aviici from '../assets/aviici.png';
import Benny from '../assets/benny.png'
import Broke from '../assets/broke.png'
import Bad from '../assets/bad.png'
import Co from '../assets/co.png'
import Contra from '../assets/contra.png'
import Kitty from '../assets/kitty.png'
import Artists from '../assets/artists.png';

const Artistes = () => {
  return (
    <div className='py-[80px]'>
      <div className="flex justify-between items-center md:mx-[65px] mt-10 mb-4">
        <h3 className='font-semibold'>Meet our Top Artistes</h3>
        <input
          type="text"
          placeholder="search"
          className="border border-black w-32 py-1 rounded-xl outline-none placeholder:text-black"
        />
      </div>
      <div>
        <div className="flex justify-center gap-5 lg:gap-40 text-center lg:text-left">
          <ArtistesContent image={Abby} name="Abby Jasmine" />
          <ArtistesContent image={Brian} name="Brianna Castro" />
          <ArtistesContent image={Aviici} name="Aviici" />
        </div>
        <div className="flex justify-center gap-5 lg:gap-40 text-center lg:text-left mt-10">
          <ArtistesContent image={Broke} name="BrokeASF" />
          <ArtistesContent image={Benny} name="Benny Blancq" />
          <ArtistesContent image={Bad} name="Bad Gyal" />
        </div>
        <div className="flex justify-center gap-5 lg:gap-40 text-center lg:text-left my-10">
          <ArtistesContent image={Co} name="Co Cash" />
          <ArtistesContent image={Contra} name="Contradash" />
          <ArtistesContent image={Kitty} name="Kitty Cash" />
        </div>
      </div>
      <div className='md:mb-44'>
        <img src={Artists} />
      </div>
    </div>
  );
};

export default Artistes;
