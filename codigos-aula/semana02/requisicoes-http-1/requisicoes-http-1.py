import requests
import requests_cache

#importante usar requests cache pra otimizar o download e evitar "bloqueios"
requests_cache.install_cache()
for i in range(10):
    requests.get('https://httpbin.org/delay/1')
    print('requisição ', i)
