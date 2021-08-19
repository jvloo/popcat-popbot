/**
    POPCAT Popbot v3.1 (Direct send pops to API & bypass bot detection)
    https://github.com/jvloo/popcat-popbot/
    
    @version 3.1.3
    @author  Xavier Loo <xavier@senangprint.com>
    
    - Get Started: https://github.com/jvloo/popcat-popbot/blob/main/README.md
    - Troubleshoot Guide: https://github.com/jvloo/popcat-popbot/wiki
**/
(() => {
    "use strict";
    console.clear();

    var jq, recaptcha, jwt, wait, num, country;

    /** Import jQuery script */
    jq = document.createElement("script");
    jq.src="https://code.jquery.com/jquery-3.3.1.min.js";
    document.getElementsByTagName("head")[0].appendChild(jq);

    /** Wait until jQuery loaded */
    wait = setInterval(() => {
        if (typeof $ != 'undefined') {
            /** Stop `wait()` task */
            clearInterval(wait);
            /** Start `send()` task */
            setInterval(() => { send() }, 30000);
            send();
        }
    }, 100);

    /** Send to API function */
    async function send() {
        /** Make sure country cookie is set */
        set("country=MY");
        /** Make sure PopCat accumulator is empty to avoid conflict */
        document.querySelector("#app").__vue__.accumulator = 0;
        /** Get new reCAPTCHA token */
        recaptcha = await document.querySelector("#app").__vue__.$recaptcha("pop");
        /** Add JWT token after first iteration */
        jwt = jwt ? "&token="+jwt : "";
        /** Send API request */
        $.ajax({ url: `https://stats.popcat.click/pop?pop_count=800&captcha_token=${recaptcha}${jwt}`, crossDomain: true })
            .then(function(e) {
                /** Store new JWT token */
                jwt = e.Token;
                /** Get current pop count */
                num = parseInt($(".counter").text().replace(/,/g, ""));
                /** Increment pop count */
                pop(num = isNaN(num) ? 0 : num);
                /** Get country code */
                country = e.Location.Code=="MY" ? "Malaysia" : e.Location.Code;
                /** Log success message */
                console.log(`%cSuccessfully sent 800 clicks to ${country}. Total: ${(num+800).toLocaleString("en")}`, "color:green");
                console.log('Waiting for next request in 30s..');
            })
            .fail(function(e){
                /** Log error message */
                switch(e.status) {
                    case 503: console.log("%cFailed due to server error. Retrying in 30s..", "color:red"); break;
                    case 429: console.log("%cFailed due to request too often. Retrying in 30s..", "color:red");
                              console.log("%cReminder: Please run only 1 PopCat per device/IP.", "color:yellow"); break;
                    default:  console.log(`%cFailed due to unknown error. Retrying in 30s..`, "color:red");
                }
            });
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
}) ();