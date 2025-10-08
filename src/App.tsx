```tsx
import React, { useState } from "react";
import btcCanister from "./canisters/btcCanister";
import solCanister from "./canisters/solCanister";

const principal = "2865794"; // your Principal ID

function App() {
  const [btcBalance, setBtcBalance] = useState("0");
  const [solBalance, setSolBalance] = useState("0");
  const [amount, setAmount] = useState("0");

  async function depositBTC() {
    await btcCanister.deposit(principal, BigInt(amount));
    checkBalances();
  }

  async function depositSOL() {
    await solCanister.deposit(principal, BigInt(amount));
    checkBalances();
  }

  async function checkBalances() {
    const btc = await btcCanister.getBalance(principal);
    const sol = await solCanister.getBalance(principal);
    setBtcBalance(btc.toString());
    setSolBalance(sol.toString());
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>✨ FairlySwap ✨</h1>
      <p>Principal: {principal}</p>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />

      <div>
        <button onClick={depositBTC}>Deposit BTC</button>
        <button onClick={depositSOL}>Deposit SOL</button>
        <button onClick={checkBalances}>Check Balances</button>
      </div>

      <p>BTC Balance: {btcBalance}</p>
      <p>SOL Balance: {solBalance}</p>
    </div>
  );
}

export default App;
