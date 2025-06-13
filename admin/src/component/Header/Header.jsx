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


// import { NavLink } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { logoutUser, reset } from "../../features/counter/auth/authSlice";

// const Header = () => {
//   const { user } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();

//   const handleLogout = async () => {
//     dispatch(logoutUser());
//     dispatch(reset());
//   };

//   return (
//     <header className="bg-[#17252A] shadow-lg py-4">
//       <div className="container mx-auto flex justify-between items-center px-6">
//         <NavLink to="/" className="text-[#3AAFA9] text-3xl font-semibold">
//           <h1>HN Video</h1>
//         </NavLink>

//         <nav className="flex space-x-6">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive ? "text-[#3AAFA9] font-semibold" : "text-[#DEF2F1] hover:text-[#3AAFA9]"
//             }
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/packages"
//             end
//             className={({ isActive }) =>
//               isActive ? "text-[#3AAFA9] font-semibold" : "text-[#DEF2F1] hover:text-[#3AAFA9]"
//             }
//           >
//             Packages
//           </NavLink>

//           {user ? (
//             <>
//               <NavLink
//                 to="/packages/create"
//                 className={({ isActive }) =>
//                   isActive ? "text-[#3AAFA9] font-semibold" : "text-[#DEF2F1] hover:text-[#3AAFA9]"
//                 }
//               >
//                 Create
//               </NavLink>
//               <button
//                 onClick={handleLogout}
//                 className="text-[#DEF2F1]  border border-[#3AAFA9] py-1 px-4 rounded-md hover:bg-[#ba3e3e] hover:text-[#FEFFFF]"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <NavLink
//                 to="/rooms"
//                 className={({ isActive }) =>
//                   isActive ? "text-[#3AAFA9] font-semibold" : "text-[#DEF2F1] hover:text-[#3AAFA9]"
//                 }
//               >
//                 Rooms
//               </NavLink>
//               <NavLink
//                 to="/login"
//                 className={({ isActive }) =>
//                   isActive ? "text-[#3AAFA9] font-semibold" : "text-[#DEF2F1] hover:text-[#3AAFA9]"
//                 }
//               >
//                 Login
//               </NavLink>
//               <NavLink
//                 to="/register"
//                 className={({ isActive }) =>
//                   isActive ? "text-[#3AAFA9] font-semibold" : "text-[#DEF2F1] hover:text-[#3AAFA9]"
//                 }
//               >
//                 Register
//               </NavLink>
//             </>
//           )}
//         </nav>
//       </div>
//     </header>
//   );
// };

import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser, reset } from "../../features/counter/auth/authSlice";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Step 2

  const handleLogout = async () => {
    dispatch(logoutUser());
    dispatch(reset());
    navigate("/"); // Step 3
  };

  return (
    <header className="bg-[#17252A] shadow-lg py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <NavLink
          to="/home"
          className="flex items-center space-x-2 text-[#3AAFA9] text-3xl font-semibold "
        >
          <h1>HN Video</h1>
        </NavLink>

        <nav className="flex space-x-6">

          {user ? (
            <>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? "text-[#3AAFA9] font-semibold" : "text-[#DEF2F1] hover:text-[#3AAFA9]"
                }
              >
                Dashboard
              </NavLink>
          <NavLink
            to="/packages"
            end
            className={({ isActive }) =>
              isActive ? "text-[#3AAFA9] font-semibold" : "text-[#DEF2F1] hover:text-[#3AAFA9]"
            }
          >
            Packages
          </NavLink>

          
              <NavLink
                to="/packages/create"
                className={({ isActive }) =>
                  isActive ? "text-[#3AAFA9] font-semibold" : "text-[#DEF2F1] hover:text-[#3AAFA9]"
                }
              >
                Create Package
              </NavLink>
              <NavLink
                to="/add/video"
                className={({ isActive }) =>
                  isActive ? "text-[#3AAFA9] font-semibold" : "text-[#DEF2F1] hover:text-[#3AAFA9]"
                }
              >
                Add Video
              </NavLink>
              <button
                onClick={handleLogout}
                className="text-[#DEF2F1] border border-[#3AAFA9] py-1 px-4 rounded-md hover:bg-[#ba3e3e] hover:text-[#FEFFFF]"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-[#3AAFA9] font-semibold" : "text-[#DEF2F1] hover:text-[#3AAFA9]"
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? "text-[#3AAFA9] font-semibold" : "text-[#DEF2F1] hover:text-[#3AAFA9]"
                }
              >
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
