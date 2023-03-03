import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const {dispatch, currency} = useContext(AppContext);

    const changeCurrency = (cur_val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: cur_val,
        });
    };
    return (
        <div className='alert alert-secondary'>
            <span>Currency: {currency} 
      <select defaultValue={currency} className="custom-select" name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
        <option value="$" >$ Dollar</option>
        <option value="£" >£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
      </select>	

            </span>
        </div>
    );
};
export default Currency;