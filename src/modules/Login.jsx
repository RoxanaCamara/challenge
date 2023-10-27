import React, { useState } from "react";

const Login = ({ setAutenticado }) => {

  const [user, setUser] = useState({ name: '', password: '' });

  const handleUser = (name, value) => {
    setUser( { ...user, [name]: value  }  )
  }

  const handleAutenticar = () => {
    
  }

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        id="name_user"
        placeholder="Enter name user"
        onChange={(e) => {
          handleUser('name', e.target.value);
        }}
      />

      <input
        type="password"
        id="password"
        placeholder="Password"
        onChange={(e) => {
          handleUser( 'password', e.target.value);
        }}
      />
      <button onClick={(e) => setAutenticado(true)}>Login</button>
    </div>
  );
};

export default Login;
