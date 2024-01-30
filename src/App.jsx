import { useState } from 'react';

function App() {
  const colors = ['#FF0000', '#0000FF', '#008000', '#000000', '#800080'];

  const [colorDuration, setColorDuration] = useState(60);
  const [restDuration, setRestDuration] = useState(10);
  const [randomizedColors, setRandomizedColors] = useState(colors);

  return (
    <div className="min-h-dvh flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-[#e79999] via-[#5858e9] to-[#55d855] inline-block text-transparent bg-clip-text">
        SWITCH&apos;IT
      </h1>
      <h3 className="text-center">Liste des couleurs</h3>
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
      <div className="max-w-fit flex flex-col items-center mx-auto gap-2">
        <label
          htmlFor="color-duration"
          className="text-center font-semibold text-lg">
          Durée par couleur (secondes)
        </label>
        <input
          id="color-duration"
          className="input input-bordered text-center max-w-24"
          type="number"
          value={colorDuration}
          onChange={({ target }) => setColorDuration(target.value)}
        />
      </div>
      <div className="max-w-fit flex flex-col items-center mx-auto gap-2">
        <label
          htmlFor="rest-duration"
          className="text-center font-semibold text-lg">
          Durée entre les couleurs (secondes)
        </label>
        <input
          id="rest-duration"
          className="input input-bordered text-center max-w-24"
          type="number"
          value={restDuration}
          onChange={({ target }) => setRestDuration(target.value)}
        />
      </div>
      <button className="btn btn-primary btn-lg">
        Démarrer Switch&apos;It
      </button>
    </div>
  );
}

export default App;
