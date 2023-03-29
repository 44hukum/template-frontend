import React from "react";
import LoginForm from "../components/forms/LoginForm";

function Login(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 d-flex align-items-centre">
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default Login