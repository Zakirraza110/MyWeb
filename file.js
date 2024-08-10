windowloader=()=>{
    window.location.href="index.html";
}

openmenu=()=>{
    document.getElementById("nav_Items_response").style.top="14%";
    document.getElementById("lines").style.display="none";
    document.getElementById("cros").style.display="block";
}
closemenu=()=>{
    document.getElementById("nav_Items_response").style.top="-72%";
    document.getElementById("lines").style.display="block";
    document.getElementById("cros").style.display="none";
}

document.getElementById("certi_dropdown").addEventListener("mouseenter",opendrop=()=>{
    document.getElementById("down1").style.transform="rotate(180deg)";
    document.getElementById("down1").style.transition="0.5s";
    document.getElementById("certi").style.display="block";
    document.getElementById("certi").style.opacity="1";
})

document.getElementById("certi_dropdown").addEventListener("mouseleave",closedrop=()=>{
    document.getElementById("down1").style.transform="rotate(360deg)";
    document.getElementById("down1").style.transition="0.5s";
    document.getElementById("certi").style.display="none";
    document.getElementById("certi").style.opacity="0";
})

document.getElementById("proj_dropdown").addEventListener("mouseenter",opendropdown=()=>{
    document.getElementById("down2").style.transform="rotate(180deg)";
    document.getElementById("down2").style.transition="0.5s";
    document.getElementById("project").style.display="block";
    document.getElementById("project").style.opacity="1";
})

document.getElementById("proj_dropdown").addEventListener("mouseleave",closedropclose=()=>{
    document.getElementById("down2").style.transform="rotate(360deg)";
    document.getElementById("down2").style.transition="0.5s";
    document.getElementById("project").style.display="none";
    document.getElementById("project").style.opacity="0";
})