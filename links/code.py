import requests
import requests_cache
from bs4 import BeautifulSoup

requests_cache.install_cache('banco')


url = str(input('Digite uma url: '))
response = requests.get(url)


soup = BeautifulSoup(response.text, 'html.parser')


links = soup.find_all('a')
cont = 0
lista_links = []
for link in links:
    cont += 1
    print(f'{cont} - ', end='')
    link_href = link.get('href')
    print(link_href)
    lista_links.append(link_href)
    if cont >= 10:
        break


# Solicite do usuário uma palavra-chave e o número de um dos links;

chave = str(input('Digite uma palavra chave: '))
num_link = int(input('Número de um dos links: '))


# Baixe a página cujo link foi escolhido;

link_escolhido = lista_links[num_link - 1]
print()
print(link_escolhido)


response_link = requests.get(link_escolhido)


soup_link = BeautifulSoup(response_link.text, 'html.parser')

texto = soup.get_text()
print((type(texto)))
print(texto.count(chave))
print(texto)
