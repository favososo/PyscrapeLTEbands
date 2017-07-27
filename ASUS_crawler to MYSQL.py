from os import system
import re
from bs4 import BeautifulSoup
from urllib.request import urlopen
import html
import pymysql

Opage = "/wiki/List_of_LTE_networks"

conn = pymysql.connect(host='127.0.0.1', port=3306, user='root',
                       passwd='Acedanny79623', db='lte_band', charset='utf8')
cur = conn.cursor()
cur.execute("USE lte_band")


def getLinks(articleUrl):
    html = urlopen("http://en.wikipedia.org" + articleUrl)
    bsObj = BeautifulSoup(html, "html.parser")
    pages = []
    pages.append(articleUrl)
    for link in bsObj.find("div", {"id": "bodyContent"}).findAll("a", href=re.compile("^(/wiki/List_of_LTE)((?!:).)*$")):
        if link.attrs['href'] not in pages:
            pages.append(link.attrs['href'])
    return pages


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


def filter_span_str(content):
    try:
        # reduce words for special use
        content.find("span", {"class": ["sortkey", "flagicon"]}).string = ""
    except BaseException as e:
        # print('\033[93m'+"span?"+str(e))
        return


def start_point(re_country):
    if re_country > 0:
        return 2
    else:
        return 1

    try:
        gss_scopes = ['https://spreadsheets.google.com/feeds']
        gss_client = auth_gss_client(auth_json_path, gss_scopes)
        print("Connction Established")
        return gss_client
    except BaseException as e:
        print("Wrong connection: " + str(e))
        return


def store(country, operator, bands):
    try:
        cur.execute("INSERT INTO band (country, operator, bands) VALUES (\"%s\",\"%s\",\"%s\")",
                    (country, operator, int(bands, 10)))
        cur.connection.commit()
    except BaseException as e:
        print('\033[93m' + "\n" + str(e))


def getTables(articleUrl):
    html = urlopen("http://en.wikipedia.org" + articleUrl)
    bsObj = BeautifulSoup(html, "html.parser")
    # this variable is for saving index
    for table in bsObj.findAll("table", {"class": "wikitable"}):
        try:
            if len(table.tr.findAll("a", {"title": "LTE frequency bands"})) is 0:
                continue
        except BaseException as e:
            print("search table occured wrong : " + str(e))
        rows = table.findAll("tr")
        # empty row numbers
        for row in rows:
            if len(row.findAll(['td'])) == 11:
                temp = row.findAll(['td'])[0]
                filter_span_str(temp)
                country = code2UTF(filter_str(temp.get_text()))

                temp = row.findAll(['td'])[1]
                filter_span_str(temp)
                operator = code2UTF(filter_str(temp.get_text()))

                temp = row.findAll(['td'])[3]
                filter_span_str(temp)
                bands = code2UTF(filter_str(temp.get_text()))
            elif len(row.findAll(['td'])) == 10:
                temp = row.findAll(['td'])[0]
                filter_span_str(temp)
                operator = code2UTF(filter_str(temp.get_text()))

                temp = row.findAll(['td'])[2]
                filter_span_str(temp)
                bands = code2UTF(filter_str(temp.get_text()))
            elif len(row.findAll(['td'])) == 0:
                continue  # pass cause it is header
            if bands == '':
                continue
            else:
                print("saving a content...")
                print(country + "-" + operator + ":" + bands)
                store(country, operator, bands)


# getTables(Opage)
pages = getLinks(Opage)
for page in pages:
    print("Begin to crawl the page : " + page)
    getTables(page)
cur.close()
conn.close()

print("DONE!")
system("pause")
