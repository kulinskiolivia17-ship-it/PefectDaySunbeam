const wakeup = localStorage.getItem('selectedWakeUp');
const snack = localStorage.getItem('selectedSnack');
const goSomewhere2 = localStorage.getItem('selectedGoSomewhere2');

document.getElementById('wake-up').textContent = wakeup;
document.getElementById('snack').textContent = snack;
document.getElementById('goSomewhere2').textContent = goSomewhere2;