import React, { useState }  from 'react';
// import Nav from '../../components/Navigation';
import styles from './styles.module.scss';
import Template from '../Template/index';
// import Derouler from '../../components/Derouler';
import digibag from "../../assets/icones/icon-digibag.svg";
import digicab from "../../assets/icones/icon-digicab-min.svg";
import charli from "../../assets/icones/icon-charli-hover-min.svg";
import bubbles from "../../assets/icones/icon-bubbles-hover-min.svg";
import { getAverageTemplatesDigicab } from "../../components/Fetch";



function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [templates, setTemplates] = useState([]);

  function displayTemplatesDigiCab() {
    setIsLoading(true);

    getAverageTemplatesDigicab().then((templates)=> {
      setTemplates(templates)
      setIsLoading(false);
    }).catch(()=>{setError("Opps! Impossible de charger les donnés")});
    // console.log("hello ");
  };

  // console.log(templates);
  // console.log(isLoading);
  if(error) return <div>{error}</div>
  return (
    <div className={styles["boxe-recherche-global"]}>
      {/* <Banner templates={props}/> */}
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
      <div className={styles["boxe-content-main"]}>
        {/* <Nav/> */}
        {isLoading ? <div>Loading...</div> : <Template templates={templates} />}
        {/* <Derouler/> */}
      </div>
    </div>
  );
}

export default Home ;




