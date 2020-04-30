import os
import toml


cfile_path = os.getenv('CCV_CONFIG_FILE', '../config/config.toml')

with open(cfile_path) as cfile:
    data = toml.loads(cfile.read())

form_structure = {
    "top": [f for f in data["fields"] if f["position"] == "top"],
    "below": [f for f in data["fields"] if f["position"] == "below"],
    "why": data["why"],
    "title": data["title"],
}

fields = [f["name"] for f in data["fields"]]
