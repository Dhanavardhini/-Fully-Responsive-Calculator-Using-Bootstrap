function add(params) {
    var a=Number(document.getElementById("d4").value);
    var b=Number(document.getElementById("d6").value);
    var c=a+b;
    var d=Number(document.getElementById("d8").innerText=c);
    // console.log(c); 
}


function multi(params) {
    var a=Number(document.getElementById("d4").value);
    var b=Number(document.getElementById("d6").value);
    var c=a*b;
    var d=Number(document.getElementById("d9").innerText=c);
    // console.log(cc); 
}

function min(params) {
    var a=Number(document.getElementById("d4").value);
    var b=Number(document.getElementById("d6").value);
    var c=a-b ;
    var d=Number(document.getElementById("d10").innerText=c);

    console.log(d);
    
}

function divide(params) {
    var a=Number(document.getElementById("d4").value);
    var b=Number(document.getElementById("d6").value);
    var c=a/b;
    var d=Number(document.getElementById("d11").innerText=c);

//  console.log(c2);
    
}


function remove(params) {
    var a=Number(document.getElementById("d4").value="");
    var b=Number(document.getElementById("d6").value="");
    document.getElementById("d8").innerText="";
    document.getElementById("d9").innerText="";
    document.getElementById("d10").innerText="" ; 
    document.getElementById("d11").innerText="";

}
