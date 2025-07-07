from enum import Enum

class UserRole(str, Enum):
    ADMIN = "admin"
    STUDENT = "student"
    INSTRUCTOR = "instructor"