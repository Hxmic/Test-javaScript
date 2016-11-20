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