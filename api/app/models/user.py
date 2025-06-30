from ..extensions import db
from werkzeug.security import generate_password_hash, check_password_hash

class User(db.Model):
    """User model for storing user information.
    Attributes:
        id (int): Unique identifier for the user.
        name (str): Name of the user.
        email (str): Email address of the user, must be unique.
        password_hash (str): Hashed password for the user.
    """
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(128), nullable=False)
    email = db.Column(db.String(128), unique=True, nullable=False)
    password_hash = db.Column(db.String(256), nullable=False)

    def set_password(self, password) -> None:
        self.password_hash = generate_password_hash(password)

    def check_password(self, password) -> bool:
        return check_password_hash(self.password_hash, password)
