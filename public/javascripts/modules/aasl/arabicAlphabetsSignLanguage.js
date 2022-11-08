import Request from '../request/request.js'

/**
 * @module
 */
class ArabicAlphabetsSignLanguage {

    #request = new Request();

    constructor(){

    }

    async uploadHandler(imageFile){

        return await this.#request.post();
    }

    async predictHandler(){

        return await this.#request.get();
    }
}

export default ArabicAlphabetsSignLanguage;