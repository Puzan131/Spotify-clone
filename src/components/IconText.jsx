import { Icon } from "@iconify/react";
const IconText = ({ icon, text, active }) => {
  return (
    <div className="flex text-white gap-4 cursor-pointer">
      <div>
        <Icon
          icon={icon}
          color={active ? "white" : "gray"}
          fontSize={25}
        ></Icon> 
      </div>
      <div
        className={`${active ? "text-white" : "text-gray-400"} font-semibold hover:text-white transition duration-300`}
      >
        {text}
      </div>
    </div>
  );
};
export default IconText;
