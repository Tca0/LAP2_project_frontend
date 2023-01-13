const addHabitForm = document.getElementById("addHabitForm");

addHabitForm.addEventListener("submit", submitNewHabit);

async function submitNewHabit(e) {
  e.preventDefault();
  try {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 
        authorization:`Bearer ${localStorage.getItem('token')}` },
        body: JSON.stringify({
          name: e.target.name.value,
          difficulty: e.target.difficulty.value,
          frequency: e.target.frequency.value,
          number_of_rep: e.target.reps.value,
        })
    }
    const r = await fetch(`https://trackit-habit-tracker.onrender.com/habits`, options)
    const data = await r.json()
    if (data.err){ throw Error(data.err); }
    location.href=`./dashboard.html`;
} catch (err) {
    console.warn(`Error: ${err}`);
}

}
