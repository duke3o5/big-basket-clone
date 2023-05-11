
import { FruitandVeg } from './Pages/FruitandVeg';
import { Admin } from './Pages/Admin';
import { Navbar } from './components/Navbar';
import { HomePage } from './Pages/HomePage';
import MainRoutes from './components/MainRoutes';
import Cart from './Pages/CartPage';
import LoginPages from './Routes/LoginPages';
import Address from './Routes/Address';
import PaymentPage from './Routes/Payment';
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      {/* <Navbar/>
       */}
       <Nav/>
      <MainRoutes/>
    </div>
  );
}

export default App;
