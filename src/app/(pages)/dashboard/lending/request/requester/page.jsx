import React from 'react';

const Details = ({ id }) => {
  const item = { Requester: 'PHILIP OMATOSANYA', Amount: 'N3000000', InterestDuration: '12.5% Repayment 12days' };

  return (
    <div>
      <h1>Details for Item {item.id}</h1>
      <p>Name: {item.name}</p>
      <p>Email: {item.email}</p>
    </div>
  );
};

export default Details;
