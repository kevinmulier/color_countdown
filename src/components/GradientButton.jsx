/* eslint-disable react/prop-types */
const GradientButton = ({ onClick, text }) => {
  return (
    <button
      className="btn border border-white bg-gradient-to-r from-[#ffa5a5] via-[#8787ff] to-[#51f851] text-transparent bg-clip-text btn-lg text-2xl font-bold uppercase no-animation"
      onClick={onClick}>
      {text}
    </button>
  );
};

export default GradientButton;
