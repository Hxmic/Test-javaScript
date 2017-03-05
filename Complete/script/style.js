/**
 * Created by Administrator on 2017/3/4.
 * c菜单下拉
 */
 window.onload = init;
 var i = 1;
 var mark;

function displaySubMenu(li) {
    var submenu = li.getElementsByTagName("ul")[0];
    submenu.style.display = "block"
}
function hideSubMenu(li) {
    var submenu = li.getElementsByTagName("ul")[0];
    submenu.style.display = "none";
}
/*
tab标签
 */
function showDiv(n, m) {
    var liLg = document.getElementsByClassName("li");
    for (var i = 1; i <= liLg.length; i++) {
        var allDiv = document.getElementById("div" + i);
        var allLi = document.getElementById("li" + i);
        allDiv.style.display = "none";
        allLi.style.background = "darkgray";
    }
    m.style.background = "white";
    var obj = document.getElementById("div" + n);
    obj.style.display = "block";
}
function showDiv1(n, m) {
    var liLg = document.getElementsByClassName("li1");
    for (var i = 1; i <= liLg.length; i++) {
        var allDiv = document.getElementById("Div" + i);
        var allLi = document.getElementById("Li" + i);
        allDiv.style.display = "none";
        allLi.style.color = "darkgray";
    }
    m.style.color = "green";
    var obj = document.getElementById("Div" + n);
    obj.style.display = "block";
}
/**
 * 图片切换
 */

//初始化
function init() {
    var obj = document.getElementById("ig1");
    obj.style.background = "darkgray";
    mark = window.setInterval("images()", 1000);
}
//图片自动切换
function images() {
    i++;
    if (i > 6)
        i = 1;
    var obj = document.getElementById("im");
    obj.src = "images/a" + i + ".jpg";
    col();
    var color = document.getElementById("ig" + i);
    color.style.background = "darkgray";
}
//鼠标移入停止
function stopTu() {
    window.clearInterval(mark);
}
//鼠标移出开始
function startTu() {
    mark = window.setInterval("images()", 1000);
}
//鼠标移入图片停止
function pauseImg(n, m) {
    i = n;
    var obj = document.getElementById("im");
    obj.src = "images/a" + n + ".jpg";
    for (var j = 1; j <= 6; j++) {
        var obj1 = document.getElementById("ig" + j);
        obj1.style.background = "white";
    }
    window.clearInterval(mark);
    m.style.background = "darkgray";
}

function activeImg() {
    mark = window.setInterval("images()", 1000);
}

function col() {
    for (var j = 1; j <= 6; j++) {
        var obj1 = document.getElementById("ig" + j);
        obj1.style.background = "white";
    }
}
