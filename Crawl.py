import requests
from bs4 import BeautifulSoup

URL = "https://www.bestbuy.ca/en-ca"
print("getting page")
page = requests.get(URL)
print("got page")
print("starting scrape")
soup = BeautifulSoup(page.content, "html.parser")
print(soup)