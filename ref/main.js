var s = confirm("request whitelist?");
if(s){
   var url = window.location.origin;
   window.location="https://teak1.github.io/Dynablock/?"+JSON.stringify({"url":url});
}
