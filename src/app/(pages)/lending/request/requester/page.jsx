import React from 'react';

const Details = ({ id }) => {
  const item = { Requester: 'PHILIP OMATOSANYA', Amount: 'N3000000', InterestDuration: '12.5% Repayment 12days' };

  return (
    <div>
      <h1>Details for Item {id}</h1>
      <p>Requester: {item.Requester}</p>
      <p>Amount: {item.Amount}</p>
      <p>Interest Duration: {item.InterestDuration}</p>
    </div>
  );
};

export default Details;
