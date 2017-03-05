/**
 * Created by Administrator on 2017/3/4.
 */
function displaySubMenu(li) {
    var submenu = li.getElementsByTagName("ul")[0];
    submenu.style.display = "block"
}
function hideSubMenu(li) {
    var submenu = li.getElementsByTagName("ul")[0];
    submenu.style.display = "none";
}

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
