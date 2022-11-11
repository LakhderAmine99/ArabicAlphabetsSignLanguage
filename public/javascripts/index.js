import Request from './modules/request/request.js';

function ArabicAlphabetsSignLanguage(){

    const uploadArea = document.getElementById('uploadBtn');

    const imageSurface = document.querySelector('.image');

    // var video = document.querySelector("#videoElement");


    this.start = function(){

        console.log("ArabicAlphabetsSignLanguage Application is up and running...");

        initEventListeners();

        // if (navigator.mediaDevices.getUserMedia) {
        //     navigator.mediaDevices.getUserMedia({ video: true })
        //       .then(function (stream) {
        //         video.srcObject = stream;
        //       })
        //       .catch(function (err0r) {
        //         console.log("Something went wrong!");
        //       });
        //   }
    }

    function initEventListeners(){

        uploadArea.addEventListener('change',uploadHandler);
    }

    async function uploadHandler(e){

        imageSurface.innerHTML = "";

        let src = URL.createObjectURL(e.target.files[0]);

        let img = new Image();

        img.src = src;
        img.width = 300;
        img.height = 300;

        imageSurface.append(img);
    }
}

const setup = () => {

    window.onload = () => {

        window.app = new ArabicAlphabetsSignLanguage();
        window.app.start();
    }
}

setup();