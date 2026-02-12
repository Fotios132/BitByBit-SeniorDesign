import os
from pymongo import MongoClient
from typing import Optional

# Read connection settings from environment so we can switch between
# local (Compass) and MongoDB Atlas without editing code.
# Set MONGO_URI to a mongodb+srv://... Atlas URI in your environment.
MONGO_URI = os.environ.get("MONGO_URI", "mongodb://localhost:27017")
# Optional: override DB/collection names via environment as well
DB_NAME = os.environ.get("MONGO_DB", "admin")
USERS_COLL = os.environ.get("MONGO_USERS_COLL", "test")


def get_db_client(uri: str = None) -> MongoClient:
    """Return a PyMongo MongoClient. Defaults to env MONGO_URI.

    Uses a short serverSelectionTimeoutMS so failures surface quickly during
    development. The returned client still works for normal operations.
    """
    uri = uri or MONGO_URI
    # Fail fast if the server is unreachable (5s)
    return MongoClient(uri, serverSelectionTimeoutMS=5000)

def find_user_by_email(email: str, client: Optional[MongoClient] = None) -> Optional[dict]:
    """Return the user document or None."""
    c = client or get_db_client()
    coll = c[DB_NAME][USERS_COLL]
    # your field in Mongo is "Email" (capital E)
    return coll.find_one({"Email": email.strip()})

def check_credentials(email: str, password: str, client: Optional[MongoClient] = None) -> bool:
    """Return True if email/password match (plaintext comparison)."""
    doc = find_user_by_email(email, client=client)
    if not doc:
        return False
    # your field in Mongo is "Password" (capital P)
    stored = doc.get("Password")
    if stored is None:
        return False
    return str(stored) == password

def _demo():
    print("Simple Account Checker (plaintext password compare)")
    email = input("Email: ").strip()
    password = input("Password: ")
    ok = check_credentials(email, password)
    if ok:
        print("OK: credentials match")
    else:
        print("FAIL: no match")
        while True:
            _demo()
            break

if __name__ == "__main__":
    _demo()
