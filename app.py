from flask import Flask
from flask_cors import CORS
import pymongo

app = Flask(__name__)
CORS(app)

@app.route("/generate")
def generate():
    
    return {}

if __name__ == "__main__":
    app.run()
