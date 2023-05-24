import React from "react";
import {useParams} from 'react-router-dom';
import styles from './styles.module.scss';
import { Navigate } from 'react-router';

function OneTemplate({templates}) {
    const { id } = useParams();
    console.log(templates);
    let selectedTemplates = templates.find((template) => template.id == id );
    console.log(selectedTemplates);

    if (templates.length === 0) return <div className={styles["loading-box"]}><h3 className={styles["loading-content"]}>Chargement...</h3></div> 
    if(!selectedTemplates){
        //renvoie a la page d'erreur
        return <Navigate to='/*'/>;
    }
    return  selectedTemplates === undefined ? null :(
        <div className={styles["box-parent"]}>
            <h3>Hello roger {selectedTemplates.id}</h3>
        </div>
    );
}

export default OneTemplate;