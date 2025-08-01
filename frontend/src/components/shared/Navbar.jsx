// import React from 'react'
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
// import { Button } from '../ui/button'
// import { Avatar, AvatarImage } from '../ui/avatar'
// import { LogOut, User2 } from 'lucide-react'
// import { Link, useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import axios from 'axios'
// import { USER_API_END_POINT } from '@/utils/constant'
// import { setUser } from '@/redux/authSlice'
// import { toast } from 'sonner'

// const Navbar = () => {
//     const { user } = useSelector(store => store.auth);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const logoutHandler = async () => {
//         try {
//             const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
//             if (res.data.success) {
//                 dispatch(setUser(null));
//                 navigate("/");
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.response.data.message);
//         }
//     }
//     return (
//         <div className='bg-white'>
//             <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
//                 <div>
//                     <h1 className='text-2xl font-bold'>Job<span className='text-[#F83002]'>Portal</span></h1>
//                 </div>
//                 <div className='flex items-center gap-12'>
//                     <ul className='flex font-medium items-center gap-5'>
//                         {
//                             user && user.role === 'recruiter' ? (
//                                 <>
//                                     <li><Link to="/admin/companies">Companies</Link></li>
//                                     <li><Link to="/admin/jobs">Jobs</Link></li>
//                                 </>
//                             ) : (
//                                 <>
//                                     <li><Link to="/">Home</Link></li>
//                                     <li><Link to="/jobs">Jobs</Link></li>
//                                     <li><Link to="/browse">Browse</Link></li>
//                                 </>
//                             )
//                         }


//                     </ul>
//                     {
//                         !user ? (
//                             <div className='flex items-center gap-2'>
//                                 <Link to="/login"><Button variant="outline">Login</Button></Link>
//                                 <Link to="/signup"><Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Signup</Button></Link>
//                             </div>
//                         ) : (
//                             <Popover>
//                                 <PopoverTrigger asChild>
//                                     <Avatar className="cursor-pointer">
//                                         <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
//                                     </Avatar>
//                                 </PopoverTrigger>
//                                 <PopoverContent className="w-80">
//                                     <div className=''>
//                                         <div className='flex gap-2 space-y-2'>
//                                             <Avatar className="cursor-pointer">
//                                                 <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
//                                             </Avatar>
//                                             <div>
//                                                 <h4 className='font-medium'>{user?.fullname}</h4>
//                                                 <p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p>
//                                             </div>
//                                         </div>
//                                         <div className='flex flex-col my-2 text-gray-600'>
//                                             {
//                                                 user && user.role === 'student' && (
//                                                     <div className='flex w-fit items-center gap-2 cursor-pointer'>
//                                                         <User2 />
//                                                         <Button variant="link"> <Link to="/profile">View Profile</Link></Button>
//                                                     </div>
//                                                 )
//                                             }

//                                             <div className='flex w-fit items-center gap-2 cursor-pointer'>
//                                                 <LogOut />
//                                                 <Button onClick={logoutHandler} variant="link">Logout</Button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </PopoverContent>
//                             </Popover>
//                         )
//                     }

//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Navbar

import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Avatar, AvatarImage } from '../ui/avatar';
import { LogOut, User2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { setUser } from '@/redux/authSlice';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate('/');
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className='bg-white shadow-sm sticky top-0 z-50 transition-all duration-300'>
      <div className='flex items-center justify-between mx-auto max-w-7xl px-6 h-16'>
        {/* Logo */}
        <Link to="/">
          <h1 className='text-2xl font-extrabold tracking-tight text-gray-800'>
            Job<span className='text-[#6A38C2]'>Portal</span>
          </h1>
        </Link>

        {/* Navigation Links */}
        <div className='flex items-center gap-10'>
          <ul className='flex font-medium text-gray-700 items-center gap-6 text-sm'>
            {user && user.role === 'recruiter' ? (
              <>
                <li className='hover:text-[#6A38C2] transition'>
                  <Link to='/admin/companies'>Companies</Link>
                </li>
                <li className='hover:text-[#6A38C2] transition'>
                  <Link to='/admin/jobs'>Jobs</Link>
                </li>
              </>
            ) : (
              <>
                <li className='hover:text-[#6A38C2] transition'>
                  <Link to='/'>Home</Link>
                </li>
                <li className='hover:text-[#6A38C2] transition'>
                  <Link to='/jobs'>Jobs</Link>
                </li>
                <li className='hover:text-[#6A38C2] transition'>
                  <Link to='/browse'>Browse</Link>
                </li>
              </>
            )}
          </ul>

          {/* Auth Buttons or Avatar */}
          {!user ? (
            <div className='flex items-center gap-3'>
              <Link to='/login'>
                <Button
                  variant='outline'
                  className='rounded-full px-5 py-1.5 hover:border-[#6A38C2] transition'
                >
                  Login
                </Button>
              </Link>
              <Link to='/signup'>
                <Button className='bg-[#6A38C2] hover:bg-[#5b30a6] text-white rounded-full px-5 py-1.5 transition'>
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className='cursor-pointer ring-2 ring-[#6A38C2] hover:scale-105 transition-transform'>
                  <AvatarImage src={user?.profile?.profilePhoto} alt='@user' />
                </Avatar>
              </PopoverTrigger>

              <PopoverContent className='w-80 bg-white shadow-lg rounded-xl p-4'>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className='flex items-center gap-4'>
                    <Avatar className='w-12 h-12 ring-2 ring-[#6A38C2]'>
                      <AvatarImage src={user?.profile?.profilePhoto} alt='@user' />
                    </Avatar>
                    <div>
                      <h4 className='text-sm font-semibold text-gray-800'>
                        {user?.fullname}
                      </h4>
                      <p className='text-xs text-muted-foreground'>
                        {user?.profile?.bio || 'No bio available'}
                      </p>
                    </div>
                  </div>

                  <div className='mt-4 flex flex-col space-y-2 text-sm text-gray-700'>
                    {user.role === 'student' && (
                      <div className='flex items-center gap-2'>
                        <User2 size={18} />
                        <Link to='/profile'>
                          <Button variant='link' className='p-0 text-[#6A38C2] hover:underline'>
                            View Profile
                          </Button>
                        </Link>
                      </div>
                    )}

                    <div className='flex items-center gap-2'>
                      <LogOut size={18} />
                      <Button
                        onClick={logoutHandler}
                        variant='link'
                        className='p-0 text-red-500 hover:underline'
                      >
                        Logout
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

