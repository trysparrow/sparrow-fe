#!/usr/bin/env python

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


def dashboard():
    return render_template(
        "pages/dashboard/dashboard.html",
        page_title="Dashboard - Sparrow",
        page='dashboard',
        name='Diego Berrocal Chinchay',
        notification_text='Hello Coudfire!  You have some tasks due.',
    )

def tasks():
    pass

def forms():
    step_list=[
        'Personal Information',
        'Employer Information',
        'Leave Information',
        'Upload Files',
        'Confirm',
    ]

    curr_step = request.args.get('step', default=1, type=int)
    return render_template(
        "pages/forms/forms.html",
        page_title="Forms - Sparrow",
        page='forms',
        name='Diego Berrocal Chinchay',
        step_list=step_list,
        curr_step=curr_step
    )

def faq():
    pass

def profile():
    pass

userMap = {
    'dashboard': dashboard,
    'tasks': tasks,
    'forms': forms,
    'faq': faq,
    'profile': profile
}

@app.route('/user/<path>', methods=['GET', 'POST'])
def userHandler(path):
    # Switch statement in Python via dictionary
    handler = userMap.get(path.lower(), 'dashboard')
    return handler();

if (environ.get('FLASK_ENV') == "DEVELOPMENT"):
    app.debug = True
    server = Server(app.wsgi_app)
    server.watch('src/')
    server.serve()
