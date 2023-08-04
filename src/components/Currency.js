import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const {dispatch, remaining } = useContext(AppContext);

        const changeCurrency = (val) => {
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
        }
    return (
        <div>
            
                <label className="input-group-text" style={{marginLeft: '1rem' , backgroundColor: '#93e499' , color: 'white'}}>Currency
                  
                <select className='custom-select' name='currency' id="currency" onChange={(event)=>changeCurrency(event.target.value)} style={{marginLeft: '1rem' , backgroundColor: '#93e499' , color: 'white'}}>
                    <option style={{color: 'black'}} value="£"> £ Pound </option>   
                    <option style={{color: 'black'}} value="$"> $ Dollar </option>
                    <option style={{color: 'black'}} value="€"> € Euro </option>
                    <option style={{color: 'black'}} value="₹"> ₹ Ruppee </option>
                </select>
                </label>
            
            
        </div>
    )
}

export default Currency;