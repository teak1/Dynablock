var url;
function submit(){
  var reason = document.getElementsByTagName("textarea")[0].value;
  var json = {"reason":reason,"url":url};
  window.location = "teak1.github.io/Dynablock/submit.html?"+json;
}
window.onload=function(){
var search = window.location.search.split("").shift().join("");
search = JSON.parse(search);
url = search.url;
document.getElementById("url").innerHTML=search.url;
}
