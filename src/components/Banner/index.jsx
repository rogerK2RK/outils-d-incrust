import digibag from "../../assets/icones/icon-digibag.svg";
import digicab from "../../assets/icones/icon-digicab-min.svg";
import charli from "../../assets/icones/icon-charli-hover-min.svg";
import bubbles from "../../assets/icones/icon-bubbles-hover-min.svg";
import styles from './styles.module.scss';
import React from "react";

const digibagVal = "DigiBag";
const digicabVal = "DigiCab";
const charliVal = "Charli";
const isafeVal = "Charli";
const bubblesVal = "Bubbles";

function displayTemplates(temp){
  console.log("hello"+ temp);
}

function Banner(props) {
  console.log(props.templates);


  return (
    <header className={styles["boxe-header"]}>
      {/* {props.templates.map((template) => {
        return(
          <button>{template}</button>
        )
      })} */}

      <button onClick={displayTemplates(charliVal)} className={styles["boxe-header__button"]} to="/charli"><img alt="" src={charli} className={styles["image-support"]} />Charli</button>
      <button onClick={displayTemplates(bubblesVal)} className={styles["boxe-header__button"]} to="/bubbles"><img alt="" src={bubbles} className={styles["image-support"]} />Bubbles</button>
      <button onClick={displayTemplates(digicabVal)} className={styles["boxe-header__button"]} to="/digicab"><img alt="" src={digicab} className={styles["image-support"]} />Digicab</button>
      <button onClick={displayTemplates(isafeVal)} className={styles["boxe-header__button"]} to="/isafe"><img alt="" src={digicab} className={styles["image-support"]}/>Isafe</button>
      <button onClick={displayTemplates(digibagVal)} className={styles["boxe-header__button"]} to="/digibag"><img alt="" src={digibag} className={styles["image-support"]} />Digibag</button>
    </header>
  );
}

export default Banner;