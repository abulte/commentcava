import os
import dataset
from datetime import datetime

from flask import Flask, render_template, jsonify, request, abort
from flask_cors import CORS

from utils import fix_end_date
from form import form_structure, fields

app = Flask(__name__,
            static_folder="../dist/static",
            template_folder="../dist")
cors = CORS(app, resources={r"/api/*": {"origins": "http://localhost:8080"}})

db = dataset.connect(os.getenv('DB_DSN', 'sqlite:///commentcava.db'))


@app.route("/api/structure")
def get_structure():
    return jsonify(form_structure)


@app.route("/api/mood", methods=['POST'])
def create_mood():
    data = {}
    table = db["mood"]
    for key in fields:
        data[key] = request.json.get(key)
    data["created_at"] = datetime.now()
    data["random"] = request.json["random"]
    record_id = table.insert(data)
    return jsonify({"id": record_id}), 201


@app.route("/api/mood/<mood_id>", methods=['DELETE'])
def delete_mood(mood_id):
    random = request.args.get("random", "")
    table = db["mood"]
    deleted = table.delete(id=mood_id, random=random)
    return '', 204 if deleted else 404


@app.route("/api/moods/<indicator>")
def get_moods_by_indicator(indicator):
    if indicator == 'name':
        return abort(403)
    start = request.args.get('start')
    end = request.args.get('end')
    end = fix_end_date(end)
    statement = f"""SELECT {indicator}, COUNT(*) AS count FROM mood
    WHERE created_at >= :start AND created_at < :end GROUP BY {indicator}"""
    data = db.query(statement, start=start, end=end)
    return jsonify(list(data))


@app.route("/api/moods")
def get_moods():
    start = request.args.get('start')
    end = request.args.get('end')
    end = fix_end_date(end)
    table = db["mood"]
    data = table.find(created_at={'>=': start, '<': end},
                      order_by="-created_at")
    return jsonify(list(data))


@app.route("/", defaults={"path": ""})
# allows routing in vuejs
@app.route("/<path:path>")
def index(path):
    return render_template("index.html")
