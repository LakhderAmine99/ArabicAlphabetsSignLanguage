from flask import Flask, render_template, request
import tensorflow as tf

app = Flask(__name__,template_folder="./src/templates",static_folder="../public")

AASL_V_0_Model = tf.keras.models.load_model('./server/data/models/AASL_V.0/')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload',methods=['POST','GET'])
def upload_image():
    return

@app.route('/predict')
def predict():
    return
