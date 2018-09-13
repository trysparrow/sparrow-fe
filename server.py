from flask import Flask
from flask import request
from flask import render_template
from livereload import Server

app = Flask(__name__, template_folder='src')

server = Server(app.wsgi_app)
server.watch('src/')


@app.route("/")
def hello():
    return "Hello World!"

# Login Page

def do_the_login():
    pass

def show_the_login_form():
    return render_template("pages/login/login.html")

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        return do_the_login()
    else:
        return show_the_login_form()

server.serve()
