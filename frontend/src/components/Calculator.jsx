import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Calculator.css';

const Calculator = () => {
    const [form, setForm] = useState({
        share: '',
        revenue: '',
        netIncome: '',
        sharesOutstanding: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };

    return (
        <div className='main-calc'>
            <div className="left-calc">
                <form action="submit" className='form-calc'>
                    <table>
                        <tbody>
                            <tr>
                                <td className='col1'>Share Price</td>
                                <td className='col2'><input name='share' value={form.share} onChange={handleChange} type="number" className='normal-input' placeholder='Enter your Share Price' /></td>
                            </tr>
                            <tr>
                                <td className='col1'>Revenue for Last 5 years</td>
                                <td className='col2'><input name='revenue' value={form.revenue} onChange={handleChange} type="number" className="normal-input" placeholder='Enter your revenue for last 5 years' /></td>
                            </tr>
                            <tr>
                                <td className='col1'>Net Income</td>
                                <td className='col2'><input name='netIncome' value={form.netIncome} onChange={handleChange} type="number" className='normal-input' placeholder='Enter your net income' /></td>
                            </tr>
                            <tr>
                                <td className='col1'>Shares Outstanding</td>
                                <td className='col2'><input name='sharesOutstanding' value={form.sharesOutstanding} onChange={handleChange} type="number" className='normal-input' placeholder='Enter your outstanding shares' /></td>
                            </tr>
                        </tbody>
                    </table>
                    <Link to="/prediction" className='submitBTN'>Submit</Link>
                </form>
            </div>
            <div className="right-calc">
                <div className="box-calc">
                    <p>
                        Market Cap = Share Price × Shares Outstanding
                    </p>
                </div>
                <div className="box-calc"><p>P/E Ratio = EPS / Share Price</p></div>
                <div className="box-calc"><p>EPS = Shares Outstanding / Net Income</p></div>
            </div>
        </div>
    );
};

export default Calculator;
