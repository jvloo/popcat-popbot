// ==UserScript==
// @name         Popcat ClickBot v4
// @version      4.0
// @description  Popcat pop pop pop till the cat explodes
// @author       jvloo (original author) and Genius#8660
// @github       https://github.com/jvloo
// @github       https://github.com/GeniusXD
// @match        https://popcat.click/
// @icon         https://www.google.com/s2/favicons?domain=popcat.click
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @grant        none
// ==/UserScript==

(async function () {
    'use strict';
    console.clear();
    document.cookie = "country=MY;expires=Sat, 31 Dec 2022 12:00:00 UTC;path=/";

    let status = false;
    let app = document.getElementById('app')
    var a = document.querySelector("#app").__vue__;
    await a.$recaptchaLoaded();
    var token = await a.$recaptcha("pop");

    //button
    let btn = document.createElement("button");
    btn.innerHTML = "Start";
    btn.id = "pop"
    btn.style['display'] = 'block';
    btn.style['padding'] = '7px';
    btn.style['background'] = 'rgba(0,0,0,0.4)';
    btn.style['color'] = '#D6D6D6';
    btn.style['font-size'] = '30px';
    btn.style['text-align'] = 'center';
    btn.style['border-style'] = 'none';
    btn.style['border-radius'] = '10px';
    app.prepend(btn);

    //find cookie
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    let delete_cookie = function (name) {
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    };

    //send clicks to popcat api
    async function send() {
        try {
            await $.ajax({
                url: "https://stats.popcat.click/pop?pop_count=800&captcha_token=" + token
            }).then(function (r) {
                console.log("%c Successfully sent 800 clicks", "background: #00B908; color: #fff");
                token = r.Token;
                p();
            }).fail(function (e) {
                console.log(`%c Failed due to error ${e.responseText}. Retrying..`, "background: #C4B300; color: #fff")
            })
        } catch (e) {
            console.log("%c Failed to initialize API call. Retrying..", "background: #C4B300; color: #fff")
        }
    }

    //pop counter
    function p() {
        var n = parseInt($('.counter').text().replace(/,/g, ''));
        document.cookie = "counter="+n+";expires=Sat, 31 Dec 2022 12:00:00 UTC;path=/";
    
        for (var i = 0; i < 800; i++) {
          setTimeout(() => { ++n; $('.counter').text(n.toLocaleString('en-US')); }, 5);
        }
    }

    //unban
    function unflag() {
        delete_cookie('bot');
        location.reload();
    }

    //Check if user is a bot
    setInterval(() => {
        if (getCookie('bot')) {
            localStorage.setItem("flagged", true);
            console.log("%c You've been flagged as a bot. Unbanning...", "background: #a00; color: #fff");

            setTimeout(function () {
                unflag();
            }, 500);
        }
    }, 2000);

    let pop = document.getElementById('pop');

    let start = function () {
        status = true
        btn.innerHTML = "Stop";

        var loaded = setInterval(() => {
            if (typeof $ != 'undefined') {
                clearInterval(loaded);
                setInterval(() => { send() }, 30000);
                send();
            }
        }, 100);

    }

    let stop = function () {
        location.reload();
    }

    //auto resume after unban
    if (localStorage.getItem("flagged")) {
        localStorage.removeItem("flagged");
        console.log("%c Unbanned, resuming clicks...", "background: #00B908; color: #fff");
        start();
    }

    pop.onclick = function () {
        if (status == false) {
            start();
        } else {
            stop();
        }
    };

})();
