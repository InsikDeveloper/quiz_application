import React from "react";

const Score = ({ score }) => {
  return (
    <div className="flex flex-col items-center space-y-8">
      <h1 className="md:text-4xl font-bold font-mono sm:text-2xl ">
        You've Got:
      </h1>
      <h1 className="text-3xl font-bold font-mono ">{score}/50</h1>
      {score == 50 ? (
        <h1 className="text-3xl font-bold font-mono text-green-400">Perfect</h1>
      ) : null}
      <button
        onClick={() => window.location.reload()}
        className="py-3 px-7 bg-purple-600 text-slate-200 text-2xl font-bold rounded-lg cursor-pointer"
      >
        OK
      </button>
    </div>
  );
};

export default Score;
