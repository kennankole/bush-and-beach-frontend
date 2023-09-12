import React from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { currentUserAsync, logoutUserAsync } from "../../app/authenticationSlice";
import '../../assets/styles/HomePage.css';
import '../../assets/styles/Navbar.css';

const AdminNavBar = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  React.useEffect(() => {
    dispatch(currentUserAsync());
  }, []);

  const handleLogout = () => {
    dispatch(logoutUserAsync());
    navigate('/login');
  }

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {user ? (
        <>
          <Typography
            as="li"
            variant="small"
            color="black"
            className="p-1 font-normal font-poppins text-blue-50 font-semibold"
          >
            <Link to="/admin" onClick={handleLogout} className="color flex items-center font-poppins">
              Logout
            </Link>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="black"
            className="p-1 font-normal font-poppins text-blue-50 font-semibold"
          >
            <Link to="/blog-list" className="color flex items-center font-poppins">
              Create Blog
            </Link>
          </Typography>
          <Typography
            as="li"
            variant="small"
            color="black"
            className="p-1 font-normal font-poppins text-blue-50 font-semibold"
          >
            <Link to="/photo-upload" className="color flex items-center font-poppins">
              Upload Photos
            </Link>
          </Typography>
        </>
      ) : (
        <Typography
          as="li"
          variant="small"
          color="black"
          className="p-1 font-normal font-poppins text-blue-50 font-semibold"
        >
          <Link to="/login" className="color flex items-center font-poppins">
            Login
          </Link>
        </Typography>
      )
      }
    </ul >
  );

  return (
    <div className="navbar">
      <Navbar className="h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 bg-transparent border-none">
        <div className="container mx-auto flex items-center justify-between text-blue-50">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-poppins text-blue-50 font-semibold"
          >
            <Link to="/" className="color">
              Bush & Beach
            </Link>
          </Typography>
          <div className="hidden lg:block">{navList}</div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <div className="container mx-auto">
            {navList}
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default AdminNavBar;