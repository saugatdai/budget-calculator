import React from 'react';
import { MdSend } from "react-icons/md";

export const ExpenseForm = ({charge, amount, handleCharge, handleAmount, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-center">
                <div className="form-group">
                    <label htmlFor="expense">charge</label>
                    <input name="charge"
                        type="text"
                        className="form-control"
                        id="charge"
                        placeholder="e.g. rent" 
                        value={charge} onChange={handleCharge}/>
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input name="amount"
                        type="number"
                        className="form-control"
                        id="amount"
                        placeholder="e.g. 100" 
                        value={amount}
                        onChange={handleAmount}/>
                </div>
            </div>
            <button type="submit" className="btn">
                submit
                    <MdSend className="btn-icon" />
            </button>
        </form>
    )
}
