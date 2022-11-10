import Request from './modules/request/request.js';

function ArabicAlphabetsSignLanguage(){

    const uploadArea = document.getElementById('upload-area')

    this.start = function(){

        console.log("ArabicAlphabetsSignLanguage Application is up and running...");

        initEventListeners();
    }

    function initEventListeners(){

        uploadArea.addEventListener('click',uploadHandler);
    }

    async function uploadHandler(){

        alert('Upload me')
    }
}

const setup = () => {

    window.onload = () => {

        window.app = new ArabicAlphabetsSignLanguage();
        window.app.start();
    }
}

setup();