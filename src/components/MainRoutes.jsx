import { Route, Routes } from "react-router-dom";
import { FruitandVeg } from "../Pages/FruitandVeg";
import { SingleProductPage } from "../Pages/SingleProductPage";
import Cart from "../Pages/CartPage";
import Address from "../Routes/Address";
import PaymentPage from "../Routes/Payment";
import { HomePage } from "../Pages/HomePage";
import { AdminDataList } from "./adminComponents/AdminDataList";
import { AdminAddDataForm } from "./adminComponents/AdminAddDataForm";
import { AdminStats } from "./adminComponents/AdminStats";
import { AdminEditProduct } from "./adminComponents/AdminEditProduct";
import { Login } from "../Pages/Login";
import { Search } from "../Pages/Search";
import SignUp from "../Pages/SignUp.jsx";
import { PrivateRoutes } from "./PrivateRoute";

const MainRoutes = ({search}) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<FruitandVeg />} />
      <Route path="/cart" element={
        <PrivateRoutes>
          <Cart />
        </PrivateRoutes>
      } />
      <Route path="/search" element={<Search search={search} />} />
      <Route path="/products/:id" element={<SingleProductPage />} />
      <Route path="*" element={<h3>Page Not Found !</h3>} />
      <Route path="/productForm" element={<AdminAddDataForm />} />
      <Route path="/admin" element={<AdminDataList />} />
      <Route path="/stats" element={<AdminStats />} />
      <Route path="/edit/:id" element={<AdminEditProduct />} />
      <Route path="/address" element={<Address />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/payment" element={<PaymentPage />} />
    </Routes>
  );
};

export default MainRoutes;
