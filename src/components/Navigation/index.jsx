// import logo from "../../assets/LOGO_DOOHIT_NOIR-min.svg"
import styles from './styles.module.scss';
import React from "react"
// import { Link } from "react-router-dom"

function Nav() {
  return (
      <nav className={styles["boxe-navigation"]}>
        <div className={styles["boxe-input-name-incrust"]}>
          <label htmlFor="" className={styles["boxe-input-name-incrust__label"]}>Nom du l'incrust :</label>
          <input type="text" className={styles["boxe-input-name-incrust__input"]} placeholder="ex : Warner music " />
        </div>
        <div className={styles["boxe-video-link"]}>
          <label htmlFor="" className={styles["boxe-video-link__label"]}>Lien de la vidéo :</label>
          <input  type="text" className={styles["boxe-video-link__input"]} placeholder="ex : Warner music " />
          <input  type="file" className={styles["boxe-video-link__input"]} placeholder="ex : Warner music " />
        </div>
        <div className={styles["boxe-export"]}>
          <label htmlFor="" className={styles["boxe-export__label"]}>Sélectionnez votre taille d'export :</label>
          <div className={styles["boxe-export__box-content"]}>
            <button className={styles["boxe-export__box-content__bouton"]}>1080x1080</button>
            <button className={styles["boxe-export__box-content__bouton"]}>1920x1080</button>
            <button className={styles["boxe-export__box-content__bouton"]}>Rect</button>
          </div>
        </div>
        <div className={styles["box-duree"]}>
          <label className={styles["box-duree__label"]} htmlFor="duration">Durée de l'export :</label>
          <select name="duration" className={styles["box-duree__select"]} id="videoDuration">
            <option className={styles["box-duree__select__option"]} value="10">10 sec</option>
            <option className={styles["box-duree__select__option"]} value="15">15 sec</option>
            <option className={styles["box-duree__select__option"]} value="20">20 sec</option>
            <option className={styles["box-duree__select__option"]} value="30">30 sec</option>
            <option className={styles["box-duree__select__option"]} value="0.04">Image fixe</option>
          </select>
        </div>

        <button id="sendRenderButton" type="submit" className={styles["btn-submit"]}>Dooh it !</button>

        <div>
             <form /*action="index.php" method="get"*/>
               <input type="hidden" name="resetSources" value="true"/>
               <button type="submit" className={styles["btn-danger"]}>⟲ Reset</button>
             </form>
           </div>
      </nav>
  )
}

export default Nav