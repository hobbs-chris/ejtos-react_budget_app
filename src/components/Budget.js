import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, updateBudget } = useContext(AppContext);
    const { expenses } = useContext(AppContext);
    const[editableBudget, setEditableBudget] = useState(budget); // Add a state for editable budget

    const handleBudgetChange = (event) => {
        const newBudget = parseInt(event.target.value);
        const expenseTotal = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
        setEditableBudget(event.target.value); // Update the state when the input changes value
        if (newBudget > 20000) {
            alert("Budget cannot exceed 20000");
        } else if (newBudget < expenseTotal) {
            alert('Budget cannot be less that total expenses');
        } else {
            setEditableBudget(newBudget);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        updateBudget(editableBudget); // Update the context with the new budget value
      };

    
    return (
        <div className='alert alert-secondary'>
            <form onSubmit={handleSubmit}>
            <span>Budget: £
                <input
                    type='number'
                    step='10'
                    value={editableBudget}
                    onChange={handleBudgetChange}
                />
            </span>
            </form>
        </div>
    );
};
export default Budget;
