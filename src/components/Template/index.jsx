// import logo from "../../assets/LOGO_DOOHIT_NOIR-min.svg"
import styles from './styles.module.scss';
import React, {useState} from "react"
import { Link } from "react-router-dom"

function Template(props) {
  const [selectedCar, setSelectedCar] = useState(null);

  const cars = [];
  props.templates.map((template) => {
    cars.push(template.properties.car.brand);
  })

  const carSansDoublons = [...new Set(cars)];

  const handleCarClick = (car) => {
    setSelectedCar(car);
  };

  // Filtrer les templates en fonction de la voiture sélectionnée
  const filteredTemplates = selectedCar ?
    props.templates.filter(template => template.properties.car.brand === selectedCar) :
    props.templates;
  
  console.log(carSansDoublons);
  console.log(props.templates);
  return (
    <div className={styles["box-parent"]}>
      <nav className={styles["boxe-navigation"]}>
        <h4>Car :</h4>
        {carSansDoublons.map((car) => (
          <button key={car} onClick={() => handleCarClick(car)}>
            {car}
          </button>
        ))}
        <h4>Export :</h4>
        <h4>People :</h4>
        <h4>Shooting :</h4>
      </nav>
      <section className={styles["boxe-globale"]}>
        <div className={styles["box-recherche-template"]}>
          <label className={styles["box-recherche-template__label"]} htmlFor="">Numéro de template : </label>
          <input className={styles["box-recherche-template__input"]} type="text" name="" id="rechercheId" />
        </div>
        <div className={styles["boxe-template-globale"]}>
          {/* {props.templates.map((template) => { */}
          {filteredTemplates.map((template) => {
            console.log(template);
            return(
              <Link to={`/onTemp/${template.id}`} key={template.id} className={styles["box-template"]}>
                <img src={template.attributes.posterUrl} alt="" className={styles["box-template__image"]} />
                { template.attributes.isNew ? <span className={styles["box-template__tag-news"]}>News</span> : <span></span>}
                <div className={styles["box-template__contente"]}>
                  <h4 className={styles["box-template__contente__title-id"]}>{template.id}</h4>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Template