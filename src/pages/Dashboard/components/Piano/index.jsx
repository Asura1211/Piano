import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Animate } from '@alifd/next';

function Piano() {
  const keys = [
    { type: 'white', name: 'c2', tag: 'do', color: '#99CC33', key: '1' },
    { type: 'black', name: 'cs2', key: '!', color: '#99CC99' },
    { type: 'white', name: 'd2', tag: 're', color: '#99CC33', key: '2' },
    { type: 'black', name: 'ds2', key: '@', color: '#99CC99' },
    { type: 'white', name: 'e2', tag: 'mi', color: '#99CC33', key: '3' },
    { type: 'white', name: 'f2', tag: 'fa', color: '#99CC33', key: '4' },
    { type: 'black', name: 'fs2', key: '$', color: '#99CC99' },
    { type: 'white', name: 'g2', tag: 'so', color: '#99CC33', key: '5' },
    { type: 'black', name: 'gs2', key: '%', color: '#99CC99' },
    { type: 'white', name: 'a2', tag: 'la', color: '#99CC33', key: '6' },
    { type: 'black', name: 'as2', key: '^', color: '#99CC99' },
    { type: 'white', name: 'b2', tag: 'si', color: '#99CC33  ', key: '7' },
    { type: 'white', name: 'c3', tag: 'do', color: '#FFCCCC', key: '8' },
    { type: 'black', name: 'cs3', key: '*', color: '#FF9999' },
    { type: 'white', name: 'd3', tag: 're', color: '#FFCCCC', key: '9' },
    { type: 'black', name: 'ds3', key: '(', color: '#FF9999' },
    { type: 'white', name: 'e3', tag: 'mi', color: '#FFCCCC', key: '0' },
    { type: 'white', name: 'f3', tag: 'fa', color: '#FFCCCC', key: 'q' },
    { type: 'black', name: 'fs3', key: 'Q', color: '#FF9999' },
    { type: 'white', name: 'g3', tag: 'so', color: '#FFCCCC', key: 'w' },
    { type: 'black', name: 'gs3', key: 'W', color: '#FF9999' },
    { type: 'white', name: 'a3', tag: 'la', color: '#FFCCCC', key: 'e' },
    { type: 'black', name: 'as3', key: 'E', color: '#FF9999' },
    { type: 'white', name: 'b3', tag: 'si', color: '#FFCCCC', key: 'r' },
    { type: 'white', name: 'c4', tag: 'do', color: '#FFFF99', key: 't' },
    { type: 'black', name: 'cs4', key: 'T', color: '#FFCC00' },
    { type: 'white', name: 'd4', tag: 're', color: '#FFFF99', key: 'y' },
    { type: 'black', name: 'ds4', key: 'Y', color: '#FFCC00' },
    { type: 'white', name: 'e4', tag: 'mi', color: '#FFFF99', key: 'u' },
    { type: 'white', name: 'f4', tag: 'fa', color: '#FFFF99', key: 'i' },
    { type: 'black', name: 'fs4', key: 'I', color: '#FFCC00' },
    { type: 'white', name: 'g4', tag: 'so', color: '#FFFF99', key: 'o' },
    { type: 'black', name: 'gs4', key: 'O', color: '#FFCC00' },
    { type: 'white', name: 'a4', tag: 'la', color: '#FFFF99', key: 'p' },
    { type: 'black', name: 'as4', key: 'P', color: '#FFCC00' },
    { type: 'white', name: 'b4', tag: 'si', color: '#FFFF99', key: 'a' },
    { type: 'white', name: 'c5', tag: 'do', color: '#CCCCFF', key: 's' },
    { type: 'black', name: 'cs5', key: 'S', color: '#9999CC' },
    { type: 'white', name: 'd5', tag: 're', color: '#CCCCFF', key: 'd' },
    { type: 'black', name: 'ds5', key: 'D', color: '#9999CC' },
    { type: 'white', name: 'e5', tag: 'mi', color: '#CCCCFF', key: 'f' },
    { type: 'white', name: 'f5', tag: 'fa', color: '#CCCCFF', key: 'g' },
    { type: 'black', name: 'fs5', key: 'G', color: '#9999CC' },
    { type: 'white', name: 'g5', tag: 'so', color: '#CCCCFF', key: 'h' },
    { type: 'black', name: 'gs5', key: 'H', color: '#9999CC' },
    { type: 'white', name: 'a5', tag: 'la', color: '#CCCCFF', key: 'j' },
    { type: 'black', name: 'as5', key: 'J', color: '#9999CC' },
    { type: 'white', name: 'b5', tag: 'si', color: '#CCCCFF', key: 'k' },
    { type: 'white', name: 'c6', tag: 'do', color: '#CCFFFF', key: 'l' },
    { type: 'black', name: 'cs6', key: 'L', color: '#99CCFF' },
    { type: 'white', name: 'd6', tag: 're', color: '#CCFFFF', key: 'z' },
    { type: 'black', name: 'ds6', key: 'Z', color: '#99CCFF' },
    { type: 'white', name: 'e6', tag: 'mi', color: '#CCFFFF', key: 'x' },
    { type: 'white', name: 'f6', tag: 'fa', color: '#CCFFFF', key: 'c' },
    { type: 'black', name: 'fs6', key: 'C', color: '#99CCFF' },
    { type: 'white', name: 'g6', tag: 'so', color: '#CCFFFF', key: 'v' },
    { type: 'black', name: 'gs6', key: 'V', color: '#99CCFF' },
    { type: 'white', name: 'a6', tag: 'la', color: '#CCFFFF', key: 'b' },
    { type: 'black', name: 'as6', key: 'B', color: '#99CCFF' },
    { type: 'white', name: 'b6', tag: 'si', color: '#CCFFFF', key: 'n' },
    { type: 'white', name: 'c7', tag: 'do', color: '#CCCCCC', key: 'm' },
  ];
  const [keyHistory, setKeyHistory] = useState([]);
  /* 鼠标点击琴键 */
  const playMusic = (src, key) => {
    const player = document.getElementById('music');
    player.src = `/music/${ src }.wav.mp3`;
    player.play();
    setKeyHistory([...keyHistory, key]);
    const id = `id${key}`;
    const wave = document.getElementById(id);
    const add = setInterval(() => {
      wave.style.height = `${wave.offsetHeight + 5 }px`;
      if (wave.offsetHeight >= 60) {
        clearInterval(add);
        const add2 = setInterval(() => {
          wave.style.height = `${wave.offsetHeight - 5 }px`;
          if (wave.offsetHeight <= 5) {
            clearInterval(add2);
          }
        });
      }
    }, 10);
  };
  /* 鼠标按下划过琴键 */
  const overMusic = (src, key) => {
    if (window.event.buttons === 0) return;
    const player = document.getElementById('music');
    player.src = `/music/${ src }.wav.mp3`;
    player.play();
    setKeyHistory([...keyHistory, key]);
    const id = `id${key}`;
    const wave = document.getElementById(id);
    const add = setInterval(() => {
      wave.style.height = `${wave.offsetHeight + 5 }px`;
      if (wave.offsetHeight >= 60) {
        clearInterval(add);
        const add2 = setInterval(() => {
          wave.style.height = `${wave.offsetHeight - 5 }px`;
          if (wave.offsetHeight <= 5) {
            clearInterval(add2);
          }
        });
      }
    }, 10);
  };
  /* 键盘操作琴键 */
  useEffect(() => {
    addEventListener('keydown', (e) => {
      const keyDown = document.getElementById(e.key);
      if (!e.ctrlKey) {
        keyDown.style.backgroundColor = 'gainsboro';
      } else {
        keyDown.style.backgroundColor = 'rgb(95, 95, 95)';
      }
      keyDown.click();
    });
    addEventListener('keyup', (e) => {
      const keyUp = document.getElementById(e.key);
      if (!e.shiftKey) {
        keyUp.style = styles.white;
      } else {
        keyUp.style = styles.black;
      }
    });
  }, 0);
  /* 播放当前音乐 */
  const currentPlay = () => {
    let i = 0;
    const history = keyHistory;
    setKeyHistory([]);
    const timer = setInterval(() => {
      const keyDown = document.getElementById(history[i]);
      if (i < history.length) {
        if (/\d|[a-z]/.test(history[i])) {
          keyDown.style.backgroundColor = 'gainsboro';
          setTimeout(() => {
            keyDown.style = styles.white;
          }, 200);
        } else {
          keyDown.style.backgroundColor = 'rgb(95, 95, 95)';
          setTimeout(() => {
            keyDown.style = styles.black;
          }, 200);
        }
        keyDown.click();
        i++;
      } else {
        clearInterval(timer);
      }
    }, 300);
  };
  /* 删除当前音乐 */
  const currentDelete = () => {
    setKeyHistory([]);
  };
  /* 播放输入框中的音乐 */
  const inputPlay = () => {
    let i = 0;
    const history = document.getElementById('input').value;
    setKeyHistory([]);
    const timer = setInterval(() => {
      const keyDown = document.getElementById(history[i]);
      if (i < history.length) {
        if (/\d|[a-z]/.test(history[i])) {
          keyDown.style.backgroundColor = 'gainsboro';
          setTimeout(() => {
            keyDown.style = styles.white;
          }, 200);
        } else {
          keyDown.style.backgroundColor = 'rgb(95, 95, 95)';
          setTimeout(() => {
            keyDown.style = styles.black;
          }, 200);
        }
        keyDown.click();
        i++;
      } else {
        clearInterval(timer);
      }
    }, 300);
  };
  // const currentKey = document.getElementById('currentKey');
  // useEffect(() => {
  //   if (currentKey) {
  //     currentKey.style.opacity = '1';
  //     setTimeout(() => {
  //       currentKey.style.opacity = '1';
  //       console.log(currentKey.style.opacity)
  //     }, 200)
  //   }
  // }, keyHistory[keyHistory.length - 1])
  return (
    <div >
      <div className={styles.container}>
        {
        keys.map((items) => {
          return (
            <div
              className={items.type === 'white' ? styles.white : styles.black}
              onClick={playMusic.bind(this, items.name, items.key)}
              onMouseOverCapture={overMusic.bind(this, items.name, items.key)}
              id={items.key}
            >
              <div className={styles.txt}>
                {items.key}
                <br />
                <div className={styles.tag} style={{ backgroundColor: items.color }}>
                  {items.tag}
                </div>
              </div>
              <audio src={`/music/${ items.name }.wav.mp3`} id="music"> </audio>
            </div>
          );
        })
      }
      </div>
      <Animate animation={{
        enter: 'my-zoom-in',
        leave: 'my-zoom-out',
      }}
      >
        <div className={styles.currentKey} id="currentKey">{keyHistory[keyHistory.length - 1]}</div>
      </Animate>
      <div className={styles.current}>{keyHistory}</div>
      <button className={styles.play} onClick={currentPlay}>播放当前音乐</button>
      <button className={styles.delete} onClick={currentDelete}>清空当前音乐</button>
      <br />
      <input className={styles.input} id="input" placeholder="请将要播放的音乐粘贴到此处" />
      <button className={styles.playInput} onClick={inputPlay}>播放输入的音乐</button>
      <div className={styles.musicWave}>
        {
          keys.map((items) => {
            return (
              <div className={styles.block}>
                <div className={styles.waveBlock} id={`id${items.key}`} style={{ backgroundColor: items.color }}> </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Piano;
