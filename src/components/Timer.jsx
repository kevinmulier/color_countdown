/* eslint-disable react/prop-types */
const Timer = ({ timer, text }) => {
  return (
    <div className="flex flex-col items-center gap-2 my-auto">
      <p className="text-2xl font-bold text-center">{text}</p>
      <span className="text-6xl font-semibold text-center uppercase">
        {timer} sec.
      </span>
    </div>
  );
};

export default Timer;
