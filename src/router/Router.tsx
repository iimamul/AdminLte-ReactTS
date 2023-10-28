import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from '~/pages/DashboardPage/DashboardPage';
import OrdersPage from '~/pages/OrdersPage/OrdersPage';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
