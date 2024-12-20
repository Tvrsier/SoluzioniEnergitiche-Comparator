import React from "react";
import "../styles/login.css"

function LoginView({email, setEmail, password, setPassword, handleSubmit}) {
    return (
        <div className={"login-container"}>
            <div className="title-container">
                <h1>
                    <span className="title-bold">Soluzioni</span>
                    <span className="title-thin">ENERGETICHE</span>
                </h1>
            </div>
            <div className={"login-box"}>
                <span>Accedi per iniziare la sessione</span>
                <from onSubmit={handleSubmit}>
                    <div className={"form-group"}>
                        <label htmlFor={"email"}>Email</label>
                        <input
                            type={"email"}
                            id={"email"}
                            placeholder={"Email"}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required={true}
                        />
                    </div>
                    <div className={"form-group"}>
                        <label htmlFor={"password"}>Password</label>
                        <input
                            type={"password"}
                            id={"password"}
                            placeholder={"Password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required={true}
                        />
                    </div>
                    <div className={"form-footer"}>
                        <label>
                            <input type={"checkbox"}/> Ricordami
                        </label>
                        <a href={"/forgot-password"}>Ho dimenticato la password</a>
                    </div>
                    <button type={"submit"} className={"btn-submit"}>Sign in</button>
                </from>
            </div>
        </div>
    );
}

export default LoginView