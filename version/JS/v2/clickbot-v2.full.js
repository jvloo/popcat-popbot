// -------------------------------------------------------------------------
// DIRECT ACCESS POPCAT API
// -------------------------------------------------------------------------

/* Add JQuery script */
var jq = document.createElement('script');
jq.src = "https://code.jquery.com/jquery-3.3.1.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);

/* Access Vue instance */
var app = document.querySelector('#app').__vue__;

/* Set country code */
document.cookie = "country=MY;expires=Sat, 31 Dec 2022 12:00:00 UTC;path=/";

/* Execute script */
var loaded = setInterval(function () {
    if (typeof $ != 'undefined') {
        send();
        setInterval(() => { send() }, 30000); /* API rate limit = 800 clicks per 30s */
        clearInterval(loaded);
    }
}, 10);

/* Send API request function */
async function send() {
    /* Get reCAPTCHA token */
    await app.$recaptchaLoaded();
    var token = await app.$recaptcha('pop');
    /* Send API request */
    await $.ajax({ url: 'https://stats.popcat.click/pop?pop_count=800&captcha_token='+token })
        .done(function( data ) {
            console.log('Successfully sent 800 clicks');
            pop(); /* REMOVE THIS LINE TO DISABLE POP ANIMATION */
        })
        .catch(function() {
            console.log('error');
        })
}

/* Increment pop count function */
function pop() {
    if (Number.isNaN(app.counter)) {
        document.dispatchEvent(new KeyboardEvent('keydown', { key: 'g', ctrlKey: true }));
        app.counter = 0;
    }
    for (var i = 0; i <= 800; i++) {
        app.counter = app.counter+1;
    }
    document.cookie = "pop_count="+app.counter+";expires=Sat, 31 Dec 2022 12:00:00 UTC;path=/";
}

// -------------------------------------------------------------------------
// ACCESS POPCAT ACCUMULATOR
// -------------------------------------------------------------------------

/* Get Vue instance */
const app = document.querySelector('#app').__vue__;

/* Set country code */
document.cookie = "country=MY;expires=Sat, 31 Dec 2022 12:00:00 UTC;path=/";

/* Make sure you click at least once */
document.dispatchEvent(new KeyboardEvent('keydown', {
	key: 'g',
	ctrlKey: true
}));

/* Set iterator */
setInterval(() => { click() }, 29000);

/* Function: Set accumulator to max limits */
function click() {
    /* API rate limits = 800 clicks per 30 seconds */
    app.accumulator = 800;
    /* Prevent bot detection */
    app.bot = false;
    app.sequential_max_pops = 0;
    /* Increment pop count - REMOVE THIS LINE TO DISABLE POP ANIMATION */
    pop();
}

/* Function: Increment pop count */
function pop() {
    for (var i = 0; i <= 800; i++) {
      setTimeout(() => { document.dispatchEvent(new KeyboardEvent('keydown', { key: 'g', ctrlKey: true })) }, 5);
    }
}