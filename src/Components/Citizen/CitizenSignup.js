import React, { useState } from 'react';
import axios from 'axios';
import "./Citizen.css"

function CitizenSignup() {
    const [aid, setAid] = useState('')
    const [cname, setCname] = useState('');
    const [cstate, setCstate] = useState('');
    const [carea, setCarea] = useState('');
    const [age, setAge] = useState('');
    const [csalary, setCsalary] = useState('');
    const [cid, setCid] = useState('');
    const [password, setPassword] = useState('');


    const handleAid = (event) => {
        setAid(event.target.value);
    }
    const handleCname = (event) => {
        setCname(event.target.value);
    }
    const handleCstate = (event) => {
        setCstate(event.target.value);
    }
    const handleCarea = (event) => {
        setCarea(event.target.value);
    }
    const handleage = (event) => {
        setAge(event.target.value);
    }
    const handleCsalary = (event) => {
        setCsalary(event.target.value);
    }
    const handleCid = (event) => {
        setCid(event.target.value);
    }

    const handlepwd = (event) =>{
        setPassword(event.target.value);
    }

    async function handlesubmit(event) {
        event.preventDefault();
        const data = {
            aid :aid,
            cname : cname,
            cstate : cstate,
            carea : carea,
            age : age,
            csalary : csalary,
            cid : cid,
            password : password
        }
        await axios.post('http://localhost:8080/addC', data)
            .then(res => {
                console.log(res.data);
                if(res.data==="Signup Successful"){
                    alert("Signup Successful");
                    window.location.href = "/citizenlogin";
                }
            })
            .catch(err => {
                console.log(err);
            })
       
    }

    

    return (
        <div className='dynamic-form'>
            <div className='full'>
                <center><h3>Citizen Signup</h3></center>
                
                <label>Aid</label>
                <input type="text" id="Aid"  onChange={handleAid} value={aid}></input>
                
                <label>Citizen Name</label>
                <input type="text" id="Cname"  onChange={handleCname} value={cname}></input>
                
                <label>State</label>
                <input type="text" id="Cstate"  onChange={handleCstate} value={cstate}></input>
                
                <label>Area</label>
                <input type="text" id="Carea"  onChange={handleCarea} value={carea}></input>
                
                <label>Age</label>
                <input type="text" id="age"  onChange={handleage} value={age}></input>
                
                <label>Salary</label>
                <input type="text" id="Csalary"  onChange={handleCsalary} value={csalary}></input><br />

                <label>Citizen id</label>
                <input type="text" id="Cid" onChange={handleCid} value={cid}></input><br />
                
                <label>Password</label>
                <input type="password" id="password" onChange={handlepwd} value={password}></input><br />
                
                <center>
                    <button className="btn btn-primary" onClick={handlesubmit}>Submit</button>
                </center>

            </div>
        </div>
    )
}


export default CitizenSignup;

