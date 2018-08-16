import os, mistune
from flask import Flask, render_template, request, json, jsonify, send_from_directory
app = Flask(__name__)
app.config.from_envvar('APPLICATION_SETTINGS')

@app.route('/')
def home():
    json_url = os.path.join(app.config['DATA_PATH'], 'locations.json')
    locations = []
    data = json.load(open(json_url))
    for location in data:
        url = os.path.join(app.config['DATA_PATH'], 'locations',  location['id'] + '.json')
        loc = json.load(open(url))
        loc['id'] = location['id']
        locations.append(loc)

    print(locations)
    return render_template('index.html', locations=locations)

@app.route('/blog')
def blog():
    json_url = os.path.join(app.config['DATA_PATH'], 'blogs.json')
    blogs = json.load(open(json_url))

    markdown = mistune.Markdown()
    for blog in blogs:
        blog_url = os.path.join(app.config['DATA_PATH'], 'blogs', blog['id'] + '.md')

        with open(blog_url, 'r') as myfile:
            md=myfile.read().decode('utf-8')

        blog['body'] = markdown(md)

    return render_template('blog.html', blogs=blogs)

@app.route('/portfolio')
def portfolio():
    json_url = os.path.join(app.config['DATA_PATH'], 'portfolio.json')
    data = json.load(open(json_url))

    return render_template('portfolio.html', portfolio=data)

@app.route('/locations')
def locations():
    if request.method == 'GET':
        json_url = os.path.join(app.config['DATA_PATH'], 'locations.json')
        data = json.load(open(json_url))
        return jsonify(data)

