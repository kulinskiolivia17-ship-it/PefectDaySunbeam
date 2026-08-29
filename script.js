const wakeup = localStorage.getItem('selectedWakeUp');
const breakfast = localStorage.getItem('selectedBreakfast');
const drink = localStorage.getItem('selectedDrink');
const activity = localStorage.getItem('selectedActivity');
const lunch = localStorage.getItem('selectedLunch');
const transportation = localStorage.getItem('selectedTransport');
const goSomewhere2 = localStorage.getItem('selectedGoSomewhere2');
const dinner = localStorage.getItem('selectedDinner');
const nightActivities = localStorage.getItem('selectedNightActivity');
const snack = localStorage.getItem('selectedSnack');
const bed = localStorage.getItem('selectedBed');




document.getElementById('wake-up').textContent = wakeup;
document.getElementById('breakfast').textContent = breakfast;
document.getElementById('drink').textContent = drink;
document.getElementById('activity').textContent = activity;
document.getElementById('lunch').textContent = lunch;
document.getElementById('transportation').textContent = transportation;
document.getElementById('go-somewhere-2').textContent = goSomewhere2;
document.getElementById('dinner').textContent = dinner;
document.getElementById('night_activities').textContent = nightActivities;
document.getElementById('snack').textContent = snack;
document.getElementById('bed').textContent = bed;
