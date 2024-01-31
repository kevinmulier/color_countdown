import { useEffect, useState } from 'react';
import ColorList from './components/ColorList';
import ColorDisplay from './components/ColorDisplay';
import Logo from './components/Logo';
import Timer from './components/Timer';
import GradientButton from './components/GradientButton';
import DurationControls from './components/DurationControls';
import shuffleArray from './utils/shuffleArray';

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

    const endGame = () => {
      clearInterval(interval);
      setIsGameStarted(false);
      setCurrentColorIndex(0);
    };

    const updateColorIndex = (prevIndex) => {
      if (prevIndex >= randomizedColors.length - 1) {
        endGame();
        return prevIndex;
      }
      return prevIndex + 1;
    };

    const toggleTimerAndUpdateDuration = (isColor) => {
      setIsColorTimer(!isColor);
      return isColor ? restDuration : colorDuration;
    };

    if (isGameStarted) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            if (isColorTimer) {
              setCurrentColorIndex(updateColorIndex);
            }
            return restDuration !== 0
              ? toggleTimerAndUpdateDuration(isColorTimer)
              : colorDuration;
          } else {
            return prevTimer - 1;
          }
        });
      }, 1000);
    }

    // Set initial timer color when rest duration is 0
    if (restDuration === 0) {
      setIsColorTimer(true);
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
    setTimer(restDuration ? 3 : colorDuration);
    setIsColorTimer(false);
    setCurrentColorIndex(0);
    setIsGameStarted(true);
  };

  if (isGameStarted) {
    return (
      <div className={`min-h-dvh flex flex-col items-center gap-5 py-5 p-2`}>
        {isColorTimer && (
          <>
            <ColorDisplay
              randomizedColors={randomizedColors}
              currentColorIndex={currentColorIndex}
            />
            <Timer
              timer={timer}
              text={'Temps restant'}
            />
          </>
        )}
        {!isColorTimer && currentColorIndex === 0 ? (
          <Timer
            timer={timer}
            text={'La partie démarre dans'}
          />
        ) : !isColorTimer && currentColorIndex !== 0 ? (
          <Timer
            timer={timer}
            text={'Prochaine couleur dans'}
          />
        ) : null}
        <Logo />
        <GradientButton
          onClick={() => {
            setIsGameStarted(false);
          }}
          text={'Quitter la partie'}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-5 p-2 py-5 min-h-dvh">
      <Logo />
      <ColorList colors={colors} />
      <DurationControls
        colorDuration={colorDuration}
        setColorDuration={setColorDuration}
        restDuration={restDuration}
        setRestDuration={setRestDuration}
      />
      <GradientButton
        onClick={startGame}
        text={'Lancer la partie'}
      />
    </div>
  );
}

export default App;
