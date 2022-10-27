const editHabitForm = document.getElementById('editHabitForm');
editHabitForm.addEventListener('submit', editHabit);

const Delete = document.getElementById('delete');
Delete.addEventListener('click', deleteHabit);

const id = localStorage.getItem('id');

async function deleteHabit(e) {
    e.preventDefault();
    if(confirm('Are you sure you want to delete this habit?')) {
        try {
            const r = await fetch(`https://track-it-habit-backend.herokuapp.com/habits/${id}`, {
                method: 'DELETE',
            });
            if (r.err){ 
                throw Error(r.err); 
            } else {
                alert('Deleted habit.');
            }
        } catch (err) {
            console.warn(`Error: ${err}`);
        }
    }
}

async function editHabit(e) {
    e.preventDefault();
    try {
        const options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: e.target.name.value,
                difficulty: e.target.difficulty.value,
                frequency: e.target.frequency.value,
                number_of_rep: e.target.reps.value
            })
        }
        const r = await fetch(`https://track-it-habit-backend.herokuapp.com/habits/${id}`, options)
        const data = await r.json()
        if (data.err){ throw Error(data.err); }
    } catch (err) {
        console.warn(`Error: ${err}`);
    }
}
