import React, { useState } from 'react';
import styles from './index.module.scss';
import store from '../../../../store';

function Notation() {
    const [isShow, setIsShow] = useState(false);
    let [picIndex, setPicIndex] = useState(0);
    const picList = ['../../../../../public/img/littleStar.png', '../../../../../public/img/twoTigers.png'];
    
    const showNotation = () => {
        isShow ? setIsShow(false) : setIsShow(true);
    }
    const showNext = () => {
        setPicIndex(++picIndex)
        console.log(picIndex);
    }
    const showPrev = () => {
        setPicIndex(--picIndex)
        console.log(picIndex);
    }
    return (
        <div className={styles.right}>
            {isShow &&
                <div className={styles.imageDiv} >
                {picIndex >= 1 && <img src="../../../../../public/img/left.png" className={styles.toLeft} onClick={showPrev} />}
                <img src={picList[picIndex]} className={styles.image} key={picIndex} ></img>
                {/* {picList.map((item,index) => (<img src={item} className={styles.image} key={index} ></img>))} */}
                {picIndex <= 0 && <img src="../../../../../public/img/right.png" className={styles.toRight} onClick={showNext} />}
            </div>
            }
            <button onClick={showNotation} style={{
                position: "absolute",
                right:"200px",
                bottom: "170px"
            }}>查看简谱</button>
        </div>
    );
}
  
export default Notation;