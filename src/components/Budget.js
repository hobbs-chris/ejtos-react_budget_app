import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch ,expenses , currency } = useContext(AppContext);

    const changeBudget = (value) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost); 
        }, 0);

        if(value<totalExpenses) {
            alert("Budget cannot be lower than what has already been allocated");
        } else {
            dispatch({
                type: 'SET_BUDGET' ,
                payload: value,
            })
            }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={budget} onInput={(event)=>changeBudget(event.target.value)}></input>
        </div>
    );
};
export default Budget;