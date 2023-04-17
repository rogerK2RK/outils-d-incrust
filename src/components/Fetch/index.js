/**
 * 
 * @param {string} url 
 * @returns {Promise}
 */
function callApi(url){
    return fetch(url)
     .then((response) => response.json())
 
 }
 
 callApi()


export async function getAverageTemplatesDigicab(){
    let reponse = await fetch("/templatesDigiCab.json");
    let dataTemplates = await reponse.json();

    return dataTemplates;
}