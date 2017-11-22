//var oInput=document.getElementById("add");
var oInput=document.getElementsByTagName("input")[0];
var addBtn=document.getElementById("addBtn");

oInput.onkeydown=function(event){

    var event=event||window.event;
    if(event.keyCode==13){
        //添加数据
        var data=this.value;
        addData(data);
        //清空数据
        clearData();
    }
}

addBtn.onclick=function(event){
    var event=event||window.event;
    
        //添加数据
        var data=oInput.value;
        addData(data);
        //清空数据
        clearData();
}

oInput.oninput=function(){
    var arrLi=document.getElementsByTagName("li");
    var arr=[];

    for(var i=0;i<arrLi.length;i++){
        if(arrLi[i].firstChild.innerHTML.trim().indexOf(this.value.trim())!=-1){
            arr.push(i);
        }      
    }
    show(arr);
}

function show(arr){
    var arrLi=document.getElementsByClassName("main");
    

    for(i=0;i<arrLi.length;i++){
        arrLi[i].style.display="none";
    }

    if(arr.length>0){
        for(var i=0;i<arr.length;i++){
            arrLi[arr[i]].style.display="block";
        }
    }else{
        for(var i=0;i<arrLi.length;i++){
            arrLi[i].style.display="block";
        }
    }
}

function addData(data){
    var tempDiv=document.createElement("div");
    var tempBtn=document.createElement("button");
    var tempSpan=document.createElement("span");
    var oMain=document.getElementsByClassName("main")[0];
    

    tempDiv.className="list";
    tempBtn.innerHTML="完成";
    tempBtn.name="delete";
    tempSpan.innerHTML=data;
    tempDiv.appendChild(tempSpan);
    tempDiv.appendChild(tempBtn);
    oMain.appendChild(tempDiv);
}

function clearData(){
    var oInput=document.getElementById("add");
    oInput.value="";
}

var oMain=document.getElementsByClassName("main")[0];
oMain.onclick=function(event){
    var event=event||windows.event;
    var target=event.target;

    if(target.name=="delete"){
        target.parentNode.parentNode.removeChild(target.parentNode);
    }
}