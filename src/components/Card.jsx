
const Card = ({ title, description,imageLink }) => {
    return (
      <div className="bg-[#151515] hover:bg-[#272727] transition duration-300 ease-in-out cursor-pointer w-1/6 p-4 rounded-md">
        <img
          src={imageLink}
          className="w-full rounded-md"
          alt=""
        />
        <div className="text-white text-md font-semibold my-3">{title}</div>
        <div className="text-white text-sm">{description}</div>
      </div>
    );
  };

  export default Card;