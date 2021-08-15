var lim = 0;

// Get Vue instance
const app = document.querySelector('#app').__vue__;

// Set country code
document.cookie = "country=MY;expires=Sat, 31 Dec 2022 12:00:00 UTC;path=/";

// Make sure you click at least once
document.dispatchEvent(new KeyboardEvent('keydown', {
	key: 'g',
	ctrlKey: true
}));

// Set iterator
setInterval(() => { click() }, 29000);

// Function: Set accumulator to max limits
function click() {
    // API rate limits = 800 clicks per 30s;
    // sequential_max_pops = 10 before you get marked as bot
    app.accumulator = (lim>=9?799:800);
    // Clear counter if sequential_max_pops hits 10
    ++lim; lim=(lim>=10?0:lim);
    // Increment pop count - REMOVE THIS LINE TO DISABLE POP ANIMATION
    pop(app.accumulator);
}

// Function: Increment pop count
function pop(c) {
    for (var i = 0; i <= c; i++) {
      setTimeout(() => { document.dispatchEvent(new KeyboardEvent('keydown', { key: 'g', ctrlKey: true })) }, 5);
    }
}