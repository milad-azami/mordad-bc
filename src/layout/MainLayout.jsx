import { Link } from "react-router-dom";

// eslint-disable-next-line
function MainLayout({ children }) {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Main Page</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/registration">Registration</Link>
        </li>
      </ul>
      <main>{children}</main>
    </div>
  );
}

export default MainLayout;
