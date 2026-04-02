import requests
url='http://127.0.0.1:8000/com.gamestart/v1/order/send'
body={'email':'test@example.com','order':{'id':'123','date':'2026-04-01','items':[{'name':'Test','qty':1}]}}
try:
    r=requests.post(url,json=body)
    print('status', r.status_code)
    print('text', r.text)
except Exception as e:
    print('exception', e)
