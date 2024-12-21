import React, {useState} from "react";
import LoginView from '../views/LoginView'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch("http://localhost:5000/api/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({email, password}),
            });
            const data = await response.json()
            if(response.ok) {
                console.log("Login successful", data)
            } else {
                console.error("Login failed:", data.message)
            }
        } catch(error) {
            console.error("Error:", error)
        }
    };

    return (
        <LoginView
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleSubmit={handleSubmit}
        />
    );
}

export default Login