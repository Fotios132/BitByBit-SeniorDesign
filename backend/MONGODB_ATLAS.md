# Switch backend to MongoDB Atlas

This project uses PyMongo-based helpers in `backend/api` that by default connect to `mongodb://localhost:27017`.

I updated the helper modules so they read the connection info from environment variables. This allows you to switch from local Compass (localhost) to MongoDB Atlas by setting `MONGO_URI`.

## Quick steps to use MongoDB Atlas

1. Create an Atlas cluster
   - Sign in to https://cloud.mongodb.com and create a free cluster (or use an existing one).

2. Create a database user
   - In Atlas, go to Database Access -> Add New Database User.
   - Create a username and password you'll use in the connection string.

3. Allow network access
   - In Network Access -> IP Access List add your current IP address, or for development you can add `0.0.0.0/0` (less secure) to allow any IP.

4. Get the connection string
   - In Atlas, click "Connect" on your cluster -> Connect your application -> Copy the connection string.
   - It will look like:
     ```
     mongodb+srv://<username>:<password>@cluster0.abcd1.mongodb.net/<defaultDB>?retryWrites=true&w=majority
     ```
   - Replace `<username>`, `<password>`, and `<defaultDB>` with your values.

5. Set environment variables locally (zsh example)

   - For a one-off terminal session:
     ```bash
     export MONGO_URI="mongodb+srv://myuser:mypassword@cluster0.abcd1.mongodb.net/mydb?retryWrites=true&w=majority"
     export MONGO_DB="mydb"
     export MONGO_USERS_COLL="test"
     python3 manage.py runserver
     ```

   - To persist in your shell, add the `export` lines to `~/.zshrc` (not recommended for secrets) or use a `.env` file with a secrets manager.

6. Using a .env file (recommended for local dev)
   - Install `python-dotenv` and load it at Django start, or use `django-environ`.
   - Example `.env` content:
     ```env
     MONGO_URI=mongodb+srv://myuser:mypassword@cluster0.abcd1.mongodb.net/mydb?retryWrites=true&w=majority
     MONGO_DB=mydb
     MONGO_USERS_COLL=test
     ```

7. Test the connection
   - Run one of the helper demos:
     ```bash
     python3 backend/api/simple_account_checker.py
     python3 backend/api/simple_account_creator.py
     ```
   - These will use the `MONGO_URI` from the environment and will error quickly (within ~5s) if Atlas is unreachable.

## Security notes

- Do NOT commit credentials to version control.
- For production, use a secret manager or environment config in your deployment platform.
- Use least-privilege DB users and restrict IP access.

## What I changed in the code

- `backend/api/simple_account_checker.py` and `backend/api/simple_account_creator.py` now read `MONGO_URI`, `MONGO_DB`, and `MONGO_USERS_COLL` from environment variables and use a short `serverSelectionTimeoutMS` for faster failures during development.

If you want, I can also wire environment variable loading into Django `settings.py` (for example with `django-environ`) so other parts of the app can reuse the same `MONGO_URI` value.
