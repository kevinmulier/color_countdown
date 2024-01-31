/* eslint-disable react/prop-types */
const DurationControls = ({
  colorDuration,
  setColorDuration,
  restDuration,
  setRestDuration,
}) => {
  return (
    <>
      <div className="flex flex-col items-center gap-2 mx-auto max-w-fit">
        <label
          htmlFor="color-duration"
          className="text-lg font-semibold text-center">
          Durée par couleur (sec.)
        </label>
        <input
          id="color-duration"
          className="text-center input input-bordered max-w-24"
          type="number"
          value={Number(colorDuration).toString()}
          onChange={({ target }) =>
            setColorDuration(parseInt(target.value, 10) || 0)
          }
        />
      </div>
      <div className="flex flex-col items-center gap-2 mx-auto max-w-fit">
        <label
          htmlFor="rest-duration"
          className="text-lg font-semibold text-center">
          Durée entre les couleurs (sec.)
        </label>
        <input
          id="rest-duration"
          className="text-center input input-bordered max-w-24"
          type="number"
          value={Number(restDuration).toString()}
          onChange={({ target }) =>
            setRestDuration(parseInt(target.value, 10) || 0)
          }
        />
      </div>
    </>
  );
};

export default DurationControls;
