import React, {useState} from 'react'
import './SingUp.css'

const SignUp = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        pNumber: '',
        desc: '',
        pass: '',
        cPass: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };


  return (
    <div className='body-signUp'>
        <div className="container-signUp">
            <h1>Sign Up</h1>
            <p>Welcome to the Sign Up page for Buildiconnect</p>
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
                        <td className='col1'>Phone Number</td>
                        <td className='col2'><input name='pNumber' value={form.pNumber} onChange={handleChange} type="tel" className='normal-input' placeholder='Enter your Phone' /></td>
                    </tr>
                    <tr>
                        <td className='col1'>Description</td>
                        <td className='col2'><input name='desc' value={form.desc} onChange={handleChange} type="text" className="desInput" placeholder='Enter your Description' /></td>
                    </tr>
                    <tr>
                        <td className='col1'>Password</td>
                        <td className='col2'><input name='pass' value={form.pass} onChange={handleChange} type="password" className='normal-input' placeholder='Enter your Password' /></td>
                    </tr>
                    <tr>
                        <td className='col1'>Confirm Password</td>
                        <td className='col2'><input name='cPass' value={form.cPass} onChange={handleChange} type="password" className='normal-input' placeholder='Confirm Password' /></td>
                    </tr>
                </tbody>
            </table>
            </form>
            <button className='submitBtn'>Sign Up</button>
        </div>
    </div>
  )
}

export default SignUp
