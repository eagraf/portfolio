from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/blog')
def blog():
    return 'Blog'

@app.route('/portfolio')
def portfolio():
    return 'Portfolio'

@app.route('/contact')
def contact():
    return 'Contact'
