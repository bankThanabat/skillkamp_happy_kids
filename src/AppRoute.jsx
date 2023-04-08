import React from 'react';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProductListPage from './pages/ProductListPage';
import ProductInfoPage from './pages/ProductInfoPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import PaymentSummaryPage from './pages/PaymentSummaryPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types';


const routes = [
  {
    id: 1,
    path: '/',
    exact: true,
    component: ProductListPage,
    isShowNavbar: true,
  },
  {
    id: 2,
    path: '/product/:id',
    component: ProductInfoPage,
    isShowNavbar: true,
  },
  {
    id: 3,
    path: '/cart',
    component: ShoppingCartPage,
    isShowNavbar: true,
  },
  {
    id: 4,
    path: '/payment',
    component: PaymentSummaryPage,
    isShowNavbar: true,
  },
  {
    id: 5,
    path: '/login',
    component: LoginPage,
    isShowNavbar: false,
  },
  {
    id: 6,
    path: '/signup',
    component: SignupPage,
    isShowNavbar: false,
  },
];

const Page = ({ isShowNavbar, component }) => {
  return (
    <>
      {isShowNavbar && <Navbar />}
      {component}
    </>
  );
};

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.id}
            exact={route.exact}
            path={route.path}
            element={<Page isShowNavbar={route.isShowNavbar} component={<route.component />} />}
          />
        ))}
      </Routes>
    </Router>
  );
};

Page.propTypes = {
  isShowNavbar: PropTypes.bool,
  component: PropTypes.element,
};

export default AppRoutes;
