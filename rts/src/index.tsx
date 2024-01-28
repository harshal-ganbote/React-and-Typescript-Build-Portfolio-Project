import React from 'react';
import ReactDOM from 'react-dom/client';
import GuestList from './state/GuestList';
import UserSearch from './refs/UserSearch';
import EventComp from './events/EventComp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const App = () => {
  return (
    <div>
      <GuestList />
      <UserSearch />
      <EventComp />
    </div>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
