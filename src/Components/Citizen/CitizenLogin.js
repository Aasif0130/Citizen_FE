//functional component for login with email password and submit
import React, { useState } from 'react';
import axios from 'axios';

function CitizenLogin() {
    const [aid, setAid] = useState('');
    const [password, setPassword] = useState('');

    const handleAid = (event) => {
        setAid(event.target.value);
    }
    const handlepassword = (event) => {
        setPassword(event.target.value);
    }

    async function handlesubmit(event) {
        event.preventDefault();
        const data = {
            aid : aid,
            password: password
        }
        await axios.post('http://localhost:8080/custvalidate', data)
            .then(res => {
                console.log(res.data);
                if(res.data==="Login Successful"){
                    alert("Login Successful");
                    //store email in local storage
                    localStorage.setItem('aid', aid);
                    window.location.href = "/citizenprofile";
                }
                else{
                    alert("Login Failed");
                    window.location.href = "/citizenlogin";
                }
            })
            .catch(err => {
                console.log(err);
            })
        setAid('');
        setPassword('');
    }

    return (
        <div className="custlogin">
            <div className="custlogin__container">
                <h1><b>CITIZEN LOGIN</b></h1>
                <form>
                    <h5>Aadhar ID</h5>
                    <input type="text" value={aid} onChange={handleAid} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={handlepassword} />
                    <button type="submit" onClick={handlesubmit} className="custlogin__signInButton">Login</button>
                </form>
            </div>
        </div>
    )
}

export default CitizenLogin


