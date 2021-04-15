import requests
import requests_cache
from bs4 import BeautifulSoup

requests_cache.install_cache('banco')
response = requests.get('https://www.reddit.com/r/investimentos/')

if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')

    lista = soup.find_all('h3')
    for h3 in lista:
        fixed_html = h3.prettify()
        print(fixed_html)
    
    print(response.status_code)

else:
    print('Erro ao realizar a requisição')
    print(response.status_code)