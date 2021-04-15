from bs4 import BeautifulSoup

html = """"
    <html>
        <head>
            <title>Título da página</title>
        </head>
        <body>
            <p>Olá, este é um parágrafo</p>
            <p>Olá, este é um outro parágrafo</p>
            <p>Olá, este é um parágrafo com <strong>negrito</strong></p>
        </body>
    </html>
"""

soup = BeautifulSoup(html, 'html.parser')

print(soup)
print(soup.title)
print(soup.find_all('p'))