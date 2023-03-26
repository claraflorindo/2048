from flask import Flask, render_template, request, redirect, url_for, session
from sqlalchemy import create_engine

from werkzeug.security import generate_password_hash, check_password_hash


app = Flask(__name__)
app.secret_key = 'your_secret_key_here'  

user="root"
password="123456"
host="104.154.237.191"
database="main"

engine = create_engine(f"mysql+pymysql://{user}:{password}@{host}/{database}")


@app.route('/')
def home():
    return render_template('index.html')

#login route: rendering login interface template
@app.route('/login')
def login():
    return render_template('loginbootstrap.html')

#index route: rendering index interface template
@app.route('/index')
def index():
    return render_template('index.html')


#register route: rendering register interface template
@app.route("/register")
def register():
    return render_template("registerbootstrap.html")

#game route: rendering game interface template
@app.route("/2048")
def juego():
    return render_template("2048.html")

#register route: handling the register of a new user to the application
@app.route("/register", methods=["POST"])
def handle_register():

    username = request.form["username"]
    password = request.form["password"]
    hashed_password=generate_password_hash(password)

    query = f"""
    INSERT INTO users(username, password)
    VALUES ("{username}", "{hashed_password}")
    """


    with engine.connect() as connection:
        connection.execute(query)

        session["username"] = username

        return redirect(url_for("juego"))



#login route: handling the login of a user to the application
@app.route("/login", methods=["POST"])
def handle_login():
    username = request.form["username"]
    password = request.form["password"]

    query = f"""
    SELECT username, password
    FROM users
    WHERE username='{username}'
    """
    

    

    with engine.connect() as connection:
        user = connection.execute(query).fetchone()
        if check_password_hash(user[1], password):
            session["username"] = username
            return redirect(url_for("juego"))
        else:
            return render_template("401.html")


#logout route: handling the logout of a user to the application
@app.route('/logout')
def logout():
    # remove the username from the session if it's there
    session.pop('username')
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)

