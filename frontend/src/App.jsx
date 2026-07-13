import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

// User
import UserLogin from "./pages/user/Login";
import UserRegister from "./pages/user/Register";

// Admin
import AdminLogin from "./pages/admin/Login";
import AdminRegister from "./pages/admin/Register";
import AdminDashboard from "./pages/admin/Dashboard";
import ProtectedRoute from "./components/auth/ProtectedRoute";

import Users from "./pages/admin/Users";
import Sellers from "./pages/admin/Sellers";
import AdminBooks from "./pages/admin/Books";
import Orders from "./pages/admin/Orders";
//sellers
import SellerRegister from "./pages/seller/Register";
import SellerLogin from "./pages/seller/Login";
import SellerDashboard from "./pages/seller/Dashboard";
import AddBook from "./pages/seller/AddBook";
import Products from "./pages/seller/Products";
import SellerOrders from "./pages/seller/Orders";
function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserRegister />} />

          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/register" element={<AdminRegister />} />
          <Route
            path="/admin/dashboard"
            element={
            <ProtectedRoute role="admin">
            <AdminDashboard />
            </ProtectedRoute>
          }
          />
          <Route
  path="/admin/users"
  element={
    <ProtectedRoute role="admin">
      <Users />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/sellers"
  element={
    <ProtectedRoute role="admin">
      <Sellers />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/books"
  element={
    <ProtectedRoute role="admin">
      <AdminBooks />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/orders"
  element={
    <ProtectedRoute role="admin">
      <Orders />
    </ProtectedRoute>
  }
/>
<Route
    path="/seller/register"
    element={<SellerRegister />}
/>
<Route path="/seller/login" element={<SellerLogin />} />

<Route
  path="/seller/dashboard"
  element={
    <ProtectedRoute role="seller">
      <SellerDashboard />
    </ProtectedRoute>
  }
/>
<Route
  path="/seller/add-book"
  element={
    <ProtectedRoute role="seller">
      <AddBook />
    </ProtectedRoute>
  }
/>
<Route
  path="/seller/products"
  element={
    <ProtectedRoute role="seller">
      <Products />
    </ProtectedRoute>
  }
/>
<Route
  path="/seller/orders"
  element={
    <ProtectedRoute role="seller">
      <SellerOrders />
    </ProtectedRoute>
  }
/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;