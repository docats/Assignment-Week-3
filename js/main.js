document.addEventListener("DOMContentLoaded",init);

function init(){
    getViewData();
    setViewData();
    showViewData();
    createView();
    // console.log(viewData);
}

//全部的行政區資料(全域變數)
var areaData="";
function getAreaData(){
    //建立一個新的XMLHttpRequest
    var xhr = new XMLHttpRequest();
    //設定這個xhr來get放在data資料夾底下的json檔案
    xhr.open('get','../data/taipei-attractions-assignment.json',true);
    //傳送這個xhr的請求
    xhr.send(null); //傳送資料（若上面使用'get'，則此欄填寫空值 null ）
    //當取得xhr回應後，執行這個function
    xhr.onload = function(){
        //檢查狀態碼，若非200連線ok則顯示錯誤訊息
        if (xhr.status == 200){
            //JSON.parse()方法會把一個JSON字串轉換成JavsScript的數值或物件
            areaData = JSON.parse(xhr.response);
            getAreaData();
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
    xhr.send(null); //傳送資料（若上面使用'get'，則此欄填寫空值 null ）
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
       
        //景點圖片處理,因有可能非陣列,對其進行陣列判斷
        if(viewData[i].file.img.length === undefined){
            var dataPic = viewData[i].file.img['#text'] || '';
            var dataPicDesc= viewData[i].file.img['-description']|| noDataText;
        }else{
            var dataPic = viewData[i].file.img[0]['#text']|| '';
            var dataPicDesc = viewData[i].file.img[0]['-description'] || noDataText;
        }
        if(dataAreaName == nowAreaName){
            nowViewData.push({
                'dataTitle':dataTitle,
                'dataPic':dataPic,
                'dataPicDesc':dataPicDesc,
            });
        }
    }
    nowViewDataCnt = nowViewData.length;
    
    console.log(nowViewDataCnt);
    // console.log(nowViewData);
}

// 建立景點
function createView(){
    var viewBox = '';
    viewBox+='<div class="info-box">' +
    '<div class="info-box__top">' +
    '<img class="info-box__img" src="' + nowViewData[i].dataPic + '" alt="' + nowViewData[i].dataPicDesc + '">' +
    '<span class="info-box__view-name">' + nowViewData[i].dataTitle + '</span>' +
    '<span class="info-box__area-name">' + nowAreaName + '</span>' +
    '</div>' +
    '<div class="info-box__bottom">' +
    '<span class="info-box__span"><b>地址:</b>' + nowViewData[i].dataAddress + '</span>' +
    '<span class="info-box__span"><b>電話:</b>' + nowViewData[i].dataTel + '</span>' +
    '<span class="info-box__span"><b>時間:</b>' + nowViewData[i].dataOpenTime + '</span>' +
    '<button type="button" class="button button--readMore" data-viewNo="' + nowViewData[i].dataNo + '">景點介紹</span>' +
    '</div>' +
    '</div>';
    document.querySelector('.box-area').innerHTML = viewBox;
}


// 顯示景點資料框
function showViewData(){
    
    
    
    

}