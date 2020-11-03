import json
import urllib.request
import buffalo


def nycapi(str):
    dict = {"BURGLARY": 0, "RAPE": 0, "ROBBERY": 0, "ASSAULT": 0}
    response = urllib.request.urlopen(str)
    content = response.read().decode()
    x = json.loads(content)
    for obj in x:
        if "ofns_desc" in obj:
            if obj["ofns_desc"] == "BURGLARY":
                dict["BURGLARY"] += 1
            elif obj["ofns_desc"] == "RAPE":
                dict["RAPE"] += 1
            elif obj["ofns_desc"] == "ROBBERY":
                dict["ROBBERY"] += 1
            elif obj["ofns_desc"] == "HARRASSMENT 2":
                dict["ASSAULT"] += 1
    return dict


def mix(str):
    list = []
    x = buffalo.api("https://data.buffalony.gov/resource/d6g9-xbgu.json")
    y = nycapi(str)
    list.append(json.loads(x))
    list.append(y)
    return json.dumps(list)
