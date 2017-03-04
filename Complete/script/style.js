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
