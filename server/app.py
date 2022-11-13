from flask import Flask, render_template, request, flash, jsonify, redirect
import tensorflow as tf
import cv2 as cv
from PIL import Image
from io import BytesIO
import numpy as np
import re
import base64

from src.modules.dataProcessor import DataProcessor

app = Flask(__name__,template_folder="./src/templates",static_folder="../public")
app.secret_key = 'super secret key'
app.config['SESSION_TYPE'] = 'filesystem'

AASL_V_0_Model = tf.keras.models.load_model('./server/data/models/AASL_V.0/')
dataProcessor = DataProcessor()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload',methods=['POST','GET'])
def upload_image():
    
    if request.method == 'POST':
        
        name = request.json    
                                
        image = cv.imread("./public/uploads/"+name)
        
        image_array = cv.resize(image,(64,64))
                                                        
        json_data = dataProcessor.decode(np.argmax(AASL_V_0_Model.predict(image_array.reshape(1,64,64,3))))

    return {
        
        "sign":json_data
    }