var thisURL = "teak1.github.io/Dynablock/blocker.js";
function exec(){
  var search = "";
  var scr = document.getElementsByTagName("script");
  alert(scr.length);
  for(var i = 0;i<scr.length;i++){
    try{
      document.body.innerHTML+=scr[i].src;
      if(scr[i].src.split("?").includes(thisURL)){
        search=scr[i].src;
      }
    }catch(e){
      document.body.innerHTML=e;
    }
  }
  var interp = JSON.parse(search.split("").shift().join(""));
  var s = confirm("request whitelist?");
if(s){
   var url = window.location.origin;
   window.location="https://teak1.github.io/Dynablock/?"+JSON.stringify({"url":url});
}
}
setTimeout(exec,1000);
