
const MusicsContent = ({ music , image }) => {
    return (
      <div className=''>
            <img src={image} alt="" />
            <p className="text-center -translate-y-12 text-white sm:-translate-y-16 opacity-90 sm:py-5 bg-[#222222]">{music }</p>
       
      </div>
    );
}
export default MusicsContent