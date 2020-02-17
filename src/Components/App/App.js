import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import ZipCodeForm from '../../Containers/ZipCodeForm/ZipCodeForm';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <main className="app-main">
      <Route path='/' render={() => {
        return <Header />
        }}
      />
      <Route exact path='/' render={() => {
        return <ZipCodeForm />
        }}
      />
    </main>
  );
}

export default App;
