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

import UserDashboard from './Pages/UserDashboard';
import BookTestDrive from './Pages/BookTestDrive';

import ReviewConfirmation from './Pages/ReviewConfirmation';
import Purchase from './Pages/Purchase';

// import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path="cars" element={<CarsListing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="offers" element={<OffersPromotions />} />
          <Route path="contact" element={<ContactSupport />} />
          <Route path="featured" element={<FeaturedCars />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="car/:carid" element={<CarDetail />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>


        <Route path="/customize/:id" element={<CarCustomization /> }/>

        <Route path="/book-test-drive/:id" element={<BookTestDrive /> } />
        <Route path="/review-confirmation" element={<ReviewConfirmation />} />
        <Route path="/purchase/:carId" element={<Purchase />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
