const BASE_URL = 'http://127.0.0.1:5000/';

function ArabicAlphabetsSignLanguage(){

    const uploadArea = document.getElementById('uploadBtn');
    
    const predictBtn = document.getElementById('predictBtn');

    const imageSurface = document.querySelector('.image');
    const imageTitle = document.querySelector('.image-title');

    this.start = function(){

        console.log("ArabicAlphabetsSignLanguage Application is up and running...");

        initEventListeners();
    }

    function initEventListeners(){

        uploadArea.addEventListener('change',uploadHandler);
        predictBtn.addEventListener('click',predictHandler);
    }

    async function predictHandler(e){

        return await fetch(BASE_URL+'predict',{

            "method": "GET",
            "headers": {"Content-Type": "application/json"},

        }).then((response) => {

            return response.json();
             
        }).then((res) => {
            
            console.log(res);

        }).catch((err) => {
            
            alert("error while predicting");
        });
    }

    async function uploadHandler(e){

        imageSurface.innerHTML = "";

        let src = URL.createObjectURL(e.target.files[0]);
        let img = new Image(320,320);

        img.src = src;

        imageSurface.append(img);
        imageTitle.innerHTML = e.target.files[0].name;
        
        return await fetch(BASE_URL+'upload',{

            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(e.target.files[0].name),

        }).then((response) => {

            return response.json();
            
        }).then(function(res){

            console.log('success');
            alert(res.sign);

        }).catch((err) => {
            
            alert("Error while uploading");
        });

    }
}

const setup = () => {

    window.onload = () => {

        window.app = new ArabicAlphabetsSignLanguage();
        window.app.start();
    }
}

setup();