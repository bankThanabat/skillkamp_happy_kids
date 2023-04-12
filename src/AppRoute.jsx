import React from 'react';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProductListPage from './pages/ProductListPage';
import ProductInfoPage from './pages/ProductInfoPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import PaymentSummaryPage from './pages/PaymentSummaryPage';
import ShopCollentionPage from './pages/ShopCollectionPage';
import OurStoryPage from './pages/OurStoryPage';
import ContactPage from './pages/ContactPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types';
import Footer from './components/Footer';
import StorePolicyPage from './pages/StorePolicyPage';
import FAQPage from './pages/FAQPage';
import ShippingPage from './pages/ShippingPage';
import MyOrderPage from './pages/MyOrderPage';


const routes = [
  {
    id: 1,
    path: '/',
    exact: true,
    component: ProductListPage,
    isShowNavbar: true,
    isShowFooter: true,
  },
  {
    id: 2,
    path: '/product/:id',
    component: ProductInfoPage,
    isShowNavbar: true,
    isShowFooter: true,
  },
  {
    id: 3,
    path: '/cart',
    component: ShoppingCartPage,
    isShowNavbar: true,
    isShowFooter: true,
  },
  {
    id: 4,
    path: '/payment',
    component: PaymentSummaryPage,
    isShowNavbar: true,
    isShowFooter: true,
  },
  {
    id: 5,
    path: '/login',
    component: LoginPage,
    isShowNavbar: false,
    isShowFooter: false,
  },
  {
    id: 6,
    path: '/signup',
    component: SignupPage,
    isShowNavbar: false,
    isShowFooter: false,
  },
  {
    id: 7,
    path: '/shopcollection',
    component: ShopCollentionPage,
    isShowNavbar: true,
    isShowFooter: true,
  },
  {
    id: 8,
    path: '/ourstory',
    component: OurStoryPage,
    isShowNavbar: true,
    isShowFooter: true,
  },
  {
    id: 9,
    path: '/contact',
    component: ContactPage,
    isShowNavbar: true,
    isShowFooter: true,
  },
  {
    id: 10,
    path: '/home',
    exact: true,
    component: ProductListPage,
    isShowNavbar: true,
    isShowFooter: true,
  },
  {
    id: 11,
    path: '/storepolicy',
    exact: true,
    component: StorePolicyPage,
    isShowNavbar: true,
    isShowFooter: true,
  },
  {
    id: 12,
    path: '/storepolicy',
    exact: true,
    component: StorePolicyPage,
    isShowNavbar: true,
    isShowFooter: true,
  },
  {
    id: 13,
    path: '/paymentmethod',
    exact: true,
    component: StorePolicyPage,
    isShowNavbar: true,
    isShowFooter: true,
  },
  {
    id: 13,
    path: '/faq',
    exact: true,
    component: FAQPage,
    isShowNavbar: true,
    isShowFooter: true,
  },
  {
    id: 14,
    path: '/shipping',
    exact: true,
    component: ShippingPage,
    isShowNavbar: true,
    isShowFooter: true,
  },
  {
    id: 14,
    path: '/order',
    exact: true,
    component: MyOrderPage,
    isShowNavbar: true,
    isShowFooter: true,
  },
  {
    id: 15,
    path: '/product-info/:sku',
    exact: true,
    component: ProductInfoPage,
    isShowNavbar: true,
    isShowFooter: true,
  },
  {
    id: 16,
    path: '/shopping-cart',
    exact: true,
    component: ShoppingCartPage,
    isShowNavbar: true,
    isShowFooter: true,
  },
];

const Page = ({ isShowNavbar, component, isShowFooter }) => {
  return (
    <>
      {isShowNavbar && <Navbar />}
      {component}
      {isShowFooter && <Footer />}
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
            element={<Page isShowNavbar={route.isShowNavbar} isShowFooter={route.isShowFooter} component={<route.component />} />}
          />
        ))}
      </Routes>
    </Router>
  );
};

Page.propTypes = {
  isShowNavbar: PropTypes.bool,
  component: PropTypes.element,
  isShowFooter: PropTypes.bool,
};

export default AppRoutes;
