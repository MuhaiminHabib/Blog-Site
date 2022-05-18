import styled from 'styled-components';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav__container">
            <nav className="nav">
                <ul className="nav__list">
                    <Link to="/">
                        <li className="nav__list__item">Home</li>
                    </Link>
                    <Link to="/addBlog">
                        <li className="nav__list__item">Add Blog</li>
                    </Link>
                    {/* <Link>
                        <li className="nav__list__item">About</li>
                    </Link> */}
                    
                    
                    
                </ul>
            </nav>
        </div>
    )
}

export default Nav;