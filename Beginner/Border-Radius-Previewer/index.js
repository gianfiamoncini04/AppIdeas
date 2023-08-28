var results;

function Mudar(){
    const tl = document.getElementById("top-left").value;
    const tr = document.getElementById("top-right").value;
    const bl = document.getElementById("bottom-left").value;
    const br = document.getElementById("bottom-right").value;
    const pre = document.getElementById("preview");

    const resTL = pre.style.borderTopLeftRadius = tl+"px";
    const resTR = pre.style.borderTopRightRadius = tr+"px";
    const resBL = pre.style.borderBottomLeftRadius = bl+"px";
    const resBR = pre.style.borderBottomRightRadius = br+"px";
    
    results = "border-radius: "+resTL+" "+resTR+" "+resBL+" "+resBR+";";
}

function Copy(){
    navigator.clipboard.writeText(results);
}
