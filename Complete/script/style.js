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

function showDiv(n,m) {
  var liLg=document.getElementsByClassName("li");
  for(var i=1;i<=liLg.length;i++){
    var allDiv = document.getElementById("div"+i);
    var allLi = document.getElementById("li"+i);
    allDiv.style.display = "none";
    allLi.style.background="white";
  }
  m.style.background="red";
  var obj = document.getElementById("div"+n);
  obj.style.display = "block";
}
