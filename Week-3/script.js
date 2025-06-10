
let ctr=0;
function callback(){
    const el =document.querySelectorAll("h2")[1].innerHTML=ctr;

    console.log(ctr);
    ctr=ctr+1;
}
setInterval(callback,100);
