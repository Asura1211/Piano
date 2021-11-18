import React from 'react';
import styles from './index.module.scss';
import store from '../../../../store';

function MusicDisplay() {
  /* 按键历史 */
  const [historyData, dispatchers] = store.useModel('keyHistory');
  const { keyHistory } = historyData;
  const { setKeyHistory } = dispatchers;
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
    }, 500);
  };
  /* 删除当前音乐 */
  const currentDelete = () => {
    setKeyHistory([]);
  };
  return (
    <div className={styles.left}>
      <div className={styles.currentKey} id="currentKey">{keyHistory[keyHistory.length - 1]}</div>
      <div className={styles.current}>{keyHistory.length < 20 ? keyHistory : keyHistory.slice(keyHistory.length - 20)}</div>
      <button className={styles.play} onClick={currentPlay}>播放当前音乐</button>
      <button className={styles.delete} onClick={currentDelete}>清空当前音乐</button>
    </div>
  );
}

export default MusicDisplay;
