
const ArtistesContent = ({ image, name }) => {
    return (
      <div>
        <div>
          <img src={image} alt="" />
          <p className="text-[#222222] font-bold mt-4">{name}</p>
        </div>
      </div>
    );
}

export default ArtistesContent
