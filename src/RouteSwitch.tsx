import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Shop from './Shop';
import About from './About'

const RouteSwitch = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} >
            <Route index element={<Home />} /> {/* resets the default index/homepage to the home component */}
            <Route path='shop' element={<Shop />} />
            <Route path='about' element={<About />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;