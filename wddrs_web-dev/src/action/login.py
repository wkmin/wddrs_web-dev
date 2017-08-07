# _*_ coding:utf-8 _*_
from flask import Blueprint, render_template,request,session,redirect

login = Blueprint('login', __name__)
@login.route('/')
def LoginPageInit():
    session['username']="bush2582"
    return render_template('login.html')

@login.route('/index')
def index():
    return render_template('index.html',username='bush2582')
@login.route('/total_data')
def total_data():
    return render_template('total_data.html')
@login.route('/groups')
def group():
    return render_template('groups.html')
