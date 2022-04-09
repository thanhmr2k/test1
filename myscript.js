function display_c() {
    var refresh = 1000; // Refresh moi 1/1000s
    mytime = setTimeout("display_ct()", refresh);
  }
  //them dong ho
  function display_ct() {
    var CDate = new Date();
    var NewDate = CDate.toDateString();
    NewDate = NewDate + " - " + CDate.toLocaleTimeString();
    document.getElementById("ct").innerHTML = NewDate;
    display_c();
  }
  //doi mau link on hover
  var menu = document.getElementById("menu");
  var lis = menu.getElementsByTagName("li");
  for (var i = 0; i < lis.length; i++) {
    var li = lis[i];
    li.addEventListener("mouseover", function () {
      this.getElementsByTagName("a")[0].style.color = "#8080ff";
    });
    li.addEventListener("mouseout", function () {
      this.getElementsByTagName("a")[0].style.color = "#000000";
    });
  }