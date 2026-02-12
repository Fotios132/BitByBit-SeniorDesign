from pymongo import MongoClient
from typing import Optional

MONGO_URI = "mongodb+srv://Joshua_Delshad:Josh123123@testcluster.pgy1cvy.mongodb.net/"
DB_NAME = "test"
USERS_COLL = "test"

def get_db_client(uri: str = None) -> MongoClient:
    uri = uri or MONGO_URI
    return MongoClient(uri)

def create_account(first: str, last: str, email: str, password: str,
                   client: Optional[MongoClient] = None) -> dict:
    c = client or get_db_client()
    coll = c[DB_NAME][USERS_COLL]

    existing = coll.find_one({"Email": email.strip()})
    if existing:
        return {"created": False, "error": "Email already exists"}

    doc = {
        "FirstName": first.strip(),
        "LastName":  last.strip(),
        "Email":     email.strip(),
        "Password":  password
    }

    try:
        coll.insert_one(doc)
        return {"created": True}
    except Exception as e:
        return {"created": False, "error": str(e)}

def _demo():
    print("\nSimple Account Creator")
    first    = input("First Name: ").strip()
    last     = input("Last Name: ").strip()
    email    = input("Email: ").strip()
    password = input("Password: ").strip()

    result = create_account(first, last, email, password)
    if result.get("created"):
        print(f"OK: account created for {email}")
    else:
        print(f"FAIL: {result.get('error')}")

if __name__ == "__main__":
    while True:
        _demo()
        again = input("Create another? (y/n): ").lower().strip()
        if again != "y":
            break