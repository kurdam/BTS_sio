var para = document.getElementById("para");
alert(para);

var title = document.getElementById("para");

var mPara = document.createElement("p");
mPara.innerHTML = "Je suis créé en JavaScript";

title.appendChild(mPara);

function clickbtn(){
    if(title.innerHTML == "Hello"){
    document.getElementById("para").innerHTML="Bye bye";    
    document.querySelector("a").href="http://yahoo.fr/";
    }
    else{
    document.getElementById("para").innerHTML="Hello";
    document.querySelector("a").href="http://google.com/";
    }
    
}
mPara.addEventListener("click", clickP);
function clickP(){
    alert("click !");
}

alert(screen.height + "\n" + navigator.language + "\n" + location.host + "\n" + navigator.userAgent);