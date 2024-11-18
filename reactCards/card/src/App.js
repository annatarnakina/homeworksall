import './App.css';
import React from 'react';
import AppHeader from './components/AppHeader';
import AppMain from './components/AppMain';
import AppFooter from './components/AppFooter';


function App() {
  return (
    <div className="App">
    <React.Fragment>
      <AppHeader />
      <AppMain />
      <AppFooter />
    </React.Fragment>
    </div>
  );
}

export default App;
