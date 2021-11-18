import React, { useEffect } from 'react';
import styles from './index.module.scss';
import store from '../../../../store';

function Piano() {
  /* 琴键 */
  const [data] = store.useModel('keys');
  const { keys } = data;
  /* 按键历史 */
  const [historyData, dispatchers] = store.useModel('keyHistory');
  const { keyHistory } = historyData;
  const { setKeyHistory } = dispatchers;
  /* 鼠标点击琴键 */
  const playMusic = (src, key) => {
    const player = document.getElementById('music');
    player.src = `./music/${ src }.wav.mp3`;
    player.play();
    popNote();
    setKeyHistory([...keyHistory, key]);
    const id = `id${key}`;
    const wave = document.getElementById(id);
    const add = setInterval(() => {
      wave.style.height = `${wave.offsetHeight + 10 }px`;
      if (wave.offsetHeight >= 150) {
        clearInterval(add);
        const add2 = setInterval(() => {
          wave.style.height = `${wave.offsetHeight - 2 }px`;
          if (wave.offsetHeight <= 5) {
            wave.style.height = `${5}+px`;
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
    player.src = `./music/${ src }.wav.mp3`;
    player.play();
    popNote();
    setKeyHistory([...keyHistory, key]);
    const id = `id${key}`;
    const wave = document.getElementById(id);
    const add = setInterval(() => {
      wave.style.height = `${wave.offsetHeight + 10 }px`;
      if (wave.offsetHeight >= 150) {
        clearInterval(add);
        const add2 = setInterval(() => {
          wave.style.height = `${wave.offsetHeight - 2 }px`;
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
  }, []);
  /* 出现音符 */
  const popNote = () => {
    const imgObj = document.createElement('img');
    imgObj.setAttribute('src', './img/note.svg');
    const width = Math.random() * 50 + 20;
    imgObj.setAttribute('width', width);
    const opacity = Math.random();
    imgObj.setAttribute('opacity', opacity);
    const { offsetWidth } = document.body;
    const { offsetHeight } = document.body;
    const x = Math.random() * 200 + 0.6 * offsetWidth;
    const y = Math.random() * 200 + 0.5 * offsetHeight;
    imgObj.setAttribute('style', `position:absolute; left:${ x }px; top:${ y }px;`);
    document.body.append(imgObj);
    upNote(imgObj);
  };/*  */
  /* 音符上升 */
  const upNote = (Obj) => {
    let speed = 0;
    const timer = setInterval(() => {
      if (Obj.offsetTop - speed >= 0) {
        Obj.style.top = `${Obj.offsetTop - speed }px`;
        Obj.style.left = `${Obj.offsetLeft - speed * Math.random() }px`;
        speed += 0.05;
      } else {
        document.body.removeChild(Obj);
        clearInterval(timer);
      }
    }, 10);
  };
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
              key={items.key}
            >
              <div className={styles.txt}>
                {items.key}
                <br />
                <div className={styles.tag} style={{ backgroundColor: items.color }}>
                  {items.tag}
                </div>
              </div>
              <audio src={`./music/${ items.name }.wav.mp3`} id="music"> </audio>
            </div>
          );
        })
      }
      </div>
    </div>
  );
}

export default Piano;
