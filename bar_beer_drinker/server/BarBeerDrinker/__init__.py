from flask import Flask
from flask import jsonify
from flask import make_response
from flask import request
import json
from BarBeerDrinker import database


app = Flask(__name__)

@app.route('/api/bar', methods=["GET"])
def get_bars():
    return jsonify(database.get_bars())


@app.route('/api/bar/<name>', methods=["GET"])
def find_bar(name):
    try:
        if name is None:
            raise ValueError("Bar is not specified.")
        bar = database.find_bar(name)
        if bar is None:
            return make_response("No bar found with the given name.", 404)
        return jsonify(bar)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)


@app.route('/api/beers_cheaper_than', methods=["POST"])
def find_beers_cheaper_than():
    body = json.loads(request.data)
    max_price = body['maxPrice']
    return jsonify(database.filter_Items(max_price))


@app.route('/api/transaction', methods=["GET"])
def get_transactions():
    return jsonify(database.get_transactions())


@app.route('/api/topSpenders/<name>', methods=['GET'])
def get_topSpenders(name):
    try:
        if name is None:
            raise ValueError('Bar is not specified.')
        bar = database.find_bar(name)
        if bar is None:
            return make_response("No bar found with that given name.", 404)
        return jsonify(database.get_bar_topSpenders(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)


@app.route('/api/topSelling/<name>', methods=['GET'])
def get_bar_topSelling(name):
    try:
        if name is None:
            raise ValueError('Bar is not specified.')
        bar = database.find_bar(name)
        if bar is None:
            return make_response("No bar found with that given name.", 404)
        return jsonify(database.get_bar_topSelling(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)


@app.route('/api/beer', methods=["GET"])
def get_beers():
    return jsonify(database.get_beers())


@app.route('/api/beer/<name>', methods=["GET"])
def find_beer(name):
    try:
        if name is None:
            raise ValueError("Beer is not specified.")
        beer = database.find_beer(name)
        if beer is None:
            return make_response("No beer found with the given name.", 404)
        return jsonify(beer)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)


@app.route('/api/topSellingBeer/<name>', methods=['GET'])
def get_beer_topSelling(name):
    try:
        if name is None:
            raise ValueError('Beer is not specified.')
        beer = database.find_beer(name)
        if beer is None:
            return make_response("No beer found with that given name.", 404)
        return jsonify(database.get_beer_topSelling(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)


@app.route('/api/topConsumers/<name>', methods=['GET'])
def get_beer_topConsumers(name):
    try:
        if name is None:
            raise ValueError('Beer is not specified.')
        beer = database.find_beer(name)
        if beer is None:
            return make_response("No beer found with that given name.", 404)
        return jsonify(database.get_beer_topConsumers(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)


@app.route('/api/barWeeklyFilter/<name>', methods=['GET'])
def get_bar_weeklyFilter(name):
    try:
        if name is None:
            raise ValueError('Bar is not specified.')
        bar = database.find_bar(name)
        if bar is None:
            return make_response("No bar found with that given name.", 404)
        return jsonify(database.get_bar_weeklyFilter(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)


@app.route('/api/barDailyFilter/<name>/<day>', methods=['GET'])
def get_bar_dailyFilter(name, day):
    try:
        if name is None:
            raise ValueError('Bar is not specified.')
        bar = database.find_bar(name)
        if bar is None:
            return make_response("No bar found with that given name.", 404)
        return jsonify(database.get_bar_dailyFilter(name, day))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)


@app.route('/api/beerWeeklyFilter/<name>', methods=['GET'])
def get_beer_weeklyFilter(name):
    try:
        if name is None:
            raise ValueError('Beer is not specified.')
        beer = database.find_beer(name)
        if beer is None:
            return make_response("No beer found with that given name.", 404)
        return jsonify(database.get_beer_weeklyFilter(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)


@app.route('/api/drinkerTransactions/<name>', methods=['GET'])
def get_drinker_transactions(name):
    try:
        if name is None:
            raise ValueError('Drinker is not specified.')
        drinker = database.find_drinker(name)
        if drinker is None:
            return make_response("No drinker found with that given name.", 404)
        return jsonify(database.get_drinker_transactions(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)


@app.route('/api/drinker', methods=["GET"])
def get_drinkers():
    return jsonify(database.get_drinkers())


@app.route('/api/drinker/<name>', methods=["GET"])
def find_drinker(name):
    try:
        if name is None:
            raise ValueError("Drinker is not specified.")
        drinker = database.find_drinker(name)
        if drinker is None:
            return make_response("No drinker found with the given name.", 404)
        return jsonify(drinker)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)


@app.route('/api/drinkerOrders/<name>', methods=['GET'])
def get_drinker_orders(name):
    try:
        if name is None:
            raise ValueError('Drinker is not specified.')
        drinker = database.find_drinker(name)
        if drinker is None:
            return make_response("No drinker found with that given name.", 404)
        return jsonify(database.get_drinker_orders(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)


@app.route('/api/drinkerFilter/<name>', methods=['GET'])
def get_drinker_monthlyFilter(name):
    try:
        if name is None:
            raise ValueError('Drinker is not specified.')
        drinker = database.find_drinker(name)
        if drinker is None:
            return make_response("No drinker found with that given name.", 404)
        return jsonify(database.get_drinker_monthlyFilter(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)


@app.route('/api/barTopManu/<name>', methods=['GET'])
def get_bar_topManu(name):
    try:
        if name is None:
            raise ValueError('Bar is not specified.')
        bar = database.find_bar(name)
        if bar is None:
            return make_response("No bar found with that given name.", 404)
        return jsonify(database.get_bar_topManu(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)







@app.route('/api/modify', methods=["POST"])
def insert_items():
        body = json.loads(request.data)
        name = body['name']
        manufacture = body['manufacture']
        type = body['type']
        return jsonify(database.insert_itemsDB(name, manufacture, type))

@app.route('/api/modify/insertBars', methods=["POST"])
def insert_bars():
        body = json.loads(request.data)
        name = body['name']
        address = body['address']
        state = body['state']
        return jsonify(database.insert_barsDB(name, address, state))

@app.route('/api/modify/insertDrinkers', methods=["POST"])
def insert_drinkers():
        body = json.loads(request.data)
        name = body['name']
        email = body['email']
        address = body['address']
        state = body['state']
        return jsonify(database.insert_drinkersDB(name, email, address, state))

@app.route('/api/modify/insertFrequents', methods=["POST"])
def insert_frequents():
        body = json.loads(request.data)
        drinker = body['drinker']
        email = body['email']
        barname = body['barname']
        return jsonify(database.insert_frequentsDB(drinker, email, barname))

@app.route('/api/modify/insertisOpen', methods=["POST"])
def insert_isOpen():
        body = json.loads(request.data)
        name = body['name']
        address = body['address']
        day = body['day']
        open = body['open']
        close = body['close']
        return jsonify(database.insert_isOpenDB(name, address, day, open, close))

@app.route('/api/modify/insertLikes', methods=["POST"])
def insert_likes():
        body = json.loads(request.data)
        name = body['name']
        email = body['email']
        beer = body['beer']
        return jsonify(database.insert_likesDB(name, email, beer))

@app.route('/api/modify/insertSells', methods=["POST"])
def insert_Sells():
        body = json.loads(request.data)
        barname = body['barname']
        item = body['item']
        price = body['price']
        address = body['address']
        return jsonify(database.insert_sellsdb(barname, item, price, address))

@app.route('/api/modify/insertTransactions', methods=["POST"])
def insert_Transactions():
        body = json.loads(request.data)
        transactionID = body['transactionID']
        total = body['total']
        tip = body['tip']
        time = body['time']
        day = body['day']
        drinker = body['drinker']
        email = body['email']
        return jsonify(database.insert_transactionsDB(transactionID, total, tip, time, day, drinker, email))

@app.route('/api/modify/insertBills', methods=["POST"])
def insert_Bills():
        body = json.loads(request.data)
        transactionID = body['transactionID']
        item = body['item']
        barname = body['barname']
        uniqueID = body['uniqueID']
        return jsonify(database.insert_billsdb(transactionID, item, barname, uniqueID))