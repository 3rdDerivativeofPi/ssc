from flask import Blueprint, request, jsonify
from ..models.course import Course
from ..extensions import db
from ..routes.auth import token_required

course_bp = Blueprint('course', __name__, url_prefix='/courses')

@course_bp.route('/', methods=['GET'])
def get_courses():
    courses = Course.query.all()
    return jsonify([course.to_dict() for course in courses])

@course_bp.route('/<int:course_id>', methods=['GET'])
def get_course(course_id):
    course = Course.query.get_or_404(course_id)
    return jsonify(course.to_dict())

@course_bp.route('/', methods=['POST'])
@token_required
def create_course():
    data = request.get_json()
    name = data.get('name')
    description = data.get('description')
    if not name:
        return jsonify({'error': 'Name is required'}), 400
    course = Course(name=name, description=description)
    db.session.add(course)
    db.session.commit()
    return jsonify(course.to_dict()), 201

@course_bp.route('/<int:course_id>', methods=['PUT'])
@token_required
def update_course(course_id):
    course = Course.query.get_or_404(course_id)
    data = request.get_json()
    course.name = data.get('name', course.name)
    course.description = data.get('description', course.description)
    db.session.commit()
    return jsonify(course.to_dict())

@course_bp.route('/<int:course_id>', methods=['DELETE'])
@token_required
def delete_course(course_id):
    course = Course.query.get_or_404(course_id)
    db.session.delete(course)
    db.session.commit()
    return jsonify({'message': 'Course deleted'})
