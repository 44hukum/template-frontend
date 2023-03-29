import React from "react";
// import { Link } from "react-router-dom";
import RegistrationForm from "../components/forms/RegistrationForm";

function Registration(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 d-flex align-items-centre">
                    <RegistrationForm />
                </div>
            </div>
        </div>
    )
}

export default Registration