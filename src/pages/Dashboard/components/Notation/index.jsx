import React, { useState } from 'react';
import styles from './index.module.scss';
import store from '../../../../store';

function Notation() {
    /* 简谱 */
    const [isShow, setIsShow] = useState(false);
    let [picIndex, setPicIndex] = useState(0);
    const picList = ['./img/littleStar.png', './img/twoTigers.png'];
    /* 切换简谱状态 */
    const showNotation = () => {
        isShow ? setIsShow(false) : setIsShow(true);
    }
    const showNext = () => {
        setPicIndex(++picIndex)
    }
    const showPrev = () => {
        setPicIndex(--picIndex)
    }
    return (
        <div className={styles.right}>
            {isShow &&
            <div className={styles.imageDiv} >
                {picIndex >= 1 && <img src="./img/left.png" className={styles.toLeft} onClick={showPrev} />}
                <img src={picList[picIndex]} className={styles.image} key={picIndex} ></img>
                {picIndex <= 0 && <img src="./img/right.png" className={styles.toRight} onClick={showNext} />}
            </div>
            }
            <button onClick={showNotation} style={{
                position: "absolute",
                right:"12rem",
                bottom: "12rem"
            }}>查看简谱</button>
        </div>
    );
}
  
export default Notation;