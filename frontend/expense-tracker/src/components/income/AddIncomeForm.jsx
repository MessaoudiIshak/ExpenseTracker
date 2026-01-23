import React from 'react'
import {useState} from 'react';
import Input from '../Inputs/Input.jsx';
import EmojiPickerPopup from '../layouts/EmojiPickerPopup.jsx';
export default function AddIncomeForm({ onAddIncome }) {
    const [income, setIncome] = useState({
        amount: '',
        source: '',
        date: '',
        icon: ''
    });
    const handleChange = (key , value) => {
        setIncome({...income, [key]: value});
    };
  return (
    <div>
                <EmojiPickerPopup 
                    icon={income.icon}
                    onSelect={(icon) => handleChange('icon', icon)}
                />
        <Input 
        value ={income.source}
        onChange={({target}) => handleChange('source', target.value)}
        label="Income Source"
        placeholder='Freelance, Salary, etc.'
        type='text'
         />
        <Input 
        value ={income.amount}
        onChange ={({target}) => handleChange('amount', parseFloat(target.value) || '')}
        label="Amount"
        placeholder=''
        type='number'
        />
        <Input 
        value ={income.date}
        onChange ={({target}) => handleChange('date', target.value)}
        label="Date"
        placeholder=''
        type='date'
        />
        <div className='flex justify-end mt-6'>
            <button
            type='button'
            className='add-btn add-btn-fill'
            onClick={()=>onAddIncome(income)}
            >Add Income</button>
        </div>
    </div>
  )
}
