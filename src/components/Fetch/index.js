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


export function getAverageTemplates(){
    return callApi(`../../data/templates.json`).then((data)=>{
        return data;
    })
}