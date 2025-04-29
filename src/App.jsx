import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ProtectedRoute from './components/ProtectedRoute';

import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Homepage from './Pages/Homepage';
import CarsListing from './Pages/CarsListing';
import CarDetail from './Pages/CarDetail';

import OffersPromotions from './Pages/OffersPromotions';
import ContactSupport from './Pages/ContactSupport';
import FeaturedCars from './Pages/FeaturedCars';
import Testimonials from './Pages/Testimonials'; 
import AboutUs from './Pages/AboutUs';
import CarCustomization from './Pages/CarCustomization';


import BookTestDrive from './Pages/BookTestDrive';
import Profile from './Pages/Profile';
import Purchase from './Pages/Purchase';
import Settings from './Pages/Settings';

// import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path="models" element={<CarsListing />} />

          <Route path="offers" element={<OffersPromotions />} />
          <Route path="contact" element={<ContactSupport />} />
          <Route path="featured" element={<FeaturedCars />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="car/:carid" element={<CarDetail />} />
          <Route path="profile" element={<ProtectedRoute> <Profile /> </ProtectedRoute> } />
 
          

          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>

        <Route path="settings" element={<ProtectedRoute> <Settings /> </ProtectedRoute> } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/book-test-drive/:id" element={<ProtectedRoute> <BookTestDrive /> </ProtectedRoute> } />
        <Route path="/purchase/:carId" element={<ProtectedRoute> <Purchase /> </ProtectedRoute>} /> 
        <Route path="/customize/:id" element={<CarCustomization /> }/>


     

      </Routes>
    </BrowserRouter>
  );
};

export default App;
