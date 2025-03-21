const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', requestLogin);

async function requestLogin(e) {
    e.preventDefault();
    try {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: e.target.email.value,
                password: e.target.password.value
            })
        }
        const r = await fetch(`https://trackit-habit-tracker.onrender.com/auth/login`, options)
        const data = await r.json()
        if (data.err){ throw Error(data.err); }
        login(data);
    } catch (err) {
        console.warn(`Error: ${err}`);
    }
}

function login(data){
    const payload = jwt_decode(data.token);
    localStorage.setItem('token', data.token)
    localStorage.setItem('userId', payload.id)
    location.href = `./dashboard.html`;
}
