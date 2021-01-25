const loginForm = document.querySelector("#login-form");
const signUpForm = document.querySelector("#signup-form");

//Sign up form after submiting

 signUpForm.addEventListener("submit",async (event) => {
    event.preventDefault()
    const input = {
        username : document.querySelector("#username-signup").value,
        email: document.querySelector("#email-signup").value,
        password: document.querySelector("#password-signup").value
    }
    if (!input.username || !input.email || !input.password){
        return;
    }
    const res = await fetch("/api/users",{
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(input)
    })
    const user = await res.json();
    console.log({user})
    
 })

 // Login form after submitting
 loginForm.addEventListener("submit",async (event) => {
    event.preventDefault()
    const input = {
        email: document.querySelector("#email-login").value,
        password: document.querySelector("#password-login").value
    }
    if (!input.email || !input.password){
        return;
    }
    const res = await fetch("/api/users/login",{
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(input)
    })
    const user = await res.json();
 })