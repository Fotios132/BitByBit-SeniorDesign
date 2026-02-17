import os
from pymongo import MongoClient
from typing import Optional

MONGO_URI = "mongodb+srv://Joshua_Delshad:Josh123123@testcluster.pgy1cvy.mongodb.net/"
DB_NAME = "test"
USERS_COLL = "test"

def get_db_client(uri: str = None) -> MongoClient:
    uri = uri or MONGO_URI
    return MongoClient(uri)

def find_user_by_email(email: str, client: Optional[MongoClient] = None) -> Optional[dict]:
    c = client or get_db_client()
    coll = c[DB_NAME][USERS_COLL]
    return coll.find_one({"Email": email.strip()})

def check_credentials(email: str, password: str, client: Optional[MongoClient] = None) -> bool:
    doc = find_user_by_email(email, client=client)
    if not doc:
        return False
    stored = doc.get("Password")
    if stored is None:
        return False
    return str(stored) == password

def _demo():
    print("\nSimple Account Checker")
    email    = input("Email: ").strip()
    password = input("Password: ")
    ok = check_credentials(email, password)
    if ok:
        print("OK: credentials match")
    else:
        print("FAIL: no match")

if __name__ == "__main__":
    while True:
        _demo()
        again = input("Try again? (y/n): ").lower().strip()
        if again != "y":
            break