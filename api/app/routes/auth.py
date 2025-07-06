from flask import Blueprint, jsonify, request, g
from ..extensions import db
from ..models import User
import jwt
import datetime
import os
from functools import wraps

auth_bp = Blueprint('auth', __name__)

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        if 'Authorization' in request.headers:
            auth_header = request.headers['Authorization']
            if auth_header.startswith('Bearer '):
                token = auth_header.split(' ')[1]
        if not token:
            return jsonify({'message': 'Token is missing!'}), 401
        try:
            data = jwt.decode(token, os.getenv('SECRET_KEY', 'dev_secret'), algorithms=['HS256'])
            user = User.query.get(data['user_id'])
            if not user:
                return jsonify({'message': 'User not found!'}), 401
            g.current_user = user
            
        except jwt.ExpiredSignatureError:
            return jsonify({'message': 'Token has expired!'}), 401
        except Exception:
            return jsonify({'message': 'Token is invalid!'}), 401
        return f(*args, **kwargs)
    return decorated

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    if not all([name, email, password]):
        return jsonify({'message': 'Missing fields'}), 400
    if User.query.filter_by(email=email).first():
        return jsonify({'message': 'Email already registered'}), 400
    user = User(name=name, email=email)
    user.set_password(password)
    db.session.add(user)
    db.session.commit()
    return jsonify({'message': 'User registered successfully'})

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    user = User.query.filter_by(email=email).first()
    if user and user.check_password(password):
        token = jwt.encode({
            'user_id': user.id,
            'exp': datetime.datetime.now() + datetime.timedelta(hours=24)
        }, os.getenv('SECRET_KEY', 'dev_secret'), algorithm='HS256')
        return jsonify({'token': token})
    return jsonify({'message': 'Invalid credentials'}), 401

@auth_bp.route('/reset-password', methods=['POST'])
def reset_password():
    data = request.get_json()
    email = data.get('email')
    new_password = data.get('new_password')
    if not all([email, new_password]):
        return jsonify({'message': 'Missing fields'}), 400
    user = User.query.filter_by(email=email).first()
    if not user:
        return jsonify({'message': 'User not found'}), 404
    user.set_password(new_password)
    db.session.commit()
    return jsonify({'message': 'Password reset successful'})
