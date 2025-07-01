from flask import Blueprint, request, jsonify
from ..models.assignment_submission import AssignmentSubmission
from ..models.assignment import Assignment
from ..models.user import User
from ..extensions import db

submission_bp = Blueprint('submission', __name__, url_prefix='/submissions')

@submission_bp.route('/', methods=['POST'])
def submit_assignment():
    data = request.get_json()
    user_id = data.get('user_id')
    assignment_id = data.get('assignment_id')
    content = data.get('content')
    if not user_id or not assignment_id or not content:
        return jsonify({'error': 'user_id, assignment_id, and content required'}), 400
    if not User.query.get(user_id) or not Assignment.query.get(assignment_id):
        return jsonify({'error': 'User or Assignment not found'}), 404
    existing = AssignmentSubmission.query.filter_by(user_id=user_id, assignment_id=assignment_id).first()
    if existing:
        return jsonify({'error': 'Already submitted'}), 400
    submission = AssignmentSubmission(user_id=user_id, assignment_id=assignment_id, content=content)
    db.session.add(submission)
    db.session.commit()
    return jsonify(submission.to_dict()), 201

@submission_bp.route('/<int:submission_id>', methods=['PUT'])
def update_submission(submission_id):
    submission = AssignmentSubmission.query.get_or_404(submission_id)
    data = request.get_json()
    submission.content = data.get('content', submission.content)
    db.session.commit()
    return jsonify(submission.to_dict())

@submission_bp.route('/assignment/<int:assignment_id>', methods=['GET'])
def list_submissions_for_assignment(assignment_id):
    submissions = AssignmentSubmission.query.filter_by(assignment_id=assignment_id).all()
    return jsonify([s.to_dict() for s in submissions])

@submission_bp.route('/user/<int:user_id>', methods=['GET'])
def list_submissions_for_user(user_id):
    submissions = AssignmentSubmission.query.filter_by(user_id=user_id).all()
    return jsonify([s.to_dict() for s in submissions])

@submission_bp.route('/<int:submission_id>', methods=['GET'])
def get_submission(submission_id):
    submission = AssignmentSubmission.query.get_or_404(submission_id)
    return jsonify(submission.to_dict())
