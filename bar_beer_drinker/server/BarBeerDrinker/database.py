from sqlalchemy import create_engine
from sqlalchemy import sql

from BarBeerDrinker import config

engine = create_engine(config.database_uri)

def get_bars():
    with engine.connect() as con:
        rs = con.execute("SELECT name, address, state FROM bars;")
        return [dict(row) for row in rs]

def find_bar(name):
    with engine.connect() as con:
        query = sql.text(
            "SELECT name, address, state FROM bars WHERE name = :name;"
        )

        rs = con.execute(query, name=name)
        result = rs.first()
        if result is None:
            return None
        return dict(result)

def filter_Items(max_price):
    with engine.connect() as con:
        query = sql.text(
         "SELECT * FROM Sells WHERE price < :max_price;"
        )
        rs = con.execute(query, max_price=max_price)
        results = [dict(row) for row in rs]
        for r in results:
            r['price'] = float(r['price'])
        return results

def get_drinkers():
    with engine.connect() as con:
        rs = con.execute('SELECT name, email, address, state FROM drinkers;')
        return [dict(row) for row in rs]

def get_transactions():
    with engine.connect() as con:
        rs = con.execute("SELECT * FROM Transactions;")
        results = [dict(row) for row in rs]
        for r in results:
            r['time'] = str(r['time'])
            r['total'] = float(r['total'])
            r['tip'] = float(r['tip'])
        return results

def get_bar_topSpenders(bar_name):
    with engine.connect() as con:
        query = sql.text(
            'SELECT DISTINCT t1.drinker, b2.barname, t1.total FROM Transactions t1, Bills b2 WHERE t1.transactionID = b2.transactionID AND b2.barname = :bar ORDER BY t1.total desc LIMIT 25;;'
            )
        rs = con.execute(query, bar = bar_name)
        results = [dict(row) for row in rs]
        for r in results:
            r['total'] = float(r['total'])
        return results

def get_bar_topSelling(bar_name):
    with engine.connect() as con:
        query = sql.text('SELECT l.item, COUNT(*) as num FROM Bills l, Items b WHERE b.type = "beer" AND b.name = l.item AND l.barname = :bar GROUP BY b.name ORDER BY num desc;')
        rs = con.execute(query, bar = bar_name)
        results = [dict(row) for row in rs]
        return results

def get_beers():
    with engine.connect() as con:
        rs = con.execute('SELECT name, manufacture FROM Items WHERE Items.type = "beer";')
        return [dict(row) for row in rs]

def find_beer(name):
    with engine.connect() as con:
        query = sql.text(
            'SELECT t1.name FROM Items t1 WHERE t1.type = "beer" AND t1.name = :name;'
        )

        rs = con.execute(query, name=name)
        result = rs.first()
        if result is None:
            return None
        return dict(result)

def get_beer_topSelling(beer):
    with engine.connect() as con:
        query = sql.text(
                'SELECT b1.barname, COUNT(b1.item) AS numBeer FROM Bills b1, Transactions t1, Items i1  WHERE i1.type = "beer" AND i1.name = b1.item AND t1.transactionID = b1.transactionID AND b1.item = :beer GROUP BY b1.barname ORDER BY numBeer desc LIMIT 10;'
                )
        rs = con.execute(query, beer=beer)
        results = [dict(row) for row in rs]
        return results

def get_beer_topConsumers(beer):
    with engine.connect() as con:
        query = sql.text(
                'SELECT t.drinker as drinker, COUNT(*) AS numBeer FROM Transactions t, Bills b, Items i WHERE t.transactionID = b.transactionID AND b.item = :beer AND b.item = i.name AND i.type = "beer" GROUP BY t.drinker ORDER BY numBeer desc LIMIT 10;'
                )
        rs = con.execute(query, beer=beer)
        results = [dict(row) for row in rs]
        return results

def get_bar_weeklyFilter(bar_name):
    with engine.connect() as con:
        query = sql.text('SELECT DISTINCT COUNT(*) as numBills, t1.day FROM Transactions t1, Bills t2 WHERE  t1.transactionID = t2.transactionID AND t2.barname = :bar  GROUP BY t1.day ORDER BY \
	CASE \
		WHEN Day = "Monday" THEN 1 \
		WHEN Day = "Tuesday" THEN 2 \
		WHEN Day = "Wednesday" THEN 3 \
		WHEN Day = "Thursday" THEN 4 \
		WHEN Day = "Friday" THEN 5 \
		WHEN Day = "Saturday" THEN 6 \
		WHEN Day = "Sunday" THEN 7 \
	END; \
        ')
        rs = con.execute(query, bar = bar_name)
        results = [dict(row) for row in rs]
        return results

def get_bar_dailyFilter(bar_name, day):
    with engine.connect() as con:
        query = sql.text(
            'SELECT time_format(t1.time, "%h:%i %p") as time, COUNT(t1.transactionID) as total FROM Transactions t1, Bills t2 WHERE t1.transactionID = t2.transactionID AND t1.day = :days AND t2.barname = :bar GROUP BY CONCAT(TIME_FORMAT(t1.time, "%H:"), FLOOR(TIME_FORMAT(t1.time,"%h")/60)*60) ORDER BY (time_format(t1.time, "%h"));'
            )
        rs = con.execute(query, bar = bar_name, days = day)
        results = [dict(row) for row in rs]
        return results

def get_beer_weeklyFilter(beer_name):
    with engine.connect() as con:
        query = sql.text(' SELECT COUNT(t1.transactionID) as total, t1.day as day FROM Transactions t1, Bills t2, Items i WHERE  t1.transactionID = t2.transactionID AND t2.item = i.name AND i.type = "Beer" AND t2.item = :name GROUP BY t1.day ORDER BY \
	CASE \
		WHEN Day = "Monday" THEN 1 \
		WHEN Day = "Tuesday" THEN 2 \
		WHEN Day = "Wednesday" THEN 3 \
		WHEN Day = "Thursday" THEN 4 \
		WHEN Day = "Friday" THEN 5 \
		WHEN Day = "Saturday" THEN 6 \
		WHEN Day = "Sunday" THEN 7 \
	END; \
        ')
        rs = con.execute(query, name = beer_name)
        results = [dict(row) for row in rs]
        return results






