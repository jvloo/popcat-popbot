var acc, lim = 0;

setInterval(() => { click() }, 500);

function click() {
    acc = (lim>=9?799:800);
    ++lim; lim=(lim>=10?0:lim);
    console.log(acc, lim);
}