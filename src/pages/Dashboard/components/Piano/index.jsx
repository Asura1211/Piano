import React from 'react';
import styles from './index.module.scss';

function Piano() {
  const keys = [
    { type: 'white', name: 'c2', tag: 'do', color: 'LightSkyBlue ', key: '1' },
    { type: 'black', name: 'cs2', key: '!' },
    { type: 'white', name: 'd2', tag: 're', color: 'LightSkyBlue ', key: '2' },
    { type: 'black', name: 'ds2', key: '@' },
    { type: 'white', name: 'e2', tag: 'mi', color: 'LightSkyBlue ', key: '3' },
    { type: 'white', name: 'f2', tag: 'fa', color: 'LightSkyBlue ', key: '4' },
    { type: 'black', name: 'fs2', key: '$' },
    { type: 'white', name: 'g2', tag: 'so', color: 'LightSkyBlue ', key: '5' },
    { type: 'black', name: 'gs2', key: '%' },
    { type: 'white', name: 'a2', tag: 'la', color: 'LightSkyBlue ', key: '6' },
    { type: 'black', name: 'as2', key: '^' },
    { type: 'white', name: 'b2', tag: 'si', color: 'LightSkyBlue ', key: '7' },
    { type: 'white', name: 'c3', tag: 'do', color: 'LightSalmon', key: '8' },
    { type: 'black', name: 'cs3', key: '*' },
    { type: 'white', name: 'd3', tag: 're', color: 'LightSalmon', key: '9' },
    { type: 'black', name: 'ds3', key: '(' },
    { type: 'white', name: 'e3', tag: 'mi', color: 'LightSalmon', key: '0' },
    { type: 'white', name: 'f3', tag: 'fa', color: 'LightSalmon', key: 'q' },
    { type: 'black', name: 'fs3', key: 'Q' },
    { type: 'white', name: 'g3', tag: 'so', color: 'LightSalmon', key: 'w' },
    { type: 'black', name: 'gs3', key: 'W' },
    { type: 'white', name: 'a3', tag: 'la', color: 'LightSalmon', key: 'e' },
    { type: 'black', name: 'as3', key: 'E' },
    { type: 'white', name: 'b3', tag: 'si', color: 'LightSalmon', key: 'r' },
    { type: 'white', name: 'c4', tag: 'do', color: 'Khaki', key: 't' },
    { type: 'black', name: 'cs4', key: 'T' },
    { type: 'white', name: 'd4', tag: 're', color: 'Khaki', key: 'y' },
    { type: 'black', name: 'ds4', key: 'Y' },
    { type: 'white', name: 'e4', tag: 'mi', color: 'Khaki', key: 'u' },
    { type: 'white', name: 'f4', tag: 'fa', color: 'Khaki', key: 'i' },
    { type: 'black', name: 'fs4', key: 'I' },
    { type: 'white', name: 'g4', tag: 'so', color: 'Khaki', key: 'o' },
    { type: 'black', name: 'gs4', key: 'O' },
    { type: 'white', name: 'a4', tag: 'la', color: 'Khaki', key: 'p' },
    { type: 'black', name: 'as4', key: 'P' },
    { type: 'white', name: 'b4', tag: 'si', color: 'Khaki', key: 'a' },
    { type: 'white', name: 'c5', tag: 'do', color: 'MistyRose ', key: 's' },
    { type: 'black', name: 'cs5', key: 'S' },
    { type: 'white', name: 'd5', tag: 're', color: 'MistyRose ', key: 'd' },
    { type: 'black', name: 'ds5', key: 'D' },
    { type: 'white', name: 'e5', tag: 'mi', color: 'MistyRose ', key: 'f' },
    { type: 'white', name: 'f5', tag: 'fa', color: 'MistyRose ', key: 'g' },
    { type: 'black', name: 'fs5', key: 'G' },
    { type: 'white', name: 'g5', tag: 'so', color: 'MistyRose ', key: 'h' },
    { type: 'black', name: 'gs5', key: 'H' },
    { type: 'white', name: 'a5', tag: 'la', color: 'MistyRose ', key: 'j' },
    { type: 'black', name: 'as5', key: 'J' },
    { type: 'white', name: 'b5', tag: 'si', color: 'MistyRose ', key: 'k' },
    { type: 'white', name: 'c6', tag: 'do', color: 'Lavender ', key: 'l' },
    { type: 'black', name: 'cs6', key: 'L' },
    { type: 'white', name: 'd6', tag: 're', color: 'Lavender ', key: 'z' },
    { type: 'black', name: 'ds6', key: 'Z' },
    { type: 'white', name: 'e6', tag: 'mi', color: 'Lavender ', key: 'x' },
    { type: 'white', name: 'f6', tag: 'fa', color: 'Lavender ', key: 'c' },
    { type: 'black', name: 'fs6', key: 'C' },
    { type: 'white', name: 'g6', tag: 'so', color: 'Lavender ', key: 'v' },
    { type: 'black', name: 'gs6', key: 'V' },
    { type: 'white', name: 'a6', tag: 'la', color: 'Lavender ', key: 'b' },
    { type: 'black', name: 'as6', key: 'B' },
    { type: 'white', name: 'b6', tag: 'si', color: 'Lavender ', key: 'n' },
    { type: 'white', name: 'c7', tag: 'do', color: 'Aquamarine ', key: 'm' },
  ];
  const playMusic = (src) => {
    const player = document.getElementById('music');
    player.src = `public/music/${ src }.wav.mp3`;
    player.play();
  };
  const overMusic = (src) => {
    if (window.event.buttons === 0) return;
    const player = document.getElementById('music');
    player.src = `public/music/${ src }.wav.mp3`;
    player.play();
  };
  window.addEventListener('keypress', (e) => {
    const keyDown = document.getElementById(e.key);
    if (!e.ctrlKey) {
      keyDown.style.backgroundColor = 'gainsboro';
    } else {
      keyDown.style.backgroundColor = 'rgb(95, 95, 95)';
    }
    keyDown.click();
  });
  window.addEventListener('keyup', (e) => {
    const keyUp = document.getElementById(e.key);
    console.log(e)
    if (!e.shiftKey) {
      keyUp.style = styles.white;
    } else {
      keyUp.style = styles.black;
    }
  });
  return (
    <div className={styles.container}>
      {
        keys.map((items) => {
          return (
            <div
              className={items.type === 'white' ? styles.white : styles.black}
              onClick={playMusic.bind(this, items.name)}
              onMouseOverCapture={overMusic.bind(this, items.name)}
              id={items.key}
            >
              <div className={styles.txt}>
                {items.key}
                <br />
                <div className={styles.tag} style={{ backgroundColor: items.color }}>
                  {items.tag}
                </div>
              </div>
              <audio src={`public/music/${ items.name }.wav.mp3`} id="music"> </audio>
            </div>
          );
        })
      }
    </div>
  );
}

export default Piano;
