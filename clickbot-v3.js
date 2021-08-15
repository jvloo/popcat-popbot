// Set country code to MY
document.cookie = "country=MY;expires=Sat, 31 Dec 2022 12:00:00 UTC;path=/";

// Access Popcat vue instance
var app = document.querySelector('#app').__vue__;

// Get first batch of reCAPTCHA token
await app.$recaptchaLoaded();
var token = await app.$recaptcha('pop');

// Add JQuery script (Yes, I just wanna use JQuery)
var jq = document.createElement('script');
jq.src = "https://code.jquery.com/jquery-3.3.1.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);

// Start iteration once JQuery loaded
var loaded = setInterval(() => {
    if (typeof $ != 'undefined') {
        clearInterval(loaded);
        setInterval(() => { send() }, 30000);
        send();
    }
}, 100);

// Send API request function
async function send() {
    try {
        await $.ajax({ url: 'https://stats.popcat.click/pop?pop_count=800&captcha_token='+token })
            .then(function(r) {
                console.log(`Successfully sent 800 clicks`);
                token = r.Token;
            })
            .fail(function(e) {
                console.log(`Failed due to error ${e.responseText}. Retrying..`);
            })
    } catch (e) {
        console.log('Failed to initialize API call. Retrying..');
    }
}