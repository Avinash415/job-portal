// import React from 'react';
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
// import { Button } from './ui/button';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { setSearchedQuery } from '@/redux/jobSlice';

// const category = [
//     "Frontend Developer",
//     "Backend Developer",
//     "Data Science",
//     "Graphic Designer",
//     "FullStack Developer"
// ]

// const CategoryCarousel = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const searchJobHandler = (query) => {
//         dispatch(setSearchedQuery(query));
//         navigate("/browse");
//     }

//     return (
//         <div>
//             <Carousel className="w-full max-w-xl mx-auto my-20">
//                 <CarouselContent>
//                     {
//                         category.map((cat, index) => (
//                             <CarouselItem className="md:basis-1/2 lg-basis-1/3">
//                                 <Button onClick={()=>searchJobHandler(cat)} variant="outline" className="rounded-full">{cat}</Button>
//                             </CarouselItem>
//                         ))
//                     }
//                 </CarouselContent>
//                 <CarouselPrevious />
//                 <CarouselNext />
//             </Carousel>
//         </div>
//     )
// }

// export default CategoryCarousel

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from './ui/carousel';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';

const categories = [
  'Frontend Developer',
  'Backend Developer',
  'Data Science',
  'Graphic Designer',
  'FullStack Developer'
];

const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate('/browse');
  };

  return (
    <div className="w-full max-w-6xl px-4 md:px-8 mx-auto py-16">

      <Carousel className="w-full">
        <CarouselContent className="flex gap-4">
          {categories.map((cat, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <div className="flex justify-center">
                <Button
                  onClick={() => searchJobHandler(cat)}
                  variant="outline"
                  className="rounded-full px-6 py-3 w-full text-sm font-medium border-gray-300 hover:border-[#6A38C2] hover:text-[#6A38C2] transition duration-300 shadow-sm hover:shadow-md"
                >
                  {cat}
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-[-1rem]" />
        <CarouselNext className="right-[-1rem]" />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
