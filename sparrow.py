from flask import Flask
from flask import request
from flask import render_template
from livereload import Server

from os import environ

app = Flask(__name__, template_folder='src')

@app.route("/")
def hello():
    return "Hello World!"

# Login Page
def do_the_login(path):
    return show_the_login_form(path)

def show_the_login_form(path):
    return render_template("pages/login/login.html", page_title="Login - Sparrow", path=path)

@app.route('/login', methods=['GET', 'POST'])
def login():
    path = request.args.get('template', 'start').lower()
    if request.method == 'POST':
        return do_the_login(path)
    else:
        return show_the_login_form(path)

@app.route('/dashboard', methods=['GET', 'POST'])
def dashboard():
    return render_template("pages/dashboard/dashboard.html", page_title="Dashboard - Sparrow")

if (environ.get('DEPLOY_ENV') == "DEV"):
    server = Server(app.wsgi_app)
    server.watch('src/')
    server.serve()
