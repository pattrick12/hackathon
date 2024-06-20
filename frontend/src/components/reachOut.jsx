import React, {useState} from 'react'
import './reachOut.css'

const reachOut = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        valuation: '',
        equity: '',
        lys: '',
        proMar: '',
        prevFund: ''
      });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };

  return (
    <div className='body-reachOut'>
        <div className="container-reachOut">
            <h1>Reach out to leading industry entrepreneur and expand your start-up</h1>
            <form action="submit" className='form-reachOut'>
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
                        <td className='col1'>Valuation</td>
                        <td className='col2'><input name='valuation' value={form.valuation} onChange={handleChange} type="number" className='normal-input' placeholder='Enter your Valuation' /></td>
                    </tr>
                    <tr>
                        <td className='col1'>Equity to be Given</td>
                        <td className='col2'><input name='equity' value={form.equity} onChange={handleChange} type="number" className="normal-input" placeholder='Enter your equity you want to dilute' /></td>
                    </tr>
                    <tr>
                        <td className='col1'>Last Year Sale</td>
                        <td className='col2'><input name='lys' value={form.lys} onChange={handleChange} type="number" className='normal-input' placeholder='Enter your Last year sales' /></td>
                    </tr>
                    <tr>
                        <td className='col1'>Profit Margin</td>
                        <td className='col2'><input name='proMar' value={form.proMar} onChange={handleChange} type="number" className='normal-input' placeholder='Enter your Profit Margin' /></td>
                    </tr>
                    <tr>
                        <td className='col1'>Previous Round FO Funding</td>
                        <td className='col2'><input name='prevFund' value={form.prevFund} onChange={handleChange} type="number" className='normal-input' placeholder='Enter your Previous Round FO Funding' /></td>
                    </tr>
                </tbody>
            </table>
            </form>
            <button className='submitBtnRO'>Submit</button>
        </div>
    </div>
  )
}

export default reachOut
