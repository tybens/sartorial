import { NavLink } from 'react-router-dom';

const routes = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/sponsors', label: 'Sponsors' }
];

const Nav = () => {
  const links = routes.map(({ to, label }) => {
    return <NavLink strict exact to={to} key={to}>{label}</NavLink>}
  )

  return <nav>{ links }</nav>;
}

export default Nav