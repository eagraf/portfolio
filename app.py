from flask import Flask
app = Flask(__name__)

@app.route('/')
def home():
    return 'Ethan Graf'

@app.route('/blog')
def blog():
    return 'Blog'

@app.route('/portfolio')
def portfolio():
    return 'Portfolio'

@app.route('/contact')
def contact():
    return 'Contact'
