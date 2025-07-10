import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="block">
      <div>
        <nav> 
        <ul className="flex space-x-8 justify-center items-center">
          
          <li>
             <Link className="hover:text-gray-500" to="/">Home</Link>
          </li>
          <li>
            <Link className="hover:text-gray-500" to="/dashboard">Dashboard</Link>
          </li>
         
          <li>
            <Link className="hover:text-gray-500" to="/membership">Membership</Link>
          </li>
           <li>
            <Link className="hover:text-gray-500" to="/products">Products</Link>
          </li>
           <li>
            <Link className="hover:text-gray-500" to="/services">Services</Link>
          </li>
           <li>
            <Link className="hover:text-gray-500" to="/saving">Saving</Link>
          </li>
           <li>
            <Link className="hover:text-gray-500" to="/loan">Loan</Link>
          </li>
           <li>
            <Link className="hover:text-gray-500" to="/about">About us</Link>
          </li>
           <li >
            <Link className="hover:text-gray-500" to="/contact">contact Us</Link>
          </li>
          <li >
            <Link className="hover:text-gray-500" to="/profile">Profile</Link>
          </li><li >
            <Link className="hover:text-gray-500" to="/logout">Logout</Link>
          </li>
         
        </ul>
      </nav>
        <Outlet />
      </div>
      </div>
  )
};

export default Layout;