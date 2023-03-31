import Burg from '../assets/burg.png'
import Burge from '../assets/burge.png'
import MusicsContent from './MusicsContent';
import firstday from '../assets/firstday.png'
import rema from '../assets/rema.png'
import found from '../assets/found.png'
import wayout from '../assets/wayout.png'
import cocash from '../assets/cocash.png'
import missyou from '../assets/missyou.png'
import tooley from '../assets/tooley.png'
import numb from '../assets/numb.png'

const Musics = () => {
    return (
      <div className='py-[80px]'>
        <div className="flex justify-between mx-4 lg:mx-44 mt-10 items-center border-b-8 border-[#F20A0A] pb-2 ">
          <h2 className="font-[550] text-xl">MUSIC</h2>
          <div className="flex gap-2">
            <img src={Burg} />
            <img src={Burge} />
          </div>
        </div>
        <div className="flex justify-between mx-4 gap-5 lg:mx-44 mt-10">
          <MusicsContent
            music='Abby Jasmine - "First day out"'
            image={firstday}
          />
          <MusicsContent music="Bad Gyal - “44”" image={rema} />
        </div>
        <div className="flex justify-between mx-4 gap-5 lg:mx-44 -mt-5">
          <MusicsContent music="Benny Blanco - “Found You”" image={found} />
          <MusicsContent music="Contradash - “Way Out”" image={wayout} />
        </div>
        <div className="flex justify-between mx-4 gap-5 lg:mx-44 -mt-5">
          <MusicsContent music="Co Cash - “Diferrence”" image={cocash} />
          <MusicsContent music="Kitty Cash - “Missing You”" image={missyou} />
        </div>
        <div className="flex justify-between mx-4 gap-5 lg:mx-44 -mt-5">
          <MusicsContent music="BrokeASF - Tooley" image={tooley} />
          <MusicsContent music="Brianna Castro - “Numb”" image={numb} />
        </div>
      </div>
    );
}

export default Musics