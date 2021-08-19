/**
    POPCAT Popbot v3.1 (Direct send pops to API & bypass bot detection)
    https://github.com/jvloo/popcat-popbot/
    
    @version 3.1.3
    @author  Xavier Loo <xavier@senangprint.com>
    
    - Get Started: https://github.com/jvloo/popcat-popbot/blob/main/README.md
    - Troubleshoot Guide: https://github.com/jvloo/popcat-popbot/issues/1
**/

console.clear();

var jq, reCAPTCHA, jwt, wait, num;

/** Import jQuery script */
jq = document.createElement("script");
jq.src="https://code.jquery.com/jquery-3.3.1.min.js";
document.getElementsByTagName("head")[0].appendChild(jq);

/** Get reCAPTCHA token */
document.querySelector("#app").__vue__.$recaptcha("pop").then((e) => { reCAPTCHA = e });

/** Wait until resources loaded */
wait = setInterval(() => {
    if (typeof $ != 'undefined' && typeof reCAPTCHA != 'undefined') {
        /** Stop `wait()` task */
        clearInterval(wait);
        /** Start `send()` task */
        setInterval(() => { send() }, 30000);
    }
}, 100);

/** Send to API function */
function send() {
    /** Make sure country cookie is set */
    set("country=MY");
    /** Add JWT token after first iteration */
    jwt = jwt ? "&token="+jwt : "";
    /** Make sure PopCat accumulator is empty to avoid conflict */
    document.querySelector("#app").__vue__.accumulator = 0;
    /** Try to send API request */
    try {
        $.ajax({ url: `https://stats.popcat.click/pop?pop_count=800&captcha_token=${reCAPTCHA}${jwt}`, crossDomain: true })
            .then(function(e) {
                /** Store new JWT token */
                jwt = e.Token;
                /** Get current pop count */
                num = parseInt($(".counter").text().replace(/,/g, ""));
                /** Increment pop count */
                pop(num = isNaN(num) ? 0 : num);
                /** Log success message */
                console.log(`%cSuccessfully sent 800 clicks to ${e.Location.Name}. Total: ${(num+800).toLocaleString("en")}`, "color:green");
                console.log('Waiting for next request in 30s..');
            })
            .fail(function(e){
                /** Log error message */
                switch(e.status){
                    case 503: console.log("%cFailed due to server is busy. Retrying in 30s..", "color:red"); break;
                    case 429: console.log("%cFailed due to request too often. Retrying in 30s..", "color:red");
                              console.log("%cReminder: Please run only 1 PopCat per device/IP.", "color:yellow"); break;
                    default:  console.log(`%cFailed due to error ${e.responseText}. Retrying in 30s..`, "color:red");
                }
            });
    } catch(e) {
        console.log("%cFailed due to server error. Retrying in 30s ..", "color:red");
    }
}

/** Increment pop count function */
function pop(num) {
    for (var i = 0; i < 800; i++) {
        setTimeout(() => {
            /** Increment counter */
            ++num;
            /** Update physical counter */
            $(".counter").text(num.toLocaleString("en"));
            /** Update cookie counter */
            set("pop_count="+num);
        }, 5*i);
    }
}

/** Set cookie function */
function set(value) {
    document.cookie = value+";expires=Sat, 31 Dec 2022 12:00:00 UTC;path=/";
}