import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { TiPlus } from 'react-icons/ti';
import { TiMinus } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        }

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense,
        })
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><TiPlus size='2em'style={{'backgroundColor': 'lightgreen', 'color':'white', 'border-radius': '50%'}} onClick={event => increaseAllocation(props.id)}></TiPlus></td>
        <td><TiMinus size='2em' style={{'backgroundColor': 'red', 'color':'white', 'border-radius': '50%'}} onClick={event => decreaseAllocation(props.id)}></TiMinus></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
