//axios get method to get data from backend from localstorage

import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Profile() {
    const [aid, setAid] = useState('');
    const [cname, setCname] = useState('');
    const [cstate, setCstate] = useState('');
    const [carea, setCarea] = useState('');
    const [age, setAge] = useState('');
    const [csalary, setCsalary] = useState([]);
    const [cid, setCid] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const aid = localStorage.getItem('aid');
        console.log(aid);
        axios.get('http://localhost:8080/getAllCitizens')
            .then(res => {
                console.log(res.data);
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    //create function handlesubmit to update data
    async function handleUpdate(aid) {
        let salary = prompt("Enter the updated salary");
        await axios.put('http://localhost:8080/putAid/' + aid + "/" + salary);
        window.location.reload();
    }

    async function handleDelete(aid) {
        await axios.delete('http://localhost:8080/del/' + aid)
        window.location.reload();
        console.log(123);
    }
    return (
        <>

        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>AID</th>
                <th>Citizen Name</th>
                <th>State</th>
                <th>Area</th>
                <th>Age</th>
                <th>Salary</th>
            </tr>
            </thead>
            <tbody>
                {
                    data.map((user) => {
                        return(
                            <tr key={user.cid}>
                                <td>{user.cid}</td>
                                <td>{user.aid}</td>
                                <td>{user.cname}</td>
                                <td>{user.cstate}</td>
                                <td>{user.carea}</td>
                                <td>{user.age}</td>
                                <td>{user.csalary}</td>

                                <button onClick={() => {handleDelete(user.aid)}}>Delete</button>
                                <button onClick={() => {handleUpdate(user.aid)}}>Update</button>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

        
        </>
    )
}

export default Profile