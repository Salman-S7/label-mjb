var x = document.getElementById("nt-menu");
var y = document.getElementById("mobile-menu-open");
var z = document.getElementById("id-cross-menu");

function openmenu(){

    y.style.display = "none";   //none
    z.style.display = "block";  //block
    x.style.display = "block";  //block
    x.style.transform = "translatey(9%)";  //orignal - 0%
    x.style.transition = "0.4s linear";


   
}
function hidemenu(){
    y.style.display = "block";  //block
    z.style.display = "none";   //none
    x.style.display = "block";  //none
    x.style.transform = "translatey(-108%)";
    x.style.transition =  "0.4s linear";

}

function opensearch(){
    var a = document.getElementById("nav-search-box");

    if(a.style.display == "flex"){
        a.style.display = "none";
    }
    else{
        a.style.display = "flex";
    }
}

// ----- hamburger span new ------ 




// function opendh(){
//     var q = document.getElementById("nt-menu-101");
//     q.style.transform = "translatey(0%)"; 
//     q.style.transition = "0.4s linear";

//     if(q.style.display == "block"){
//         q.style.display = "none";
//     }
//     else{
//         q.style.display = "block";
//     }
// }

function opendh(){
    var q = document.getElementById("nt-menu-101");
    q.classList.toggle("nt-menu-11");

}


