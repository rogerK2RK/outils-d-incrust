import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from './styles.module.scss';

function Template(props) {
  //Etats
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedCarCategory, setSelectedCarCategory] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedNumberOfPeople, setSelectedNumberOfPeople] = useState(null);
      //Export
  const [selectedAvailableSizes, setSelectedAvailableSizes] = useState(null);
  
      //Driver
  const [selectedGenderDriver, setSelectedGenderDriver] = useState(null);
  const [selectedDriverVisible, setSelectedDriverVisible] = useState(false);
  const [selectedDriving, setSelectedDriving] = useState(false);

      //Model
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedAge, setSelectedAge] = useState(null);
  const [selectedAction, setSelectedAction] = useState(null);
  const [clickedTemplates, setClickedTemplates] = useState([]);
  const [selectedHavePhone, setSelectedHavePhone] = useState(false);

  // const [searchId, setSearchId] = useState("");


  //Event Click
  const handleCarClick = (car) => {
    setSelectedCar(car === selectedCar ? null : car);
  };

  const handleCarCategoryClick = (carCategory) => {
    setSelectedCarCategory(carCategory === selectedCarCategory ? null : carCategory);
  };

  const handleCityClick = (city) => {
    setSelectedCity(city === selectedCity ? null : city);
  };

      //Export
  const handleAvailableSizesClick = (availableSizes) => {
    setSelectedAvailableSizes(availableSizes === selectedAvailableSizes ? null : availableSizes);
  };

      //Driver
  const handleGenderDriverClick = (genderDriver) => {
    setSelectedGenderDriver(genderDriver === selectedGenderDriver ? null : genderDriver);
  };

  const handleDriverVisibleClick = () => {
    setSelectedDriverVisible(!selectedDriverVisible);
  };

  const handleDrivingClick = () => {
    setSelectedDriving(!selectedDriving);
  };


      //Model
  const handleNumberOfPeopleClick = (number) => {
    setSelectedNumberOfPeople(number === selectedNumberOfPeople ? null : number);
  };
  
  const handleGenderClick = (gender) => {
    setSelectedGender(gender === selectedGender ? null : gender);
  };

  const handleAgeClick = (age) => {
    setSelectedAge(age === selectedAge ? null : age);
  };

  const handleActionPhoneClick = (action) => {
    setSelectedAction(action === selectedAction ? null : action);
  };
  
  const handleHavePhoneClick = () => {
    setSelectedHavePhone(!selectedHavePhone);
  };

  

  
  const handleTemplateClick = (template) => {
    console.log(template);
    if (clickedTemplates.includes(template)) {
      setClickedTemplates(clickedTemplates.filter((id) => id !== template));
    } else {
      setClickedTemplates([...clickedTemplates, template]);
    }
  };
  

  //doublon delet
  const cars = props.templates.map(template => template.properties.car.brand);
  const uniqueCars = [...new Set(cars)];

  const carsCategory = props.templates.map(template => template.properties.car.category);
  const uniqueCarsCategory = [...new Set(carsCategory)];

  const cities = props.templates.map(template => template.properties.shooting.city);
  const uniqueCities = [...new Set(cities)];

      //Export
  const availableSizes = Array.from(
    new Set(
      props.templates.flatMap((template) =>
        Object.values(template.properties.export.availableSizes).map((availableSizes) => availableSizes.text)
      )
    )
  );
      //Driver
  const gendersDriver = props.templates.map(template => template.properties.people.driver.attributes.gender);
  const uniqueGendersDriver = [...new Set(gendersDriver)];

  const driverVisible =   props.templates.flatMap((template) => template.properties.people.driver.isDriverVisible);
  const uniqueDriverVisible = [...new Set(driverVisible)];

  const driving =   props.templates.flatMap((template) => template.properties.people.driver.isDriving);
  const uniqueDriving = [...new Set(driving)];

      // Model
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

  const actions = Array.from(
    new Set(
      props.templates.flatMap((template) =>
        Object.values(template.properties.people.model).map((model) => model.phone.action)
      )
    )
  );

  const havePhone = Array.from(
    new Set(
      props.templates.flatMap((template) =>
        Object.values(template.properties.people.model).map((model) => model.phone.havePhone)
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

  if (selectedCarCategory) {
    filteredTemplates = filteredTemplates.filter(template => template.properties.car.category === selectedCarCategory);
  }

      //Export
  if (selectedAvailableSizes) {
    filteredTemplates = filteredTemplates.filter((template) =>
      Object.values(template.properties.export.availableSizes).some((availableSizes) => availableSizes.text === selectedAvailableSizes)
    );
  }

      //Driver
  if (selectedGenderDriver) {
    filteredTemplates = filteredTemplates.filter(template => template.properties.people.driver.attributes.gender === selectedGenderDriver);
  }

  if (selectedDriverVisible) {
    filteredTemplates = filteredTemplates.filter(template => template.properties.people.driver.isDriverVisible === selectedDriverVisible);
  }

  if (selectedDriving) {
    filteredTemplates = filteredTemplates.filter(template => template.properties.people.driver.isDriving === selectedDriving);
  }
  
      //Model
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

  if (selectedAction) {
    filteredTemplates = filteredTemplates.filter((template) =>
      Object.values(template.properties.people.model).some((model) => model.phone.action === selectedAction)
    );
  }

  if (selectedHavePhone) {
    filteredTemplates = filteredTemplates.filter((template) =>
      Object.values(template.properties.people.model).some(
        (model) =>
          model.phone.havePhone === selectedHavePhone
      )
    );
  }
  


  const nextPagePath = clickedTemplates.length > 0 ? `/template/${clickedTemplates}` : "";



  return (
    <div className={styles["box-parent"]}>
      <nav className={styles["boxe-navigation"]}>
        <h4>City :</h4>
        <div className={styles["bx-fltr-tbn"]}>
          {uniqueCities.map((city, index) => (
            <button
              key={index}
              onClick={() => handleCityClick(city)}
              className={selectedCity === city ? styles["active"] : ""}
            >
              {city} {selectedCity === city && <span className={styles["close-icon"]}>&times;</span>}
            </button>
          ))}
        </div>
        <h3>Export</h3>
        <h5>Available Sizes :</h5>
        <div className={styles["bx-fltr-tbn"]}>
          {availableSizes.map((sizes, index) => (
            <button
              key={index}
              onClick={() => handleAvailableSizesClick(sizes)}
              className={selectedAvailableSizes === sizes ? styles["active"] : ""}
            >
              {sizes} {selectedAvailableSizes === sizes && <span className={styles["close-icon"]}>&times;</span>}
            </button>
          ))}
        </div>

        <h3>Car</h3>
        <h5>Brand :</h5>
        <div className={styles["bx-fltr-tbn"]}>
          {uniqueCars.map((car, index) => (
            <button
              key={index}
              onClick={() => handleCarClick(car)}
              className={selectedCar === car ? styles["active"] : ""}
            >
              {car} {selectedCar === car && <span className={styles["close-icon"]}>&times;</span>}
            </button>
          ))}
        </div>
        <h5>Category :</h5>
        <div className={styles["bx-fltr-tbn"]}>
          {uniqueCarsCategory.map((car, index) => (
            <button
              key={index}
              onClick={() => handleCarCategoryClick(car)}
              className={selectedCarCategory === car ? styles["active"] : ""}
            >
              {car} {selectedCarCategory === car && <span className={styles["close-icon"]}>&times;</span>}
            </button>
          ))}
        </div>
        <h3>Driver</h3>
        <h5>Gender :</h5>
        <div className={styles["bx-fltr-tbn"]}>
          {uniqueGendersDriver.map((genderDriver, index) => (
            <button
              key={index}
              onClick={() => handleGenderDriverClick(genderDriver)}
              className={selectedGenderDriver === genderDriver ? styles["active"] : ""}
            >
              {genderDriver} {selectedGenderDriver === genderDriver && <span className={styles["close-icon"]}>&times;</span>}
            </button>
          ))}
        </div>
        
        <h5>Filter :</h5>
        <div className={styles["bx-fltr-tbn"]}>
          <label>
            <input
              type="checkbox"
              checked={selectedDriverVisible}
              onChange={handleDriverVisibleClick}
            />
            Driver Visible
          </label>
        </div>
        <div className={styles["bx-fltr-tbn"]}>
          <label>
            <input
              type="checkbox"
              checked={selectedDriving}
              onChange={handleDrivingClick}
            />
            Driving
          </label>
        </div>
        <h3>Passager</h3>
        <h5>People :</h5>
        <div className={styles["bx-fltr-tbn"]}>
          {numberOfPeople.map((number, index) => (
              <button
                key={index}
                onClick={() => handleNumberOfPeopleClick(number)}
                className={selectedNumberOfPeople === number ? styles["active"] : ""}
              >
                {number} {selectedNumberOfPeople === number && <span className={styles["close-icon"]}>&times;</span>}
              </button>
          ))}
        </div>
          
        <h5>Gender :</h5>
        <div className={styles["bx-fltr-tbn"]}>
          {genders.map((gender, index) => (
            <button
              key={index}
              onClick={() => handleGenderClick(gender)}
              className={selectedGender === gender ? styles["active"] : ""}
            >
              {gender} {selectedGender === gender && <span className={styles["close-icon"]}>&times;</span>}
            </button>
          ))}
        </div>
          
        <h5>Age :</h5>
        <div className={styles["bx-fltr-tbn"]}>
          {ages.map((age, index) => (
            <button
              key={index}
              onClick={() => handleAgeClick(age)}
              className={selectedAge === age ? styles["active"] : ""}
            >
              {age} {selectedAge === age && <span className={styles["close-icon"]}>&times;</span>}
            </button>
          ))}
        </div>
          
        <h5>Action :</h5>
        <div className={styles["bx-fltr-tbn"]}>
          {actions.map((action, index) => (
          <button
            key={index}
            onClick={() => handleActionPhoneClick(action)}
            className={selectedAction === action ? styles["active"] : ""}
          >
            {action} {selectedAction === action && <span className={styles["close-icon"]}>&times;</span>}
          </button>          
          ))}
        </div>

        <h5>Filter :</h5>
        <div className={styles["bx-fltr-tbn"]}>
          <label>
            <input
              type="checkbox"
              checked={selectedHavePhone}
              onChange={handleHavePhoneClick}
            />
            Have Phone
          </label>
          {/* <label>
            <input
              type="checkbox"
              checked={selectedFilter}
              onChange={handleHavePhoneClick}
            />
            Passenger Visible
          </label> */}
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
          {selectedAction && (
            <div className={styles["tag-city"]}>
              {selectedAction}
              <span className={styles["close-icon"]} onClick={() => handleActionPhoneClick(selectedAction)}>
                &times;
              </span>
            </div>
          )}
          {selectedHavePhone && (
            <div className={styles["tag-city"]}>
              Have Phone
              <span className={styles["close-icon"]} onClick={() => handleHavePhoneClick(selectedHavePhone)}>
                &times;
              </span>
            </div>
          )}
          {selectedCarCategory && (
            <div className={styles["tag-city"]}>
              {selectedCarCategory}
              <span className={styles["close-icon"]} onClick={() => handleCarCategoryClick(selectedCarCategory)}>
                &times;
              </span>
            </div>
          )}
          {selectedGenderDriver && (
            <div className={styles["tag-city"]}>
              {selectedGenderDriver} Driver
              <span className={styles["close-icon"]} onClick={() => handleGenderDriverClick(selectedGenderDriver)}>
                &times;
              </span>
            </div>
          )}
          {selectedDriverVisible && (
            <div className={styles["tag-city"]}>
              Driver Visible
              <span className={styles["close-icon"]} onClick={() => handleDriverVisibleClick(selectedDriverVisible)}>
                &times;
              </span>
            </div>
          )}
          {selectedDriving && (
            <div className={styles["tag-city"]}>
              Driving
              <span className={styles["close-icon"]} onClick={() => handleDrivingClick(selectedDriving)}>
                &times;
              </span>
            </div>
          )}
          {selectedAvailableSizes && (
            <div className={styles["tag-city"]}>
              {selectedAvailableSizes}
              <span className={styles["close-icon"]} onClick={() => handleAvailableSizesClick(selectedAvailableSizes)}>
                &times;
              </span>
            </div>
          )}
        </div>
        <div className={styles["boxe-template-globale"]}>
          {filteredTemplates.map((template, index) => (
            <div
                key={index} 
                className={`${styles["box-template"]} ${clickedTemplates.includes(template.id) ? styles["template-clicked"] : ""}`}
                onClick={() => handleTemplateClick(template.id)}
              >
              <img src={template.attributes.posterUrl} alt="" className={styles["box-template__image"]} />
              {template.attributes.isNew ? (
                <span className={styles["box-template__tag-news"]}>News</span>
              ) : (
                <span></span>
              )}
              <svg className={styles["icon-checked"]} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
              <div className={styles["box-template__contente"]}>
                <h4 className={styles["box-template__contente__title-id"]}>{template.id}</h4>
                {/* <input type="checkbox" /> */}
              </div>
            </div>
          ))}
        </div>
      </section>
      {clickedTemplates.length > 0 && (
        <div className={styles["selected-templates"]}>
          <div className={styles["selected-templates__box-temp-tag"]}>
          {clickedTemplates.map((template, index) => (
            <p className={styles["tag-temp"]} key={index}>{template}
            <span className={styles["close-icon"]} 
            onClick={() => handleTemplateClick(template)}
            >
            &times;
          </span>
          </p>
          ))}
          </div>
          {/* {clickedTemplates.length > 0 && ( */}
            <Link to={nextPagePath} className={styles["btn-stape"]}>
              <button>Suivant</button>
            </Link>
          {/* // )} */}
        </div>
      )}
    </div>
  );
}

export default Template;
