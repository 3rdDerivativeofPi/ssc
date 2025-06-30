from flask import Blueprint, request, jsonify
from ..models.assignment import Assignment
from ..models.course import Course
from ..extensions import db

assignment_bp = Blueprint('assignment', __name__, url_prefix='/assignments')

@assignment_bp.route('/course/<int:course_id>', methods=['GET'])
def list_assignments(course_id):
    assignments = Assignment.query.filter_by(course_id=course_id).all()
    return jsonify([a.to_dict() for a in assignments])

@assignment_bp.route('/<int:assignment_id>', methods=['GET'])
def get_assignment(assignment_id):
    assignment = Assignment.query.get_or_404(assignment_id)
    return jsonify(assignment.to_dict())

@assignment_bp.route('/course/<int:course_id>', methods=['POST'])
def create_assignment(course_id):
    data = request.get_json()
    title = data.get('title')
    content_mdx = data.get('content_mdx')
    if not title or not content_mdx:
        return jsonify({'error': 'title and content_mdx required'}), 400
    if not Course.query.get(course_id):
        return jsonify({'error': 'Course not found'}), 404
    assignment = Assignment(title=title, content_mdx=content_mdx, course_id=course_id)
    db.session.add(assignment)
    db.session.commit()
    return jsonify(assignment.to_dict()), 201

@assignment_bp.route('/<int:assignment_id>', methods=['PUT'])
def update_assignment(assignment_id):
    assignment = Assignment.query.get_or_404(assignment_id)
    data = request.get_json()
    assignment.title = data.get('title', assignment.title)
    assignment.content_mdx = data.get('content_mdx', assignment.content_mdx)
    db.session.commit()
    return jsonify(assignment.to_dict())

@assignment_bp.route('/<int:assignment_id>', methods=['DELETE'])
def delete_assignment(assignment_id):
    assignment = Assignment.query.get_or_404(assignment_id)
    db.session.delete(assignment)
    db.session.commit()
    return jsonify({'message': 'Assignment deleted'})
