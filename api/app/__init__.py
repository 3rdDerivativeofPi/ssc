from dotenv import load_dotenv
load_dotenv()

from flask import Flask
from .config import DevelopmentConfig
from .extensions import db, migrate
from . import models

def create_app(config_class=DevelopmentConfig) -> Flask:
    app = Flask(__name__)
    app.config.from_object(config_class)

    db.init_app(app)
    migrate.init_app(app, db)

    from .routes import register_routes
    register_routes(app)

    return app
