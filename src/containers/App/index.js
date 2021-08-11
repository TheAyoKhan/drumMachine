import { useState, useEffect, useCallback } from 'react';
import Display from '../../components/Display';
import DrumPad from '../../components/DrumPad';
import sounds from '../../assets/sounds.json';

const App = () => {
  const [latestSound, setLatestSound] = useState("Click a button");

  const playSound = useCallback((letter) => {
    const soundName = sounds[letter].soundName;
    setLatestSound(soundName);
    const el = document.getElementById(letter);
    el.play();
  }, [])
  
  const handleClick = useCallback(event => {
    const letter = event.target.innerText;
    playSound(letter);
  }, [playSound])
  
  const handleKeydown = useCallback(event => {
    const letter = event.key.toUpperCase();
    if (sounds.hasOwnProperty(letter)) playSound(letter);
  }, [playSound])
  
  useEffect(() => {
    document.addEventListener("keydown", handleKeydown)
  }, [handleKeydown]);
  
  const drumPads = Object.keys(sounds).map(letter => <DrumPad letter={letter} soundInformation={sounds[letter]} click={handleClick} />)
  
  return(
    <>
      <div id="drum-pads">
        {drumPads}
      </div>
      
      <Display latestSound={latestSound}/>
    </>
  );
};



export default App;
