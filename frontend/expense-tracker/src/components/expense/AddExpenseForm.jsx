import React from 'react'
import {useState} from 'react';
import Input from '../Inputs/Input.jsx';
import EmojiPickerPopup from '../layouts/EmojiPickerPopup.jsx';

export default function AddExpenseForm({ onAddExpense }) {
    const [expense, setExpense] = useState({
        amount: '',
        category: '',
        date: '',
        icon: ''
    });
    const handleChange = (key , value) => setExpense({...expense, [key]: value});
  return (
    <div>
                <EmojiPickerPopup 
                    icon={expense.icon}
                    onSelect={(SelectedIcon) => handleChange('icon', SelectedIcon)}
                />
        <Input 
        value ={expense.category}
        onChange={({target}) => handleChange('category', target.value)}
        label="Category"
        placeholder='Food, Transport, etc.'
        type='text'
        /> 
        <Input 
        value ={expense.amount}
        onChange ={({target}) => handleChange('amount', target.value)}
        label="Amount"
        placeholder=''
        type='number'
        />
        <Input 
        value ={expense.date}
        onChange ={({target}) => handleChange('date', target.value)}
        label="Date"
        placeholder=''
        type='date'
        />
        <div className='flex justify-end mt-6'>
            <button
            type='button'
            className='add-btn add-btn-fill'
            onClick={()=>onAddExpense(expense)} >
                Add Expense
            </button>
        </div>

    </div>
  )
}
