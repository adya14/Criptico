import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css';

const App = () => (
  <div className="app">
    <Layout>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="routes">
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/exchanges">
            <Exchanges />
          </Route>
          <Route exact path="/cryptocurrencies">
            <Cryptocurrencies />
          </Route>
          <Route exact path="/crypto/:coinId">
            <CryptoDetails />
          </Route>
          <Route exact path="/news">
            <News />
          </Route>
        </Switch>
      </div>
      <div className="footer">
        <p style={{ color: 'white', textAlign: 'center' }}>
          &copy; {new Date().getFullYear()} Cryptico Inc. All Rights Reserved.
        </p>
      </div>
    </Layout>
  </div>
);

export default App;
