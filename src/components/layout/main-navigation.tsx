import { NavLink } from 'react-router-dom';
import styles from './main-navigation.module.css';

const MainNavigation = () => {
  const loggedUserRole = localStorage.getItem('loggedUserRole');

  return (
    <nav className={styles.main_nav}>
      <ul className={styles.nav_list}>
        {loggedUserRole === 'SUPER_ADMIN' && (
          <NavLink
            to="/dentists"
            className={({ isActive }) =>
              isActive ? styles.active_nav_item : ''
            }
          >
            <li> Dentists </li>
          </NavLink>
        )}
        {loggedUserRole === 'SUPER_ADMIN' && (
          <NavLink
            to="/technicians"
            className={({ isActive }) =>
              isActive ? styles.active_nav_item : ''
            }
          >
            <li> Technicians </li>
          </NavLink>
        )}
        <NavLink
          to="/clinics"
          className={({ isActive }) => (isActive ? styles.active_nav_item : '')}
        >
          <li> Clinics </li>
        </NavLink>
        {loggedUserRole !== 'SUPER_ADMIN' &&
          loggedUserRole !== 'TECHNICIAN_USER' && (
            <NavLink
              to="/users"
              className={({ isActive }) =>
                isActive ? styles.active_nav_item : ''
              }
            >
              <li> Users </li>
            </NavLink>
          )}
        {loggedUserRole?.split('_')[0] !== 'TECHNICIAN' && (
          <NavLink
            to="/labs"
            className={({ isActive }) =>
              isActive ? styles.active_nav_item : ''
            }
          >
            <li> Labs </li>
          </NavLink>
        )}
        {loggedUserRole !== 'SUPER_ADMIN' && (
          <NavLink
            to="/orders"
            className={({ isActive }) =>
              isActive ? styles.active_nav_item : ''
            }
          >
            <li> Orders </li>
          </NavLink>
        )}
      </ul>
    </nav>
  );
};

export default MainNavigation;
