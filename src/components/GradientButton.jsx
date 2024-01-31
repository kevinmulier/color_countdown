/* eslint-disable react/prop-types */
const GradientButton = ({ onClick, text }) => {
  return (
    <button
      className="border border-white border-opacity-25 shadow-xl btn btn-lg no-animation"
      onClick={onClick}>
      <span className="bg-gradient-to-r from-[#ffa5a5] via-[#8787ff] to-[#51f851] text-transparent bg-clip-text text-2xl font-bold uppercase ">
        {text}
      </span>
    </button>
  );
};

export default GradientButton;
