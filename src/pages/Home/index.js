import React from 'react';
import Nav from '../../components/Navigation';
import Banner from '../../components/Banner';
import styles from './styles.module.scss';
import Template from '../../components/Template';
import Derouler from '../../components/Derouler';
// import dataTemplates from '../../components/Fetch/index';


function Home(props) {
  // console.log(props);

  return (
    <div className={styles["boxe-recherche-global"]}>
      <Banner templates={props}/>
      <div className={styles["boxe-content-main"]}>
        <Nav/>
        <Template/>
        <Derouler/>
      </div>
    </div>
  );
}

export default Home ;




