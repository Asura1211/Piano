import React from 'react';
import styles from './index.module.scss';
import store from '../../../../store';

function MusicWave() {
  /* 琴键 */
  const [data] = store.useModel('keys');
  const { keys } = data;
  return (
    <div className={styles.musicWave} >
      {
          keys.map((items) => {
            return (
              <div className={styles.block} key={items.key}>
                <div className={styles.waveBlock} id={`id${items.key}`} style={{ backgroundColor: items.color }}> </div>
              </div>
            );
          })
        }
    </div>
  );
}

export default MusicWave;
