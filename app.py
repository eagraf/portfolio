import os
from flask import Flask, render_template, request, json, jsonify, send_from_directory
app = Flask(__name__)

SITE_ROOT = os.path.realpath(os.path.dirname(__file__))

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/blog')
def blog():
    return render_template('blog.html')

@app.route('/portfolio')
def portfolio():
    return render_template('portfolio.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/locations')
def locations():
    if request.method == 'GET':
        json_url = os.path.join(SITE_ROOT, 'static/data', 'locations.json')
        data = json.load(open(json_url))
        return jsonify(data)

@app.route('/locations/<location>')
def locations_id(location):
    url = os.path.join(SITE_ROOT, 'static/data/html')
    return send_from_directory(url, location + '.html')

