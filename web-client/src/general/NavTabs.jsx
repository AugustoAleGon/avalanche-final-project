import { NavLink } from 'react-router-dom';

export const NavTabs = () => (
  <nav className="mb-4 -mt-6">
    <ul className="flex space-x-4">
      <li>
        <NavLink to="/" className={({ isActive }) =>
          isActive ? "text-blue-600 text-xl font-bold" : "text-gray-600 hover:text-blue-600 text-xl"
        }>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile" className={({ isActive }) =>
          isActive ? "text-blue-600 text-xl font-bold" : "text-gray-600 hover:text-blue-600 text-xl"
        }>
          Profile
        </NavLink>
      </li>
    </ul>
  </nav>
);