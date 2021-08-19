/**
    Popcat Clickbot V3.1 (Send to API)
    https://github.com/jvloo/popcat-clicker/
    
    @version 3.1.2
    @author  Xavier Loo <xavier@senangprint.com>
    
    - How to use? See: https://github.com/jvloo/popcat-clicker/blob/main/README.md
    - Encounter errors? See: https://github.com/jvloo/popcat-clicker/issues/1
**/
console.clear();

var j,t,w,n;
j=document.createElement('script'), j.src="https://code.jquery.com/jquery-3.3.1.min.js";
document.getElementsByTagName('head')[0].appendChild(j);
document.querySelector('#app').__vue__.$recaptcha('pop').then((d) => { t=d });

w=setInterval(() => {
    if (typeof $ != 'undefined' && typeof t != 'undefined')
        clearInterval(w), setInterval(() => { send() }, 3e4), send();
}, 100);

function send() {
    set('country=MY');
    document.querySelector('#app').__vue__.accumulator=0;
    try {
        $.ajax({ url: 'https://stats.popcat.click/pop?pop_count=800&captcha_token='+t, crossDomain: true })
            .then(function(d) {
                t=d.Token,n=parseInt($('.counter').text().replace(/,/g, '')),n=isNaN(n)?0:n,pop(n);
                console.log(`%cSuccessfully sent 800 clicks to ${d.Location.Name}. Total: ${(n+800).toLocaleString('en')}`, 'color:green');
            })
            .fail(function(e) {
                switch (e.status) {
                    case 503: console.log(`%cFailed due to server is busy. Retrying in 30s..`, 'color:red'); break;
                    case 429: console.log(`%cFailed due to request too often (Please run only 1 popcat per device). Retrying in 30s..`, 'color:red'); break;
                    default: console.log(`%cFailed due to error ${e.responseText}. Retrying in 30s..`, 'color:red');
                }
            })
    } catch (e) {
        console.log(`%cFailed to request API. Retrying in 30s ..`, 'color:red');
    }
}

function pop(n) {
    for (var i=0; i<800; i++) setTimeout(() => { ++n; $('.counter').text(n.toLocaleString('en')); set('pop_count='+n); }, i*5);
}

function set(n) { document.cookie=n+";expires=Sat, 31 Dec 2022 12:00:00 UTC;path=/" }
