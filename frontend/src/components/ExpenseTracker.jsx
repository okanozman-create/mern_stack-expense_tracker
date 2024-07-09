import React, { useState } from "react";
import axios from "axios";

const ExpenseTracker = () => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleDelete = (index) => {
    // Make a copy of the transactions array
    const updatedTransactions = [...transactions];
    // Get the amount of the transaction to be deleted
    const deletedAmount = updatedTransactions[index].amount;
    // Remove the transaction at the specified index
    updatedTransactions.splice(index, 1);
    // Update the state with the modified transactions array
    setTransactions(updatedTransactions);
    // Update the balance by subtracting the deleted amount
    setBalance((prevBalance) => prevBalance - deletedAmount);
  };

  const addExpense = async () => {
    const parsedAmount = parseFloat(amount);

    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    const newExpense = { description, amount: parsedAmount };

    try {
      const response = await axios.post(
        "http://localhost:5000/expenses",
        newExpense
      );
      if (response.status === 200) {
        // Update balance
        setBalance((prevBalance) => prevBalance + parsedAmount);

        // Add transaction to the list
        setTransactions((prevTransactions) => [
          ...prevTransactions,
          response.data, // Use the saved expense returned from the server
        ]);

        setDescription("");
        setAmount("");
      } else {
        console.error("Failed to add expense:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  };

  return (
    <section className="section bg-orange-300 flex flex-col  items-center ">
        <div className=" p-4">
      <div className=" mb-10 ">
        <h1 className="text-4xl text-center tracking-wider">Expense Tracker</h1>
      </div>
      <h2 className="text-3xl text-center bg-slate-500 text-white font-extrabold">
        Balance: $<span id="balance">{balance.toFixed(2)}</span>
      </h2>


     <div className="mt-5 mb-8">
        <form className="flex max-w-full px-12 py-2 gap-1">
          <input
            placeholder=" Description"
            type="text"
            className="rounded-sm border border-stone-500 shadow-lg "
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <input
            placeholder="Amount"
            type="number"
            className="rounded-sm border border-stone-500  shadow-lg "
            id="amount"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />

          <button
            className="block rounded-lg bg-slate-500 cursor-pointer p-3 text-white font-bold  hover:bg-slate-700"
            type="button"
            onClick={addExpense}
          >
            Add Expense
          </button>
        </form>
      </div>

      <h2 className={`${transactions.length !== 0 ? 'block' : 'hidden'} text-3xl mb-7 text-left pl-2 underline decoration-slate-500`}>Expense List</h2>

      {/* <ul className="flex flex-col gap-3">
        {transactions.map((transaction, index) => (
          <li key={index} className=" text-left bg-white shadow-xl pl-2">
            
            {`${transaction.description}: $${transaction.amount.toFixed(
              2
            )}`}
          </li>
          
         
        ))}
      </ul> */}

<ul className="flex flex-col gap-3">
  {transactions.map((transaction, index) => (
    <li key={index} className="flex justify-between items-center bg-white shadow-xl pl-2">
      <span className="text-left uppercase">{`${transaction.description}: $${transaction.amount.toFixed(2)}`}</span>
      <button onClick={() => handleDelete(index)} className="bg-slate-500 hover:bg-slate-700 text-white py-1 px-2 rounded-md">
        Delete
      </button>
    </li>
  ))}
</ul>




      </div>
    </section>
  );
};

export default ExpenseTracker;

// <div className="container">
//     <h1>Expense Tracker</h1>
//     <div className="balance">
//         <h2>
//             Balance: $
//             <span id="balance">
//                 {balance.toFixed(2)}
//             </span>
//         </h2>
//     </div>
//     <div className="transactions">
//         <h2>Transactions</h2>
//         <ul>
//             {
//                 transactions.map((transaction, index) => (
//                     <li key={index}>
//                         {`${transaction.description}: $${transaction.amount.toFixed(2)}`}
//                     </li>
//                 ))
//             }
//         </ul>
//     </div>
//     <div className="add-expense">
//         <h2>Add Expense</h2>
//         <form>
//             <label htmlFor="description">
//                 Description:
//             </label>
//             <input
//                 type="text"
//                 id="description"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 required
//             />
//             <label htmlFor="amount">
//                 Amount:
//             </label>
//             <input
//                 type="number"
//                 id="amount"
//                 step="0.01"
//                 value={amount}
//                 onChange={(e) => setAmount(e.target.value)}
//                 required
//             />
//             <button type="button" onClick={addExpense}>
//                 Add Expense
//             </button>
//         </form>
//     </div>
// </div>
