/**
 * 
 */
export default function Request(){

    /**
     * 
     * @param {*} URL 
     * @param {*} options 
     * @returns 
     */
    this.get = async function(URL,options){

        return fetch(URL,options)
        .then(() => {

        }).catch(e => {

            alert("Error occured : Http GET method.");
        });
    }

    /**
     * 
     * @param {*} URL 
     * @param {*} options 
     * @param {*} dataObject 
     * @returns 
     */
    this.post = async function(URL,options,dataObject){

        return fetch(URL,options)
        .then(data => {

        }).catch(e => {

            alert("Error occured : Http POST method.")
        })
    }
}