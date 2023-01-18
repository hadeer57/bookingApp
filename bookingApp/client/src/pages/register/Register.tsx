import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../../pages/register/Register.css";

const Register = () => {
    const navigate = useNavigate()
    const [errorFromServer, setErrorFromServer] = useState()

    async function handleRegister(ev: any) {
        try {
            ev.preventDefault();
            const password = ev.target.elements.password.value;
            const email = ev.target.elements.email.value;
            const firstName = ev.target.elements.firstName.value;
            const lastName = ev.target.elements.lastName.value;
            console.log(password, email, firstName, lastName);

            //@ts-ignore
            const { data } = await axios.post("/admin/register", { password, email, lastName, firstName });
            console.log(data);

            const { ok, error } = data
            if (ok) {
                navigate('/login')
            }


            if (error) {
                setErrorFromServer(error)
            }
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="login">
                <form onSubmit={handleRegister} className="lContainer">
                <h1 className="signTitle">Register</h1>
                <input
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        className="lInput"
                    /> 
                       <input
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        className="lInput"
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        className="lInput"
                    />
                    <input
                        type="password"
                        placeholder="password"
                        name="password"
                        className="lInput"
                    />
                {errorFromServer ? <div className="error">{errorFromServer}</div> : null}
                 <button type="submit" className="lButton">
                       Register
                    </button>
                    <h4 className="joinTitle" >One of us? <button className="sign" onClick={()=>navigate('/login')}> Welcome Back</button></h4>  
                </form>
                
            </div>
    )
}

export default Register
