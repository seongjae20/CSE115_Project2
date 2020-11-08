import json
import urllib3.request


def api(str):
    dict = {"ASSAULT": 0, "UUV": 0, "LARCENY/THEFT": 0, "BURGLARY": 0, "SEXUAL ABUSE": 0, "ROBBERY": 0, "THEFT OF SERVICES": 0, "RAPE": 0}
    http = urllib3.PoolManager()
    response = http.request('GET', str)
    x = json.loads(response.data)
    for obj in x:
        if "incident_type_primary" in obj:
            if obj["incident_type_primary"] == "ASSAULT":
                dict["ASSAULT"] += 1
            elif obj["incident_type_primary"] == "RAPE":
                dict["RAPE"] += 1
            elif obj["incident_type_primary"] == "UUV":
                dict["UUV"] += 1
            elif obj["incident_type_primary"] == "LARCENY/THEFT":
                dict["LARCENY/THEFT"] += 1
            elif obj["incident_type_primary"] == "BURGLARY":
                dict["BURGLARY"] += 1
            elif obj["incident_type_primary"] == "SEXUAL ABUSE":
                dict["SEXUAL ABUSE"] += 1
            elif obj["incident_type_primary"] == "ROBBERY":
                dict["ROBBERY"] += 1
            elif obj["incident_type_primary"] == "THEFT OF SERVICES":
                dict["THEFT OF SERVICES"] += 1
    print(dict)
    return json.dumps(dict)
