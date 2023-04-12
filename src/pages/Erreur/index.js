import React from 'react';
import styles from './styles.module.scss';
// import '../../components/galaxie/index.js'


function Error() {
  
  return (
    <div className={styles["bkgrd-clr"]}>
      {/* <canvas id='galaxie'></canvas> */}
        <div className={styles["bkgrd-content"]}>
            <p className={styles["error"]}>E<span>r</span>ror</p>
            <p className={styles["code"]}>4<span>0</span><span>4</span></p>
        </div>
    </div>
  );
}

export default Error ;




