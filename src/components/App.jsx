import React from 'react';
import user from 'data/user.json';
import Profile from './Profile/Profile';
import data from 'data/data.json';
import Statistics from './Statistics/Statistics';
import transactions from 'data/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        padding: '30px 60px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 25,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
