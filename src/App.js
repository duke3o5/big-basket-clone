import MainRoutes from './components/MainRoutes';
import { Footer } from './components/Footer';
import Nav from './components/adminComponents/Navbar';
import { useState } from 'react';

function App() {
  const [search,setSearch]=useState('');

  return (
    <div className="App">
      <Nav setSearch={setSearch}/>
      <MainRoutes search={search}/>
      <Footer/>
    </div>
  );
}

export default App;
