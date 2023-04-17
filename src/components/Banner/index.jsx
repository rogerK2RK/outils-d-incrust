import digibag from "../../assets/icones/icon-digibag.svg";
import digicab from "../../assets/icones/icon-digicab-min.svg";
import charli from "../../assets/icones/icon-charli-hover-min.svg";
import bubbles from "../../assets/icones/icon-bubbles-hover-min.svg";
import styles from './styles.module.scss';
import React, { useEffect, useState } from "react";
import { getAverageTemplatesDigicab } from "../Fetch";

// const digibagVal = "DigiBag";
// const digicabVal = "DigiCab";
// const charliVal = "Charli";
// const isafeVal = "Isafe";
// const bubblesVal = "Bubbles";



function Banner() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    const callDigiCab = getAverageTemplatesDigicab().then((templates)=> {
      setTemplates(templates)
    })

    Promise.all([callDigiCab]).then(() => {
      setIsLoading(false);
    }).catch(()=>{setError("Opps! Impossible de charger les donnés")});
  }, [])


  function displayTemplatesDigiCab(){
    // temp.preventDefault();
    console.log("hello ");
  };
  console.log(templates);
  console.log(isLoading);
  if(error) return <div>{error}</div>
  return (
    <header className={styles["boxe-header"]}>
      {/* {props.templates.map((template) => {
        return(
          <button>{template}</button>
        )
      })} */}

      <button 
      className={styles["boxe-header__button"]} 
      // to="/charli"
      >
        <img alt="" src={charli} className={styles["image-support"]} />Charli
      </button>
      <button 
      className={styles["boxe-header__button"]} 
      to="/bubbles">
        <img alt="" src={bubbles} className={styles["image-support"]} />Bubbles
      </button>
      <button 
      onClick={displayTemplatesDigiCab}
      className={styles["boxe-header__button"]} 
      to="/digicab">
        <img alt="" src={digicab} className={styles["image-support"]} />Digicab
      </button>
      <button
       className={styles["boxe-header__button"]} 
       to="/isafe">
        <img alt="" src={digicab} className={styles["image-support"]}/>Isafe
      </button>
      <button 
      className={styles["boxe-header__button"]} 
      to="/digibag">
        <img alt="" src={digibag} className={styles["image-support"]} />Digibag
      </button>
    </header>
  );
}

export default Banner;