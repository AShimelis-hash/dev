import React, {useState} from 'react'
import  { FaMoneyBill, FaMoneyBillAlt, FaMoneyCheckAlt } from 'react-icons/fa'

function MoneyManager() {
  const [amount, setAmount] = useState(100);
  const [balance, setBalance] = useState(100);
  const [income, setIncome] = useState(0);
  

  const handleSubmit = (e) => {
    e.preventDefault(e.target.value);
    // Handle form submission
  };

  return (
    <div className='w-70% bg-pink-100 flex flex-col items-center justify-center p-4 rounded-lg shadow-lg'>
      <h2>Money Manager</h2>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-4 bg-gray-300 p-4 rounded-lg shadow-lg'>
          <div className='flex items-center gap-2'>
            <FaMoneyBill size={24}/>
          <label>
            Amount:
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
        </div>
        <div className='flex items-center gap-2'>
            <FaMoneyBillAlt size={24}/>
          <label>
            Income:
            <input
              type="text"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
            />
          </label>
        </div>
        <div className='flex items-center gap-2'>
            <FaMoneyCheckAlt size={24}/>
          <label>
            Balance:
            <input
              type="text"
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
            />
          </label>
        </div>
        <button className='bg-blue-500 hover:text-blue-700 rounded-md border-slate-300' type="submit">Submit</button>
        </div>
     </form>
      </div> )
}

export default MoneyManager