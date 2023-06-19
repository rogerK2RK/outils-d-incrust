import React from "react";
import { useParams } from 'react-router-dom';
import styles from './styles.module.scss';
import { Navigate } from 'react-router';

function OneTemplate({ templates }) {
  const { id } = useParams();
  const ids = id.split(','); // Séparer les IDs par des virgules

  let selectedTemplates = templates.filter(template => ids.includes(template.id.toString()));
  
  if (templates.length === 0) {
    return <div className={styles["loading-box"]}><h3 className={styles["loading-content"]}>Chargement...</h3></div>;
  }

  if (selectedTemplates.length === 0) {
    // Rediriger vers la page d'erreur si aucun modèle correspondant n'est trouvé
    return <Navigate to='/*' />;
  }

  return (
    <div className={styles["box-parent"]}>
      {/* Afficher les informations sur les modèles sélectionnés */}
      {selectedTemplates.map(template => (
        <div key={template.id} className={styles["temptlate-box"]}>
          <div className={styles["temptlate-box__image"]}>
          <img src={template.attributes.posterUrl} alt="" className={styles["image"]} />
          </div>
          <div>
            <h4>{template.id}</h4>
            <p>{template.attributes.previewUrl}</p>
            <p>{template.template.lienAEPFile}</p>
            {Object.values(template.properties.export.availableSizes).map(size => (
              <button key={size.value}>{size.text}</button>
            ))}
          </div>
          <div className={styles["box-video-import"]}>
            <label>
              <input type="file"
        id="avatar" name="avatar"
        accept="image/png, image/jpeg video/*"/>
            </label>
          </div>
        </div>
      ))}

      <div className={styles["button-run"]}>
        <button>Démarer les incrustes<span className={styles["arrow"]}></span></button>
      </div>
    </div>
  );
}

export default OneTemplate;
