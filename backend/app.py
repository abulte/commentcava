import dataset
from datetime import datetime

from flask import Flask, render_template, jsonify, request
from flask_cors import CORS

app = Flask(__name__,
            static_folder="../dist/static",
            template_folder="../dist")
cors = CORS(app, resources={r"/api/*": {"origins": "http://localhost:8080"}})

db = dataset.connect('sqlite:///commentcava.db')


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/api/mood", methods=['POST'])
def create_mood():
    data = request.json
    table = db['mood']
    record_id = table.insert({
        "created_at": datetime.now(),
        "mood": data['mood'],
        "random": data['random']
    })
    return jsonify({"id": record_id}), 201


@app.route("/api/mood/<mood_id>", methods=['DELETE'])
def delete_mood(mood_id):
    random = request.args.get('random', '')
    table = db['mood']
    deleted = table.delete(id=mood_id, random=random)
    return '', 204 if deleted else 404
