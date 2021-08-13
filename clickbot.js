/*
1) Open https://popcat.click
2) Open console (F12)
3) Insert code & run
*/

var event = new KeyboardEvent('keydown', {
	key: 'g',
	ctrlKey: true
});

setInterval(function(){
	for (i = 0; i < 100; i++) {
		document.dispatchEvent(event);
	}
	document.cookie = 'bot=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/'
}, 0);
