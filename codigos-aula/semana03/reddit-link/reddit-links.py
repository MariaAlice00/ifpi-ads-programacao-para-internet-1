import requests
import requests_cache
from bs4 import BeautifulSoup

requests_cache.install_cache('banco-dois')
response = requests.get('https://www.reddit.com/r/investimentos/')

if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')

    links = soup.find_all('a')
    for link in links:
        print(link)
    
    print('\n\nStatus Code: ', response.status_code)

else:
    print('Erro ao realizar a requisição')
    print('Status Code: ', response.status_code)


    