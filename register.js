const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', requestRegistration);

async function requestRegistration(e) {
    console.log(e.target)
    e.preventDefault();
    try {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: e.target.email.value,
                username: e.target.username.value,
                password: e.target.password.value
            })
        }
        const r = await fetch(`https://trackit-habit-tracker.onrender.com/auth/register`, options)
        const data = await r.json()
        if (data.err){ throw Error(data.err) }
        else { 
            window.location.href=`https://trackit-habit-tracker.netlify.app/index.html`;
            window.alert('Registration success! Please login.') 
        }
    } catch (err) {
        console.warn(err);
    }
}
