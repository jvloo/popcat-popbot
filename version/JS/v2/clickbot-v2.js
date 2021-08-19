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