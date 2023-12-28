import React, { useState } from 'react';
import LoginPage from './LoginPage';
import DataPage from './DataPage';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleBack = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <DataPage handleBack={handleBack} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
