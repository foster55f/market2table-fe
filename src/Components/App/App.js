import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import ZipCodeForm from '../../Containers/ZipCodeForm/ZipCodeForm';

const App = () => {
  return (
    <main className="app-main">
      <Header />
      <ZipCodeForm />
    </main>
  );
}

export default App;
