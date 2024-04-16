import links from '../utils/links';
import { NavLink } from 'react-router-dom';

const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className='nav-links' style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px' }}>
      {links.map((link) => {
        const { text, path, id, icon } = link;

        return (
          <NavLink
            to={path}
            key={id}
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            end
            style={{ display: 'flex', alignItems: 'center', padding: '10px', borderRadius: '4px', marginBottom: '10px', color: '#333', textDecoration: 'none', transition: 'background-color 0.3s ease' }}
            activeStyle={{ backgroundColor: '#647acb', color: '#fff' }}
          >
            <span className='icon' style={{ marginRight: '10px' }}>{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
