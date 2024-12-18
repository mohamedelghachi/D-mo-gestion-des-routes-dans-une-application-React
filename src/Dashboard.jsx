import { Link, Outlet } from "react-router";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
          <li>
            <Link to="/Dashboard/Settings" state={{from:"Dashboard"}}>Settings</Link>
          </li>
          <li>
            <Link to="/Dashboard/profile/1" state={{from:"Dashboard"}}>Profile 1</Link>
          </li>
          <li>
            <Link to="/Dashboard/profile/2" state={{from:"Dashboard"}}>Profile 2</Link>
          </li>
        </ul>
      {/* will either be <Home/> or <Settings/> */}
      <Outlet />
    </div>
  );
}