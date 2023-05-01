from flask import Flask, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

@app.route("/data")
@cross_origin()
def data():
    return jsonify({"message": "Hello, World!"})
if __name__ == "__main__":
    app.run(debug=True)
