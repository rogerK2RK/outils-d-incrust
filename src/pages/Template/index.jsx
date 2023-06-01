import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from './styles.module.scss';

function Template(props) {
  //Etats
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedNumberOfPeople, setSelectedNumberOfPeople] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedAge, setSelectedAge] = useState(null);
  // const [searchId, setSearchId] = useState("");


  //Event Click
  const handleCarClick = (car) => {
    setSelectedCar(car === selectedCar ? null : car);
  };

  const handleCityClick = (city) => {
    setSelectedCity(city === selectedCity ? null : city);
  };
  const handleNumberOfPeopleClick = (number) => {
    setSelectedNumberOfPeople(number === selectedNumberOfPeople ? null : number);
  };
  
  const handleGenderClick = (gender) => {
    setSelectedGender(gender === selectedGender ? null : gender);
  };
  
  const handleAgeClick = (age) => {
    setSelectedAge(age === selectedAge ? null : age);
  };

  

  //doublon delet
  const cars = props.templates.map(template => template.properties.car.brand);
  const uniqueCars = [...new Set(cars)];

  const cities = props.templates.map(template => template.properties.shooting.city);
  const uniqueCities = [...new Set(cities)];

  const numberOfPeople = Array.from(
    new Set(props.templates.map((template) => template.properties.people.totalNumberOfPeople))
  );
  
  const genders = Array.from(
    new Set(
      props.templates.flatMap((template) =>
        Object.values(template.properties.people.model).map((model) => model.attributes.gender)
      )
    )
  );
  
  const ages = Array.from(
    new Set(
      props.templates.flatMap((template) =>
        Object.values(template.properties.people.model).map((model) => model.attributes.age)
      )
    )
  );

  let filteredTemplates = props.templates;

  if (selectedCar) {
    filteredTemplates = filteredTemplates.filter(template => template.properties.car.brand === selectedCar);
  }

  if (selectedCity) {
    filteredTemplates = filteredTemplates.filter(template => template.properties.shooting.city === selectedCity);
  }

  if (selectedNumberOfPeople) {
    filteredTemplates = filteredTemplates.filter(template => template.properties.people.totalNumberOfPeople === selectedNumberOfPeople);
  }

  if (selectedGender) {
    filteredTemplates = filteredTemplates.filter((template) =>
      Object.values(template.properties.people.model).some((model) => model.attributes.gender === selectedGender)
    );
  }
  
  if (selectedAge) {
    filteredTemplates = filteredTemplates.filter((template) =>
      Object.values(template.properties.people.model).some((model) => model.attributes.age === selectedAge)
    );
  }


  return (
    <div className={styles["box-parent"]}>
      <nav className={styles["boxe-navigation"]}>
        <h4>Car :</h4>
        <div className={styles["bx-fltr-tbn"]}>
          {uniqueCars.map((car) => (
            <button
              key={car}
              onClick={() => handleCarClick(car)}
              className={selectedCar === car ? styles["active"] : ""}
            >
              {car} {selectedCar === car && <span className={styles["close-icon"]}>&times;</span>}
            </button>
          ))}
        </div>
        <h4>City :</h4>
        <div className={styles["bx-fltr-tbn"]}>
          {uniqueCities.map((city) => (
            <button
              key={city}
              onClick={() => handleCityClick(city)}
              className={selectedCity === city ? styles["active"] : ""}
            >
              {city} {selectedCity === city && <span className={styles["close-icon"]}>&times;</span>}
            </button>
          ))}
        </div>
        
        <h4>People :</h4>
        <div className={styles["bx-fltr-tbn"]}>
          {numberOfPeople.map((number) => (
              <button
                key={number}
                onClick={() => handleNumberOfPeopleClick(number)}
                className={selectedNumberOfPeople === number ? styles["active"] : ""}
              >
                {number} {selectedNumberOfPeople === number && <span className={styles["close-icon"]}>&times;</span>}
              </button>
          ))}
        </div>
          
        <h4>Gender :</h4>
        <div className={styles["bx-fltr-tbn"]}>
          {genders.map((gender) => (
            <button
              key={gender}
              onClick={() => handleGenderClick(gender)}
              className={selectedGender === gender ? styles["active"] : ""}
            >
              {gender} {selectedGender === gender && <span className={styles["close-icon"]}>&times;</span>}
            </button>
          ))}
        </div>
          
        <h4>Age :</h4>
        <div className={styles["bx-fltr-tbn"]}>
          {ages.map((age) => (
            <button
              key={age}
              onClick={() => handleAgeClick(age)}
              className={selectedAge === age ? styles["active"] : ""}
            >
              {age} {selectedAge === age && <span className={styles["close-icon"]}>&times;</span>}
            </button>
          ))}
        </div>
          
      </nav>
      <section className={styles["boxe-globale"]}>
        <div className={styles["box-recherche-template"]}>
          <label className={styles["box-recherche-template__label"]} htmlFor="rechercheId">
            Numéro de template :
          </label>
          <input
            className={styles["box-recherche-template__input"]}
            type="text"
            name=""
            id="rechercheId"
          />
        </div>
        <div id={styles["tags-box-glb"]}>
          {selectedCar && (
            <div className={styles["tag-car"]}>
              {selectedCar}
              <span className={styles["close-icon"]} onClick={() => handleCarClick(selectedCar)}>
                &times;
              </span>
            </div>
          )}
          {selectedCity && (
            <div className={styles["tag-city"]}>
              {selectedCity}
              <span className={styles["close-icon"]} onClick={() => handleCityClick(selectedCity)}>
                &times;
              </span>
            </div>
          )}
          {selectedNumberOfPeople && (
            <div className={styles["tag-city"]}>
              {selectedNumberOfPeople}
              <span className={styles["close-icon"]} onClick={() => handleNumberOfPeopleClick(selectedNumberOfPeople)}>
                &times;
              </span>
            </div>
          )}
          {selectedGender && (
            <div className={styles["tag-city"]}>
              {selectedGender}
              <span className={styles["close-icon"]} onClick={() => handleGenderClick(selectedGender)}>
                &times;
              </span>
            </div>
          )}
          {selectedAge && (
            <div className={styles["tag-city"]}>
              {selectedAge}
              <span className={styles["close-icon"]} onClick={() => handleAgeClick(selectedAge)}>
                &times;
              </span>
            </div>
          )}
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
