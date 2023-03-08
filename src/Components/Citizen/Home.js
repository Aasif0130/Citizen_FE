import React from 'react'
//signup and login
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div>
      <h1>Citizen management system</h1>
     <Link to="/citizenlogin"><button>Login</button></Link>
    <Link to="/citizensignup"><button>Signup</button></Link>
    </div>
  )
}

export default Home
