document.addEventListener("DOMContentLoaded",init);
let viewData="";
function init(){
    //建立一個新的XMLHttpRequest
    var xhr = new XMLHttpRequest();
    //設定這個xhr來get線上json檔案
    xhr.open('get','https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json',true);
    //傳送這個xhr的請求
    xhr.send(null); //傳送資料（若上面使用'get'，則此欄填寫空值 null ）
    //當取得xhr回應後，執行這個function
    xhr.onload = function(){
    //檢查狀態碼，若非200連線ok則顯示錯誤訊息
    if(xhr.status == 200){
        viewData = JSON.parse(xhr.responseText);
         const attrActions = viewData.result.results;
        // console.log(attrActions);
        
        for(let i=0;i<8;i++){
            let stitle = attrActions[i].stitle //跑i個景點名稱
            let pic = (attrActions[i].file).toLowerCase().split("jpg")[0]+"jpg"
            const box_item=document.createElement("div")
            box_item.setAttribute("class","box_item")
            box_item.setAttribute("id",i)
            const my_box = document.querySelector(".my_box")
            my_box.appendChild(box_item)
            const imgTag = document.createElement("img")
            imgTag.src=pic
            const img_id = document.getElementById(i)
            img_id.appendChild(imgTag)
            const textTag = document.createElement("p")
            textTag.setAttribute("class","point")
            textTag.innerText = stitle
            img_id.appendChild(textTag)
        }
        
    }else{
        alert("取得資料時發生錯誤，請檢查網路狀態並重新整理");
        }
    }   
}