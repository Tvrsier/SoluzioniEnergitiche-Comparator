import React, {useState} from "react";
import LoginView from '../views/LoginView'
import {buildApiUrl} from "../utils/apiUrl";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const uri = buildApiUrl(process.env.REACT_APP_LOGIN_PATH);

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(uri, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({email, password}),
            });
            const data = await response.json()
            if(response.ok) {
                console.log(data.message, data)
                alert(data.message)
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