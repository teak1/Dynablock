var url;
function submit(){
  var reason = document.getElementsByTagName("textarea")[0].value;
  var json = {"reason":reason,"url":url};
  window.location = "teak1.github.io/Dynablock/submit.html?"+JSON.stringify(json);
}
window.onload=function(){
var search = decodeURI(window.location.search.substring(1))
search = JSON.parse(search);
url = search.url;
document.getElementById("url").innerHTML=search.url;
}
