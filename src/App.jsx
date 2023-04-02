import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProductListPage from './pages/ProductListPage';
import ProductInfoPage from './pages/ProductInfoPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import PaymentSummaryPage from './pages/PaymentSummaryPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact Component={ProductListPage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/signup" Component={SignupPage} />
          <Route path="/product/:id" Component={ProductInfoPage} />
          <Route path="/cart" Component={ShoppingCartPage} />
          <Route path="/payment" Component={PaymentSummaryPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
