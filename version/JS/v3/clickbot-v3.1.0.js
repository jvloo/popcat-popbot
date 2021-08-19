var app = document.querySelector('#app').__vue__;
var token = '';
app.$recaptcha('pop').then((d) => { token = d });

var jq = document.createElement('script');
jq.src = "https://code.jquery.com/jquery-3.3.1.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);

var loaded = setInterval(() => {
    if (typeof $ != 'undefined' && token.length > 0) {
        clearInterval(loaded);
        setInterval(() => { send() }, 30000);
        send();
    }
}, 100);

function send() {
    set('country=MY');
    try {
        $.ajax({ url: 'https://stats.popcat.click/pop?pop_count=800&captcha_token='+token, crossDomain: true })
            .then(function(d) {
                console.log(`Successfully sent 800 clicks to ${d.Location.Name}`);
                token = d.Token;
                pop();
            })
            .fail(function(e) {
                console.log(`Failed due to error ${e.responseText}. Retrying..`);
            })
    } catch (e) {
        console.log('Failed to initialize API call. Retrying..');
    }
}

function pop() {
    var n = parseInt($('.counter').text().replace(/,/g, '')), n = isNaN(n)?0:n;
    for (var i = 0; i < 800; i++) {
      setTimeout(() => { ++n; set('counter='+n); $('.counter').text(n.toLocaleString('en-US')); }, i*5);
    }
}

function set(n) {
    document.cookie = n+";expires=Sat, 31 Dec 2022 12:00:00 UTC;path=/";
}