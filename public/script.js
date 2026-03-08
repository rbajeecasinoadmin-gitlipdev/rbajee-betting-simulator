function play(){

let bet=document.getElementById("bet").value;

fetch("/api/bet/"+bet)
.then(res=>res.json())
.then(data=>{

document.getElementById("result").innerText=
"Result: "+data.result;

});

}
