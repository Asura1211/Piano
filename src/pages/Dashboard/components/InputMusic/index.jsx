import React from 'react';
import styles from './index.module.scss';
import store from '../../../../store';

function InputMusic() {
  /* 按键历史 */
  const [historyData, dispatchers] = store.useModel('keyHistory');
  const { setKeyHistory } = dispatchers;
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
    }, 500);
  };
  return (
    <div className={styles.right}>
      <div className={styles.input}>
        <input id="input" placeholder="请将要播放的音乐粘贴到此处" />
      </div>
      <button onClick={inputPlay}>播放输入的音乐</button>
    </div>
  );
}

export default InputMusic;