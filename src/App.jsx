import { useEffect, useState } from 'react';

function App() {
  const colors = ['#FF0000', '#0000FF', '#008000', '#000000', '#800080'];

  const [colorDuration, setColorDuration] = useState(60);
  const [restDuration, setRestDuration] = useState(10);
  const [randomizedColors, setRandomizedColors] = useState([...colors]);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [timer, setTimer] = useState(restDuration);
  const [isColorTimer, setIsColorTimer] = useState(false);

  useEffect(() => {
    let interval;
    if (restDuration == 0) {
      setIsColorTimer(true);
    }
    if (isGameStarted) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            // If the current timer is for color, move to the next color
            if (isColorTimer) {
              setCurrentColorIndex((prevIndex) => {
                if (prevIndex >= randomizedColors.length - 1) {
                  // Stop the game if all colors are shown
                  clearInterval(interval);
                  setIsGameStarted(false);
                  setCurrentColorIndex(0);
                  return prevIndex;
                }
                return prevIndex + 1;
              });
            }
            // Switch between rest and color timer
            if (restDuration != 0) {
              setIsColorTimer(!isColorTimer);
              return isColorTimer ? restDuration : colorDuration;
            } else {
              setIsColorTimer(true);
              return colorDuration;
            }
          } else {
            return prevTimer - 1;
          }
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [
    isGameStarted,
    isColorTimer,
    colorDuration,
    restDuration,
    randomizedColors.length,
  ]);

  const startGame = () => {
    setRandomizedColors(shuffleArray([...colors]));
    setTimer(restDuration > 0 ? 5 : colorDuration);
    setIsColorTimer(false);
    setIsGameStarted(true);
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  if (isGameStarted && isColorTimer) {
    return (
      <div className={`min-h-dvh flex flex-col items-center gap-5 p-2`}>
        <div
          className={`bg-[${randomizedColors[currentColorIndex]}] w-full max-w-2xl flex-1 rounded-3xl`}></div>
        <div className="flex flex-col items-center gap-2">
          <p className="font-bold text-4xl text-center">Temps restant</p>
          <span className="font-semibold text-6xl text-center uppercase">
            {timer} sec.
          </span>
        </div>
        <img
          src="/adaptamove.png"
          alt="Adapta'move Nancy"
          className="mt-auto"
        />
        <button
          className="btn border border-white bg-gradient-to-r from-[#ffa5a5] via-[#8787ff] to-[#51f851] text-transparent bg-clip-text btn-lg text-2xl font-bold uppercase no-animation"
          onClick={() => setIsGameStarted(false)}>
          Quitter la partie
        </button>
      </div>
    );
  }

  if (isGameStarted && !isColorTimer) {
    return (
      <div className={`min-h-dvh flex flex-col items-center gap-5 py-5`}>
        <div className="flex flex-col items-center gap-2 my-auto">
          <p className="font-bold text-2xl text-center">
            Prochaine couleur dans
          </p>
          <span className="font-semibold text-6xl text-center uppercase">
            {timer} sec.
          </span>
        </div>
        <img
          src="/adaptamove.png"
          alt="Adapta'move Nancy"
          className="mt-auto"
        />
        <button
          className="btn border border-white bg-gradient-to-r from-[#ffa5a5] via-[#8787ff] to-[#51f851] text-transparent bg-clip-text btn-lg text-2xl font-bold uppercase no-animation"
          onClick={() => setIsGameStarted(false)}>
          Quitter la partie
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-dvh flex flex-col items-center gap-5 py-5">
      <img
        src="/adaptamove.png"
        alt="Adapta'move Nancy"
      />
      <h1 className="text-4xl font-bold bg-gradient-to-r from-[#e79999] via-[#5858e9] to-[#55d855] inline-block text-transparent bg-clip-text text-center">
        ADAPTA&apos;COLOR
      </h1>
      <h3 className="text-center font-semibold text-lg">Liste des couleurs</h3>
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
          Durée par couleur (sec.)
        </label>
        <input
          id="color-duration"
          className="input input-bordered text-center max-w-24"
          type="number"
          value={Number(colorDuration).toString()}
          onChange={({ target }) =>
            setColorDuration(parseInt(target.value, 10) || 0)
          }
        />
      </div>
      <div className="max-w-fit flex flex-col items-center mx-auto gap-2">
        <label
          htmlFor="rest-duration"
          className="text-center font-semibold text-lg">
          Durée entre les couleurs (sec.)
        </label>
        <input
          id="rest-duration"
          className="input input-bordered text-center max-w-24"
          type="number"
          value={Number(restDuration).toString()}
          onChange={({ target }) =>
            setRestDuration(parseInt(target.value, 10) || 0)
          }
        />
      </div>
      <button
        className="btn border border-white bg-gradient-to-r from-[#ffa5a5] via-[#8787ff] to-[#51f851] text-transparent bg-clip-text btn-lg text-2xl font-bold uppercase"
        onClick={startGame}>
        Lancer la partie
      </button>
    </div>
  );
}

export default App;
