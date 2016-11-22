/**
 * Created by Administrator on 2016/11/21.
 */
function displaySubMenu(li) {
    var subMenu = li.getElementsByTagName("ul")[0];
    subMenu.style.display = "block";

}
function hideSubMenu(li) {
    var subMenu = li.getElementsByTagName("ul")[0];
    subMenu.style.display = "none";

}
/*
*  广告页面
*/
window.onload = init;
function init() {
    window.open("ad.html","advertising","width=500,height=500,left=200");
}
function closeAD() {
    var obj = document.getElementById("div");
    obj.style.display = "none";
}