import bottle
import buffalo
import both


@bottle.route('/')
def hosthtml():
    return bottle.static_file("index.html", root="")


@bottle.route('/chart.js')
def hostjs():
    return bottle.static_file("chart.js", root="")


@bottle.route('/pie.js')
def hostpie():
    return bottle.static_file("pie.js", root="")


@bottle.route('/buffalo')
def bufdata():
    return buffalo.api("https://data.buffalony.gov/resource/d6g9-xbgu.json")


@bottle.route('/nyc')
def nycdata():
    return both.mix("https://data.cityofnewyork.us/resource/9s4h-37hy.json")


bottle.run(host="0.0.0.0", port=8080, debug=True)