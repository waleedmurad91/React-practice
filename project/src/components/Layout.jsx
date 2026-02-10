import {Outlet, useLocation} from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux';
import { animate, reset } from '../animationSlice';
import { useEffect } from 'react';

function Layout() {
  const location = useLocation();
  const dispatch = useDispatch(); 
  useEffect(() => {
    dispatch(reset());
    const timer = setTimeout(() => {
      dispatch(animate());
    }, 10);
    return () => clearTimeout(timer);
  }, [location.pathname, dispatch]);
  return (
    <div  className="dark:bg-slate-800 dark:text-white bg-white min-h-screen pt-2 flex flex-col justify-between">
    <Navbar  />
    <Outlet />
    <Footer/>
    </div>
  );
}

export default Layout;