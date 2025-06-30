from .user import user_bp
from flask import Flask

def register_routes(app: Flask) -> None:
    app.register_blueprint(user_bp)
