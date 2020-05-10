import React from 'react';
import './styles/App.css';
import './styles/bootstrap.min.css';
import EmployeeProvider from './components/EmployeeProvider';

function App() {
  return (
    <div className="App container">
      <EmployeeProvider/>
    </div>
  );
}

export default App;
