import React, { useState } from 'react';
import './SingUp.css';
const Login = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    pass: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));

  };

  const handleSubmit=()=>{
    //postrequest call
  }

  
  return (
    <div className='body-signUp'>
      <div className="container-signUp">
        <h1>Login</h1>
        <p>Welcome Back to Buildinect</p>
        <form action="submit" className='form-signUp'>
          <table>
            <tbody>
              <tr>
                <td className='col1'>Name</td>
                <td className='col2'><input name='name' value={form.name} onChange={handleChange} type="text" className='normal-input' placeholder='Enter your Name' /></td>
              </tr>
              <tr>
                <td className='col1'>Email</td>
                <td className='col2'><input name='email' value={form.email} onChange={handleChange} type="email" className='normal-input' placeholder='Enter your Email' /></td>
              </tr>
              <tr>
                <td className='col1'>Password</td>
                <td className='col2'><input name='pass' value={form.pass} onChange={handleChange} type="password" className='normal-input' placeholder='Enter your Password' /></td>
              </tr>
            </tbody>
          </table>
        </form>
        <button className='submitBtn' onClick={()=>{handleSubmit}}>Login</button>
      </div>
    </div>
  );
}

export default Login;
