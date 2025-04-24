// import "./header.styles.scss";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { logoutUser, reset } from "../../features/counter/auth/authSlice";

// const Header = () => {

//     const { user } = useSelector((state) => state.auth);
//     const dispatch = useDispatch()

//     const handleLogout = async() => {
//         dispatch(logoutUser());
//         dispatch(reset());
//     };
//     return ( 
//    <header className="main-header">
//      <div className="container">
//      <Link>
//           <h1 className="logo">HN Video</h1>
//         </Link>

//         <nav>
//         <Link to="/">Home</Link>  
//          <Link to="/packages">Packages</Link>
//         {user ? (
//   <>
//     <Link to="packages/create">Create</Link>
//     <button onClick={handleLogout}>Logout</button>
//   </>
// ) : (
//   <>
   
//     <Link to="/login">Login</Link>
//     <Link to="/register">Register</Link>
//   </>
// )}

        
//         </nav>
//      </div>
//   </header>
//   );
// };

// export default Header;


import "./header.styles.scss";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser, reset } from "../../features/counter/auth/authSlice";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    dispatch(logoutUser());
    dispatch(reset());
  };

  return (
    <header className="main-header">
      <div className="container">
        <NavLink to="/" className="logo">
          <h1>HN Video</h1>
        </NavLink>

        <nav>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Home
          </NavLink>
          <NavLink to="/packages" end className={({ isActive }) => (isActive ? "active-link" : "")}>
    Packages
  </NavLink>

  {user ? (
    <>
      <NavLink to="/packages/create" className={({ isActive }) => (isActive ? "active-link" : "")}>
        Create
      </NavLink>
      <button onClick={handleLogout}>Logout</button>
    </>
          ) : (
            <>
              <NavLink to="/rooms" className={({ isActive }) => (isActive ? "active-link" : "")}>
                Rooms
              </NavLink>
              <NavLink to="/login" className={({ isActive }) => (isActive ? "active-link" : "")}>
                Login
              </NavLink>
              <NavLink to="/register" className={({ isActive }) => (isActive ? "active-link" : "")}>
                Register
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
