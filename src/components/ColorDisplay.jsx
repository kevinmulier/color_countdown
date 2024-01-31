/* eslint-disable react/prop-types */
const ColorDisplay = ({ randomizedColors, currentColorIndex }) => {
  return (
    <div
      className={`bg-[${randomizedColors[currentColorIndex]}] w-full max-w-2xl flex-1 rounded-3xl`}></div>
  );
};

export default ColorDisplay;
