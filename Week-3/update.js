let ctr=0;
function callback(){
    const el = document.querySelectorAll("h2")[0].innerHTML=ctr;
        const pl =document.querySelectorAll("h2")[1].innerHTML=ctr;
        const cp = document.querySelectorAll("h2")[2].innerHTML = ctr;
    el.innerHTML=ctr;
    ctr= ctr+1;

}
setInterval(callback, 1000);