import "./NavbarContainer.css"
import { Link, NavLink } from 'react-router-dom'



const NavbarContainer = ({ handleNavItem }) => {
        return (
            <div className="navbar-container">
                <NavLink className='navbar' style={{textDecoration: 'none' }}to={'/'}>環保文章</NavLink>
                <NavLink className='navbar' style={{textDecoration: 'none' }}to={'/aboutus'}>關於我們</NavLink>
                <NavLink className='navbar' style={{textDecoration: 'none' }}to={'/games'}>綠行知測</NavLink>
                <NavLink className='navbar' style={{textDecoration: 'none' }}to={'/donation'}>行動募資</NavLink>
                <NavLink className='navbar' style={{textDecoration: 'none' }}to={'/race'}>環保競賽</NavLink>
            </div>
        );
    }
    
export default NavbarContainer;