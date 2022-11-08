from flask import Flask, render_template, request

app = Flask(__name__,template_folder="./src/templates",static_folder="./public")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload',['POST'])
def upload_image():
    return

@app.route('/predict')
def predict():
    return
