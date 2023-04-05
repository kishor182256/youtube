import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isMenuOpen = useSelector(state=>state.app.isMenuOpen)

  


 

  if(!isMenuOpen) return null;
  return (
    <div className="shadow-lg w-48">
      <h1 className="p-5">SubScritions</h1>
      <ul className="p-5">
        <Link to='/'>
        <li className="cursor-pointer">Home</li></Link>      
        <li>Sports</li>
        <li>Gaming</li>
        <li>Videos</li>
      </ul>

      <h1 className="p-5">Watch Later</h1>
      <ul className="p-5">
        <li>Music</li>        
        <li>Sports</li>
        <li>Gaming</li>
        <li>Videos</li>
      </ul>
    </div>
  )
}

export default Sidebar