import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul className="flex flex-column">
          <li className="mr-4">
            <Link to="/">LandingPage</Link>
          </li>
          <li className="mr-4">
            <Link to="/LoginPage">Login Page</Link>
          </li>
          <li className="mr-4">
            <Link to="/Home">Home</Link>
          </li>
          <li className="mr-4">
            <Link to="/EventListingPage">EventListingPage</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
