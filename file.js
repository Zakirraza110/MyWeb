windowloader=()=>{
    window.location.href="index.html";
}

let banner1=document.getElementById("banner1");
openmenu=()=>{
    document.getElementById("nav_Items_response").style.top="14%";
    banner1.style.zIndex="-1";
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

let i=0;
let skill1= setInterval(() => {
    i++;
    if(i==91){
        clearInterval(skill1);
    }
    else{
        console.log(i)
        document.getElementById('textloader1').innerHTML=i+"%";
        document.getElementById('loader1').style.background=`conic-gradient(black ${i}%, #ebebeb 0deg)`;
    }
}, 50);

let j=0;
let skill2= setInterval(() => {
    j++;
    if(j==81){
        clearInterval(skill2);
    }
    else{
        document.getElementById('textloader2').innerHTML=j+"%";
        document.getElementById('loader2').style.background=`conic-gradient(black ${j}%, #ebebeb 0deg)`;
    }
}, 50);


let k=0;
let skill3= setInterval(() => {
    k++;
    if(k==71){
        clearInterval(skill3);
    }
    else{
        document.getElementById('textloader3').innerHTML=k+"%";
        document.getElementById('loader3').style.background=`conic-gradient(black ${k}%, #ebebeb 0deg)`;
    }
}, 50);

let l=0;
let skill4= setInterval(() => {
    l++;
    if(l==81){
        clearInterval(skill4);
    }
    else{
        document.getElementById('textloader4').innerHTML=l+"%";
        document.getElementById('loader4').style.background=`conic-gradient(black ${l}%, #ebebeb 0deg)`;
    }
}, 50);

let m=0;
let skill5= setInterval(() => {
    m++;
    if(m==86){
        clearInterval(skill5);
    }
    else{
        document.getElementById('textloader5').innerHTML=m+"%";
        document.getElementById('loader5').style.background=`conic-gradient(black ${m}%, #ebebeb 0deg)`;
    }
}, 50);

let n=0;
let skill6= setInterval(() => {
    n++;
    if(n==71){
        clearInterval(skill6);
    }
    else{
        document.getElementById('textloader6').innerHTML=n+"%";
        document.getElementById('loader6').style.background=`conic-gradient(black ${n}%, #ebebeb 0deg)`;
    }
}, 50);



// let banner2=document.getElementById("banner2");

// setInterval(() => {
//     setTimeout(() => {
//         banner1.style.left="-100%";
//         banner2.style.left="0%";
//     }, 3000);
//     setTimeout(() => {
//         banner1.style.left="0%";
//         banner2.style.left="-100%";
//     }, 6000);
// }, 6000);