## Let's fight for Malaysia's Popcat world ranking 🇲🇾

JS clickbot for <a href="https://popcat.click/" target="_blank">PopCat challenge</a>

*‼️ MALAYSIA IS 2TH PLACE NOW ‼️ 🎉🎉*

<img src="https://i.imgur.com/688fQrN.png">

## About Popcat Rules

- API rate limit 800 clicks per 30 seconds (So far I can't bypass this)
- If send 800 clicks or above, system will only record 800 clicks & spam score +1
- If hit 10 spam scores, system will mark you as bot & no further clicks will be sent to API

```diff
- Only allow 1 browser per device. API rate limit is enforced per IP address.
```

**See the file: popcat-App.html**

## About Clickbot script V2

- Directly send clicks via the Popcat's API.
- Send 800 clicks per 30 seconds
- Clear spam scores automatically

**See the file: clickbot-v2.js**

## How to Use (Simple)

1. Copy all content of the file "clickbot-v2.min.js"
2. Visit <a href="https://popcat.click/" target="_blank">https://popcat.click/</a>
3. Tap `F12` to open browser devtool & navigate to "Console" tab
4. Tap `Ctrl` + `v` to paste all content into console
5. Tap `Enter` to run the script

*Navigate to "Network" tab to check if your API request accepted or rejected (in red text)*

<img src="https://i.imgur.com/UFYw0hw.png">

## How to Use (Advanced - Python version)

1. Make sure you have install Python3 with PIP (Python package manager)
2. Install selenium package via PIP
3. Double click to run **clickbot-v2.py**

*You can open multiple selenium browser if your PC can support*

## Credit

Special thanks to senpai "Lim Shang Yi" (FB) for the inspiration.

Original FB post: https://www.facebook.com/groups/developerkaki/permalink/1487647504914491

Latest FB post: https://www.facebook.com/groups/developerkaki/permalink/1489535604725681

## Disclaimer

The author is not responsible for any loss or damage of your personal assets including your laptops, PCs and brain XD
