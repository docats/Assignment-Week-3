document.addEventListener("DOMContentLoaded",init);

function init(){
    getViewData();
    
}

//全部的行政區資料(全域變數)
var areaData="";
function getAreaData(){
    //建立一個新的XMLHttpRequest
    var xhr = new XMLHttpRequest();
    //設定這個xhr來get放在data資料夾底下的json檔案
    xhr.open('get','../data/taipei-attractions-assignment.json',true);
    //傳送這個xhr的請求
    xhr.send(null);
    //當取得xhr回應後，執行這個function
    xhr.onload = function(){
        //檢查狀態碼，若非200連線ok則顯示錯誤訊息
        if (xhr.status == 200){
            //JSON.parse()方法會把一個JSON字串轉換成JavsScript的數值或物件
            areaData = JSON.parse(xhr.response);
            // getAreaData();
            console.log(areaData);
        }else{
            alert("取得資料時發生錯誤，請檢查網路狀態並重新整理");
        }
    }
}

// 取得行政區景點資料
var viewData="";
function getViewData(){
    var xhr = new XMLHttpRequest();
    xhr.open('get','../data/taipei-attractions-assignment.json',true);
    xhr.send(null);
    xhr.onload = function(){
        if(xhr.status == 200){
            viewData = JSON.parse(xhr.responseText);
            console.log(viewData);
        }else{
            alert("取得資料時發生錯誤，請檢查網路狀態並重新整理");
        }
    }
}

// 設定景點資料
var noDataText = "未提供" //無資料時顯示的文字
var nowAreaName="";
var nowViewData=[];
var nowViewDataCnt = 0;
function setViewData(){
    for(var i=0;i<viewData.length;i++){
        var dataTitle = viewData[i].stitle || noDataText;
    }
    
}