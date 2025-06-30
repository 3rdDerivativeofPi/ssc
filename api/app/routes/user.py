from flask import Blueprint, jsonify
from ..models import User

user_bp = Blueprint('user', __name__)

@user_bp.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    users_data = [{'id': u.id, 'name': u.name, 'email': u.email} for u in users]
    return jsonify({'message': 'List of users', 'data': users_data})