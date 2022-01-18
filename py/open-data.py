#串接、擷取公開資料
import csv
import urllib.request as request
import json
src="https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json"
with request.urlopen(src) as response:
    data=json.load(response) #利用 json模組處理json資料格式
# print(data)

#取得景點名稱
viewlist=data["result"]["results"]
filednames=["景點名稱:","區域:","經度:","緯度:","景點照片:"]
with open("data.csv","w",encoding="utf-8") as file:
        for area in viewlist:
            # 使用lower()轉為小寫
            s1=area["file"].lower()
            pic=s1.split('.jpg')[0]+".jpg"
            # view=print('景點名稱:'+i['stitle'],'區域:'+i["address"][5:8],'經度:',i["longitude"],'緯度:',i["latitude"],'景點照片:',pic)
            # view='景點名稱:'+i['stitle']+" "+'區域:'+i["address"][5:8]+" "+'經度:'+i["longitude"]+" "+'緯度:'+i["latitude"]+" "+'景點照片:'+pic
            view=area['stitle']+" "+area["address"][5:8]+" "+area["longitude"]+" "+area["latitude"]+" "+pic
            all=view.split(', ')
            print(all)
            writer = csv.writer(file)
            writer.writerow(all)
             
    
    
    
    