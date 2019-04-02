//banner轮播自动切换
var list = document.getElementById("list");
var imgs = list.getElementsByTagName("img");
var btns = document.getElementById("btn").getElementsByTagName("span");
// var listLeft = list.style.left;下方play()函数体中不可用
var index = 0;
function play() {    
if(index < (imgs.length-1)) {
    index ++;    
}else {
    index =0;
}
var moveLeft = -1920*index;
list.style.left = moveLeft + 'px';
}
setInterval(play,3000);

//banner角标提示

//banner角标手动切换


