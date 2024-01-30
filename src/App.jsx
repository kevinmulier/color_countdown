import { useState } from 'react';

function App() {
  const [colors, setColors] = useState(Array(5).fill('#ffffff'));

  const generateRandomColors = () => {
    const newColors = colors.map(() => {
      const randomColor =
        '#' +
        Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, 0);
      return randomColor;
    });

    setColors(newColors);
  };

  const addColor = () => {
    let newColors = [...colors];

    const randomColor =
      '#' +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0);

    newColors.unshift(randomColor);
    setColors(newColors);
  };

  const removeColor = () => {
    let newColors = [...colors];
    newColors.pop();
    setColors(newColors);
  };

  return (
    <div className="min-h-dvh flex flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-center gap-4">
        <div>
          <h3 className="text-center">Liste des couleurs</h3>
          <div className="flex gap-2">
            {colors.map((color) => (
              <input
                type="color"
                className="input input-ghost p-0 w-12 h-12"
                key={Math.floor(Math.random() * 2000)}
                value={color}></input>
            ))}
          </div>
        </div>
        <button
          className="btn btn-accent"
          onClick={addColor}>
          Ajouter une couleur
        </button>
        <button
          className="btn btn-neutral"
          onClick={generateRandomColors}>
          Couleurs aléatoires
        </button>
        <button
          className="btn btn-error"
          onClick={removeColor}>
          Supprimer une couleur
        </button>
      </div>
      <button className="btn btn-primary">Démarrer Switch&apos;It</button>
    </div>
  );
}

export default App;
