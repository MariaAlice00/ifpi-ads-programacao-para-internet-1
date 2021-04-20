import requests
import requests_cache
from bs4 import BeautifulSoup

requests_cache.install_cache('banco')

resposta = True
while resposta == True:
    url = str(input('Digite uma url: '))
    response = requests.get(url)

    soup = BeautifulSoup(response.text, 'html.parser')

    links = soup.find_all('a')
    cont = 0
    lista_links = []
    for link in links:
        if "http" in link.get('href'):
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
    print(f'Link escolhido: {link_escolhido}\n')

    response_link = requests.get(link_escolhido)

    soup_link = BeautifulSoup(response_link.text, 'html.parser')

    for link in soup_link.find_all('p'):
        text = link.getText().split()
        #print(text)

        word_left = 0
        word_right = 0
        left = ''
        right = ''

        for word in text:
            if word == chave:
                pos = text.index(word) # onde está palavra no texto, posição

                c = 0
                while True:
                    c += 1
                    word_left += len(text[pos-c])
                    if word_left > 15:
                        break
                    left += ' ' + text[pos - c]

                left = left.split()
                new_left = ''
                for c in range(len(left)-1, -1, -1):
                    new_left += ' ' + left[c]


                c = 0
                while True:
                    c += 1
                    word_right += len(text[pos+c])
                    if word_right > 15:
                        break
                    right += ' ' + text[pos + c]


                print('>>> {} {}{}'.format(new_left, word, right))
        
    r = int(input('\nQuer continuar?[1 - sim / 2 - não] >>> '))
    if r == 2:
        break
    
    print()


print('FIM')

# https://www.reddit.com/r/investimentos/
# 6 - valores