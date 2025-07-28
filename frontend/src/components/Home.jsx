// import React, { useEffect } from 'react'
// import Navbar from './shared/Navbar'
// import HeroSection from './HeroSection'
// import CategoryCarousel from './CategoryCarousel'
// import LatestJobs from './LatestJobs'
// import Footer from './shared/Footer'
// import useGetAllJobs from '@/hooks/useGetAllJobs'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'

// const Home = () => {
//   useGetAllJobs();
//   const { user } = useSelector(store => store.auth);
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (user?.role === 'recruiter') {
//       navigate("/admin/companies");
//     }
//   }, []);
//   return (
//     <div>
//       <Navbar />
//       <HeroSection />
//       <CategoryCarousel />
//       <LatestJobs />
//       <Footer />
//     </div>
//   )
// }

// export default Home

import React, { useEffect } from 'react';
import Navbar from './shared/Navbar';
import HeroSection from './HeroSection';
import CategoryCarousel from './CategoryCarousel';
import LatestJobs from './LatestJobs';
import Footer from './shared/Footer';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  useGetAllJobs();
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate('/admin/companies');
    }
  }, [user, navigate]);

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-20 py-10 sm:py-16 bg-white">
        <HeroSection />
      </section>

      {/* Categories Section */}
      <section className="px-4 sm:px-6 lg:px-20 py-12 bg-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Explore Job Categories</h2>
          <p className="mt-2 text-sm sm:text-base text-gray-500">
            Choose a category that matches your skills
          </p>
        </div>
        <CategoryCarousel />
      </section>

      {/* Latest Jobs */}
      <section className="px-4 sm:px-6 lg:px-20 py-12 bg-white">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Latest Job Openings</h2>
          <p className="mt-2 text-sm sm:text-base text-gray-500">
            Get hired by top companies today
          </p>
        </div>
        <LatestJobs />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
