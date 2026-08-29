const wakeup = localStorage.getItem('selectedWakeUp');
const snack = localStorage.getItem('selectedSnack');

document.getElementById('wake-up').textContent = wakeup;
document.getElementById('snack').textContent = snack;