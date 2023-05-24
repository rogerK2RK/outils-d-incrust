import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from './styles.module.scss';

function Template(props) {
  const [selectedCar, setSelectedCar] = useState(null);
  // const [selectedExport, setSelectedExport] = useState(null);

  // Récupérer la liste des marques de voiture sans doublons
  const cars = props.templates.map(template => template.properties.car.brand);
  const carSansDoublons = [...new Set(cars)];

  // const Export = props.templates.map(template => template.properties.export.availableSizes);
  // const exportSansDoublons = [...new Set(Export)];

  // Gestionnaire d'événements pour la sélection de la voiture
  const handleCarClick = (car) => {
    setSelectedCar(car);
  };

  // const handleExportClick = (Export) => {
  //   setSelectedExport(Export);
  // };

  // Filtrer les templates en fonction de la voiture sélectionnée
  const filteredTemplates = selectedCar ?
    props.templates.filter(template => template.properties.car.brand === selectedCar) :
    props.templates ;

  
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
          <label className={styles["box-recherche-template__label"]} htmlFor="">
            Numéro de template :
          </label>
          <input className={styles["box-recherche-template__input"]} type="text" name="" id="rechercheId" />
        </div>
        <div className={styles["boxe-template-globale"]}>
          {filteredTemplates.map((template) => (
            <Link 
            to={`/template/${template.id}`} 
            key={template.id} 
            className={styles["box-template"]}
            >
              <img src={template.attributes.posterUrl} alt="" className={styles["box-template__image"]} />
              {template.attributes.isNew ? (
                <span className={styles["box-template__tag-news"]}>News</span>
              ) : (
                <span></span>
              )}
              <div className={styles["box-template__contente"]}>
                <h4 className={styles["box-template__contente__title-id"]}>{template.id}</h4>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Template;