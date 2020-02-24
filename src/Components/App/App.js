import React from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import Header from '../Header/Header';
import ZipCodeForm from '../../Containers/ZipCodeForm/ZipCodeForm';
import MarketContainer from '../../Containers/MarketContainer/MarketContainer';
import VendorsContainer from '../../Containers/VendorsContainer/VendorsContainer';
import MapsContainer from '../../Containers/MapsContainer/MapsContainer';
import MarketPage from '../../Containers/MarketPage/MarketPage';
import VendorPage from '../../Containers/VendorPage/VendorPage';
import VendorSelectContainer from '../../Containers/VendorSelectContainer/VendorSelectContainer';
import VendorForm from '../../Containers/VendorForm/VendorForm';
import { Route, Redirect } from 'react-router-dom';

const App = () => {
  const zipCode = useSelector(state => state.zipCode);

  return (
    <main className="app-main">
      <Route path='/' render={({ location }) => {
        return <Header path={location.pathname}/>
        }}
      />
      <Route exact path='/' render={({ location }) => {
        return <ZipCodeForm path={location.pathname}/>
        }}
      />
      <Route exact path='/markets' render={({ location }) => {
        return (
          <div className='market-map-container'>
            <MarketContainer />
            <MapsContainer />
            {!zipCode && <ZipCodeForm path={location.pathname}/>}
          </div>
        )
        }}
      />
      <Route exact path='/markets/:id' render={() => {
        return (
          <div className='market-map-container'>
            <MarketPage />
            <MapsContainer />
          </div>
        )
        }}
      />
      <Route exact path='/markets/:id/vendors' render={() => {
        return (
          <div className='market-map-container'>
            <VendorsContainer />
          </div>
        )
      }}
      />
      <Route exact path='/vendor/account' render={() => {
        return ( <VendorSelectContainer /> )
        }}
      />
      <Route exact path='/vendor/account/form' render={() => {
        return (
            <VendorForm />
        )
        }}
      />
         <Route exact path='/markets/:id/vendors/:id' render={() => {
        return (
            <VendorPage />
        )
        }}
      />
    </main>
  );
}

export default App;
