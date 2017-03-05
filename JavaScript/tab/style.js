function showDiv(n, m) {
    for (var i = 1; i <= 4; i++) {
        var allDiv = document.getElementById("div" + i);
        allDiv.style.display = "none";
    }


    for (var i = 1; i <= 4; i++) {
        var allLi = document.getElementById("li" + i);
        allLi.style.background = "white";
    }
    //此方法引入一个参数
    m.style.background = "red";
        //此方法不引入参数
        /*for(var i=1;i<=4;i++){
         var allLi = document.getElementById("li"+i);
         allLi.style.background="white";
         }
         //获取li对象
         var liobj= document.getElementById("li"+n);
         liobj.style.background="red";*/

        //获取div对象
        var obj = document.getElementById("div" + n);
        obj.style.display = "block";
}
