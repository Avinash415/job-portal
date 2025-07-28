// import React, { useState } from 'react'
// import { Button } from './ui/button'
// import { Search } from 'lucide-react'
// import { useDispatch } from 'react-redux';
// import { setSearchedQuery } from '@/redux/jobSlice';
// import { useNavigate } from 'react-router-dom';

// const HeroSection = () => {
//     const [query, setQuery] = useState("");
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const searchJobHandler = () => {
//         dispatch(setSearchedQuery(query));
//         navigate("/browse");
//     }

//     return (
//         <div className='text-center'>
//             <div className='flex flex-col gap-5 my-10'>
//                 <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>No. 1 Job Hunt Website</span>
//                 <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur temporibus nihil tempora dolor!</p>
//                 <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
//                     <input
//                         type="text"
//                         placeholder='Find your dream jobs'
//                         onChange={(e) => setQuery(e.target.value)}
//                         className='outline-none border-none w-full'

//                     />
//                     <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2]">
//                         <Search className='h-5 w-5' />
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default HeroSection

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative isolate overflow-hidden rounded-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-20 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              Find Your <span className="text-[#6A38C2]">Dream Job</span> Today
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Browse thousands of job listings from top companies. Whether you're a developer, designer,
              or data scientist — your next opportunity is here.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Link to="/jobs">
                <button className="bg-[#6A38C2] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#5b30a6] transition">
                  Browse Jobs
                </button>
              </Link>
              <Link to="/signup">
                <button className="border border-[#6A38C2] text-[#6A38C2] font-semibold px-6 py-3 rounded-full hover:bg-[#6A38C2] hover:text-white transition">
                  Join Now
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://media.istockphoto.com/id/1394701218/photo/job-search-concept-find-your-career-woman-looking-at-online-website-by-laptop-computer-people.jpg?s=612x612&w=0&k=20&c=V32cT3dAoI7plQSnV-i7YxP43YvaoyA0jLS4729gNWM="
              alt="Job search illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
