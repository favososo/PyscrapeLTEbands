from os import system
import re
from bs4 import BeautifulSoup
from urllib.request import urlopen
import html
import pymysql

Opage = "/wiki/List_of_LTE_networks"

def getLinks(articleUrl):
    html = urlopen("http://en.wikipedia.org" + articleUrl)
    bsObj = BeautifulSoup(html, "html.parser")
    pages = []
    pages.append(articleUrl)
    for link in bsObj.find("div", {"id": "bodyContent"})\
            .findAll("a", href=re.compile("^(/wiki/List_of_LTE)((?!:).)*$")):
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
        content = content.replace('?', '').replace(' ', '')
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

def store(country, operator, bands):
    if bands == '' or int(bands) > 88:
        return
    print("saving a content...")
    print(country + "-" + operator + ":" + bands)
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

        theads = table.find("tr").findAll("th")
        country_index = 0
        operator_index = 0
        band_index = 0
        for index, thead in enumerate(theads):
            column_name = filter_str(thead.text)
            if column_name == 'Country':
                country_index = index
            elif column_name == 'Operator':
                operator_index = index
            elif column_name == 'B':
                band_index = index

        if operator_index == 0 or band_index == 0:
            continue

        rows = table.find("tbody").findAll("tr")
        # empty row numbers

        column_num = len(rows)
        index = 0
        while index < column_num:
            columns = rows[index].findAll("td")
            if len(columns) == 0:
                index += 1
                continue
            if columns[0].has_attr('rowspan'):

                country = filter_str(columns[country_index].text)
                operator = filter_str(columns[operator_index].text)
                bands = filter_str(columns[band_index].text)
                store(country, operator, bands)

                country_span_num = int(columns[0]['rowspan'])
                index1 = 1
                while index1 < country_span_num:
                    columns = rows[index+index1].findAll('td')
                    if columns[0].has_attr('rowspan'):
                        operator = filter_str(columns[operator_index-1].text)
                        bands = filter_str(columns[band_index-1].text)
                        store(country, operator, bands)

                        operator_span_num = int(columns[0]['rowspan'])
                        index2 = 1
                        while index2 < operator_span_num:
                            columns = rows[index+index1+index2].findAll('td')
                            bands = filter_str(columns[band_index-2].text)
                            store(country, operator, bands)
                            index2 += 1
                        index1 += index2
                    else:
                        operator = filter_str(columns[operator_index-1].text)
                        bands = filter_str(columns[band_index-1].text)
                        store(country, operator, bands)
                        index1 += 1
                index += index1

            else:
                country = filter_str(columns[country_index].text)
                operator = filter_str(columns[operator_index].text)
                bands = filter_str(columns[band_index].text)
                store(country, operator, bands)
                index += 1

def getTables2(page, B):
    try:
        website = "https://www.frequencycheck.com/carriers?commit=Search&page=" \
            + str(page) + "&q[country_id_eq]=&q[frequency_bands_id_eq]=" \
            + str(B) + "&q[name_cont]=&q[s]=carrier_frequencies_count+asc"
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


# getTables(Opage)
if __name__ == '__main__':

    conn = pymysql.connect(host='127.0.0.1', port=3306, user='root', passwd='Acedanny79623', db='lte_band', charset='utf8')
    cur = conn.cursor()
    cur.execute("USE lte_band")
    pages = getLinks(Opage)
    for page in pages:
        print("Begin to crawl the page : " + page)
        getTables(page)
    for B in range(1, 43):
        for page in range(1, 22):
            print("Begin to crawl the page : " + str(page) + "of band : " + str(B))
            if getTables2(page, B) == 0:
                break

    cur.close()
    conn.close()

    print("DONE!")
    #system("pause")
