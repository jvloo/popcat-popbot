# Let's fight for Malaysia's PopCat world ranking 🇲🇾

This is a JS/Python bot script for <a href="https://popcat.click/" target="_blank">PopCat challenge</a> that bypass bot detection and send pops (clicks) to the PopCat's API endpoint directly, so to ensure that:

1. You hit the max 800 clicks per 30s (according to the API rate limit)
2. You won't get marked as bot (100% works - Direct send clicks to API endpoint)

> **📢 Update <a href="https://github.com/jvloo/popcat-popbot/blob/main/popbot-v3.1.3.js" target="_blank">v3.1.3</a>: Added Mobile browser support, improved error messages & fixed minor bugs**

<img src="https://i.imgur.com/688fQrN.png">

# How to Use (JS version)

1. Copy all content of the file: <a href="https://github.com/jvloo/popcat-popbot/blob/main/popbot-v3.1.3.js" target="_blank">clickbot-v3.1.3.js</a> (OR minified version <a href="https://github.com/jvloo/popcat-popbot/blob/main/popbot-v3.1.3.min.js" target="_blank">clickbot-v3.1.3.min.js</a>)
2. Visit <a href="https://popcat.click/" target="_blank">https://popcat.click/</a>
3. Tap `F12` to open browser devtool & navigate to "Console" tab
4. Tap `Ctrl` + `v` to paste all content into console
5. Tap `Enter` to run the script
6. Wait for the magic to happen...

> **⚠️NOTICE: Limited to only 1 PopCat running per device/IP address.**

> **✅ Support PC & Mobile browsers**
> - <a href="https://github.com/jvloo/popcat-popbot/wiki/How-To:-Run-Script-On-Mobile-Device-(Android)">How To: Run Script On Mobile Device (Android)</a>
> - <a href="https://github.com/jvloo/popcat-popbot/wiki/How-To:-Run-Script-On-Mobile-Device-(IOS)">How To: Run Script On Mobile Device (IOS)</a>

> **❗❗ Troubleshoot Guides**
> - <a href="https://github.com/jvloo/popcat-popbot/wiki/Troubleshoot:-429-Too-Many-Requests-or-Request-Too-Often">Troubleshoot: 429 Too Many Requests or Request Too Often</a>
> - <a href="https://github.com/jvloo/popcat-popbot/wiki/Troubleshoot:-503-Haven't-found-your-country-code-yet">Troubleshoot: 503 Haven't found your country code yet</a>
> - <a href="https://github.com/jvloo/popcat-popbot/wiki/Troubleshoot:-503-Server-Error">Troubleshoot: 503 Server Error</a>
> - <a href="https://github.com/jvloo/popcat-popbot/wiki/Troubleshoot:-CORS-Cross-Origin-Request-Blocked">Troubleshoot: CORS Cross Origin Request Blocked</a>

> **❗❗ Issue still not resolved?** <a href="https://github.com/jvloo/popcat-clicker/issues/new">Create an issue</a>

# How to Use (Python version)

1. Make sure you have install Python 3 with PIP (Python package manager)
2. Install Selenium package via PIP
3. <a href="https://github.com/jvloo/popcat-clicker/archive/refs/tags/v2.zip" target="_blank">Click here to download script</a>
4. Extract files & double click **"clickbot-v2.py"** to run

# About Popcat Rules

- API rate limit = 800 clicks per 30 seconds (So far I can't bypass this)
- If you send 800 clicks or above, system will only record 800 clicks & spam score +1
- If you hit 10 spam scores, system will mark you as bot & no further clicks will be sent to the PopCat API

> **UPDATE:** Clearing bot cookie won't work at script level, because PopCat also set `this.bot` variable to true,
> unless you clear the cookie & refresh the browser (reload the script).
> The bot cookie is only useful for them to record you as bot when you refresh the browser.
> 
> You may check the script extracted from <a href="https://github.com/jvloo/popcat-clicker/blob/main/popcat-app.html" target="_blank">PopCat's App.vue (line 152)</a>. 

**See the file: <a href="https://github.com/jvloo/popcat-clicker/blob/main/popcat-app.html" target="_blank">popcat-App.html</a>**

# Changelog

## - Clickbot script v3.1

- Added mobile browser support
- Added error reporting messages
- See which country you're targeting & total clicks sent

**See the file: <a href="https://github.com/jvloo/popcat-popbot/blob/main/popbot-v3.1.3.js" target="_blank">popbot-v3.1.3.js</a>**


## - Clickbot script v3

- Send 800 clicks per 30 seconds
- Directly send clicks via the Popcat's API endpoint

**See the file: <a href="https://github.com/jvloo/popcat-popbot/blob/main/version/JS/v3/clickbot-v3.0.0.js" target="_blank">clickbot-v3.js</a>**


## - Clickbot script v2 (DEPRECATED)

- Send 800 clicks per 30 seconds
- Use PopCat native `sendStats()` function
- Clear spam scores automatically

> **NOTE:** Some reported that they'll still get the "red eyes" using the JS script. So I have updated the script to v3 which solves the issue.
> 
> <img width="50%" src="https://i.imgur.com/gbeubxD.jpg">

**See the file: <a href="https://github.com/jvloo/popcat-popbot/blob/main/version/JS/v2/clickbot-v2.js" target="_blank">clickbot-v2.js</a>**

# Screenshot

Still working after running over 12 hours:

<img src="https://i.imgur.com/y8uFBvn.png">

# Credit

Special thanks to senpai "Lim Shang Yi" (FB) for the inspiration.

- Original FB post: https://www.facebook.com/groups/developerkaki/permalink/1487647504914491
- Latest FB post: https://www.facebook.com/groups/developerkaki/permalink/1489535604725681

# Disclaimer

The author is not responsible for any loss or damage of your personal assets including your laptops, PCs and brain 😎

# Attribution & License

<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>. You must give appropriate credit, provide a link to the original GitHub repository, and indicate if changes were made.

Please includes the line below in your redistributed and/or modified script:

> Original author: Xavier Loo (https://github.com/jvloo/popcat-popbot)

