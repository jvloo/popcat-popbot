## Let's fight for Malaysia's Popcat world ranking 🇲🇾

This is a JS auto-click script for <a href="https://popcat.click/" target="_blank">PopCat challenge</a> that can bypass bot detection.

The script accesses the PopCat's Vue app instance directly and manipulate the key variables which contributes to click counter, spam counter and API call, so to ensure that:

1. You hit the max 800 clicks per 30s (according to the API rate limit)
2. You won't get marked as bot (100% works - Direct send clicks to API endpoint)

*‼️ MALAYSIA IS 2TH PLACE NOW ‼️ 🎉🎉 (at time of writing script)*

<img src="https://i.imgur.com/688fQrN.png">

## How to Use (Simple)

> **NOTICE:** Only 1 browser allowed per device. API rate limit is enforced per IP address.

1. Copy all content of the file: <a href="https://github.com/jvloo/popcat-clicker/blob/main/clickbot-v3.min.js" target="_blank">clickbot-v3.min.js</a> *OR* <a href="https://github.com/jvloo/popcat-clicker/blob/main/clickbot-v3-with-pop.min.js" target="_blank">clickbot-v3-with-pop.min.js</a> (with click counter)
2. Visit <a href="https://popcat.click/" target="_blank">https://popcat.click/</a>
3. Tap `F12` to open browser devtool & navigate to "Console" tab
4. Tap `Ctrl` + `v` to paste all content into console
5. Tap `Enter` to run the script
6. (Optional) Navigate to "Network" tab to check if your API request accepted or rejected (in red text)

<img src="https://i.imgur.com/UFYw0hw.png">

## How to Use (Advanced - Python version)

> **NOTICE:** Only 1 browser allowed per device. API rate limit is enforced per IP address.

1. Make sure you have install Python3 with PIP (Python package manager)
2. Install selenium package via PIP
3. <a href="https://github.com/jvloo/popcat-clicker/archive/refs/tags/v2.zip" target="_blank">Click here to download script</a>
4. Extract files & double click **"clickbot-v2.py"** to run

## About Popcat Rules

- API rate limit = 800 clicks per 30 seconds (So far I can't bypass this)
- If you send 800 clicks or above, system will only record 800 clicks & spam score +1
- If you hit 10 spam scores, system will mark you as bot & no further clicks will be sent to API

> **UPDATE:** Clearing the bot cookie won't work at script level, because PopCat also set `this.bot` variable to true,
> unless you clear the cookie & refresh the browser (reload the script).
> The bot cookie is only useful for them to record you as bot when you refresh the browser.
> 
> You may check the script extracted from <a href="https://github.com/jvloo/popcat-clicker/blob/main/popcat-app.html" target="_blank">PopCat's App.vue (line 152)</a>. 

**See the file: <a href="https://github.com/jvloo/popcat-clicker/blob/main/popcat-app.html" target="_blank">popcat-App.html</a>**

## Changelog

### - Clickbot script V3

- Send 800 clicks per 30 seconds
- Directly send clicks via the Popcat's API endpoint

**See the file: <a href="https://github.com/jvloo/popcat-clicker/blob/main/deprecated/JS/v3/clickbot-v3.js" target="_blank">clickbot-v3.js</a>**


### - Clickbot script V2 (DEPRECATED)

- Send 800 clicks per 30 seconds
- Use PopCat native `sendStats()` function
- Clear spam scores automatically

> **UPDATE:** Some reported that they'll still get the "red eyes" using the JS script. So I have updated the script to V3 which solves the issue.
> 
> <img width="50%" src="https://i.imgur.com/gbeubxD.jpg">

**See the file: <a href="https://github.com/jvloo/popcat-clicker/blob/main/deprecated/JS/v2/clickbot-v2.js" target="_blank">clickbot-v2.js</a>**

## Screenshot

Still working after running over 12 hours:

<img src="https://i.imgur.com/y8uFBvn.png">

## Credit

Special thanks to senpai "Lim Shang Yi" (FB) for the inspiration.

Original FB post: https://www.facebook.com/groups/developerkaki/permalink/1487647504914491

Latest FB post: https://www.facebook.com/groups/developerkaki/permalink/1489535604725681

## Disclaimer

The author is not responsible for any loss or damage of your personal assets including your laptops, PCs and brain XD
