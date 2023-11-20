const TextWithHover = ({ text, active,AdditionalStyling }) => {
  return (
    <div className="flex text-white gap-4 cursor-pointer">
      <div
        className={`${active ? "text-white" : "text-gray-400"} ${AdditionalStyling}  font-semibold text-lg tracking-widestP hover:text-white transition duration-300`}
      >
        {text}
      </div>
    </div>
  );
};
export default TextWithHover;
