from flask import Blueprint, request, jsonify
from ..models.enrollment import Enrollment
from ..models.user import User
from ..models.course import Course
from ..extensions import db

enrollment_bp = Blueprint('enrollment', __name__, url_prefix='/enrollments')

@enrollment_bp.route('/', methods=['POST'])
def enroll_user():
    data = request.get_json()
    user_id = data.get('user_id')
    course_id = data.get('course_id')
    if not user_id or not course_id:
        return jsonify({'error': 'user_id and course_id required'}), 400
    if not User.query.get(user_id) or not Course.query.get(course_id):
        return jsonify({'error': 'User or Course not found'}), 404
    existing = Enrollment.query.filter_by(user_id=user_id, course_id=course_id).first()
    if existing:
        return jsonify({'error': 'Already enrolled'}), 400
    enrollment = Enrollment(user_id=user_id, course_id=course_id)
    db.session.add(enrollment)
    db.session.commit()
    return jsonify(enrollment.to_dict()), 201

@enrollment_bp.route('/', methods=['DELETE'])
def unenroll_user():
    data = request.get_json()
    user_id = data.get('user_id')
    course_id = data.get('course_id')
    enrollment = Enrollment.query.filter_by(user_id=user_id, course_id=course_id).first()
    if not enrollment:
        return jsonify({'error': 'Enrollment not found'}), 404
    db.session.delete(enrollment)
    db.session.commit()
    return jsonify({'message': 'Unenrolled successfully'})

@enrollment_bp.route('/course/<int:course_id>', methods=['GET'])
def list_users_in_course(course_id):
    enrollments = Enrollment.query.filter_by(course_id=course_id).all()
    user_ids = [e.user_id for e in enrollments]
    users = User.query.filter(User.id.in_(user_ids)).all()
    return jsonify([{'id': u.id, 'name': u.name, 'email': u.email} for u in users])

@enrollment_bp.route('/user/<int:user_id>', methods=['GET'])
def list_courses_for_user(user_id):
    enrollments = Enrollment.query.filter_by(user_id=user_id).all()
    course_ids = [e.course_id for e in enrollments]
    courses = Course.query.filter(Course.id.in_(course_ids)).all()
    return jsonify([c.to_dict() for c in courses])
