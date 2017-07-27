from os import system
import re
import html
from bs4 import BeautifulSoup
from urllib.request import urlopen
import pymysql

conn = pymysql.connect(host='127.0.0.1', port=3306, user='root',
                       passwd='Acedanny79623', db='test', charset='utf8')
cur = conn.cursor()
cur.execute("USE lte_band")


def code2UTF(content):
    content = bytes(content, "UTF-8")
    content = content.decode("UTF-8")
    # delete the html escapes
    #content = html.unescape(content)
    return content


def filter_str(content):
    try:
        content = content.replace('\n', '')  # sub <br>
    except BaseException as e:
        print('\033[93m' + "\n" + str(e))
    try:
        content = re.compile('\([0-9|\?]*\)').sub('', content)  # sub (?)
    except BaseException as e:
        print('\033[93m' + "(0-9|?)?" + str(e))
    return content


def store(country, operator, bands):
    try:
        cur.execute("select country from lte_band.band where bands=" +
                    bands + " and operator=\'\\\'" + operator + "\\\'\'")
        temp = "'" + country + "'"
        for unit in cur.fetchall():
            if temp in unit:
                print("exist!")
                return
        print("new data")
        cur.execute("INSERT INTO band (country, operator, bands) VALUES (\"%s\",\"%s\",\"%s\") ",
                    (country, operator, int(bands, 10)))
        cur.connection.commit()
    except BaseException as e:
        print('\033[93m' + "\n" + str(e))


def getTables(page, B):
    try:
        website = "https://www.frequencycheck.com/carriers?commit=Search&page=" \
        + str(page) + "&q[country_id_eq]=&q[frequency_bands_id_eq]=" \
        +str(B) + "&q[name_cont]=&q[s]=carrier_frequencies_count+asc"
        html = urlopen(website)
    except BaseException as e:
        print('\033[93m' + "\n" + str(e))
    bsObj = BeautifulSoup(html, "html.parser")
    # this variable is for saving index
    table = bsObj.find("tbody")
    rows = table.findAll("tr")
    if len(rows) == 0:
        print("Table empty, passing this page...\n")
        return 0
    # empty row numbers
    if B > 14:
        B = B + 2
    for row in rows:
        units = row.findAll('td')
        operator = code2UTF(filter_str(units[0].get_text()))
        country = code2UTF(filter_str(units[2].get_text()))
        print("saving a content...")
        print(country + "-" + operator + ":" + str(B))
        store(country, operator, str(B))
    return 1

for B in range(1, 43):
    for page in range(1, 22):
        print("Begin to crawl the page : " + str(page) + "of band : " + str(B))
        if getTables(page, B) == 0:
            break
cur.close()
conn.close()

print("DONE!")
system("pause")
