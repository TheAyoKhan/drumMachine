const DrumPad = ({ letter, soundInformation, click }) => {
  return (
    <div class="drum-pad" id={soundInformation.soundId} onClick={click}>
      {letter}
      <audio class="clip" id={letter} src={soundInformation.url} type="audio/mp3"/>
    </div>
  );
};

export default DrumPad;