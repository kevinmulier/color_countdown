/* eslint-disable react/prop-types */
const ColorList = ({ colors }) => {
  return (
    <>
      <h3 className="text-lg font-semibold text-center">Liste des couleurs</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {colors.map((color) => {
          const bgColor = `bg-[${color}]`;
          return (
            <div
              className={
                'p-0 w-12 h-12 border-white border border-opacity-70 rounded-xl ' +
                bgColor
              }
              key={color}
              value={color}
            />
          );
        })}
      </div>
    </>
  );
};

export default ColorList;
