import React, { useState } from 'react';

const Dashboard = () => {
  const [result, setResult] = useState(null);

  const runBacktest = async () => {
    const res = await fetch('http://localhost:5000/api/backtest', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ strategy: 'straddle' })
    });
    const data = await res.json();
    setResult(data);
  };

  return (
    <div className="p-4">
      <button onClick={runBacktest} className="px-4 py-2 bg-green-500 text-white rounded">Run Backtest</button>
      {result && <pre className="mt-4">{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
};

export default Dashboard;
