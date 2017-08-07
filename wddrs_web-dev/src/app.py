#! /home/bush2582/runtime/py_evn/bin/python
#encoding:utf-8
from flask  import Flask, session, request
from datetime  import timedelta
# from flask.ext.session  import  Session
import  redis
from action.login import login
app = Flask(__name__)

app.config['SECRET_KEY'] = 'PS#yio`%_!((f_or(%)))s'
# SESSION_TYPE = 'redis'
# SESSION_REDIS= redis.Redis(host='192.168.0.2',port=6379,db=1)
# PERMANENT_SESSION_LIFETIME = timedelta(seconds=10)

app.register_blueprint(login)
app.config.from_object(__name__)
# Session(app)




if __name__=='__main__':
    app.run(host='0.0.0.0',port='14000')
