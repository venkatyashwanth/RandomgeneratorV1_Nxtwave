import React, { useState } from 'react';
import styles from './RandomGen.module.scss';

function RandomGen() {
    const [randVal,setRandVal] = useState(0);
    const handleRandom = () => {
        const randomNumber = Math.floor(Math.random()*101);
        setRandVal(randomNumber);
    }
    return (
        <div className={`${styles.appBg}`}>
            <div className={`${styles.appContent}`}>
                <h1>Random Number</h1>
                <p>
                    Generate a random number in the range of 0 to 100
                </p>
                <button className={`${styles.btnElement}`} onClick={handleRandom}>Generate</button>
                <span className={`${styles.randomValue}`}>
                    {randVal}
                </span>
            </div>
        </div>
    )
}

export default RandomGen