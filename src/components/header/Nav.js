import styled from 'styled-components';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <StyledNav className="nav">
            <StyledList className="nav__list">
                <Link to="/">
                    <li className="nav__list__item">Home</li>
                </Link>
                <Link to="/addBlog">
                    <li className="nav__list__item">Add Blog</li>
                </Link>
                <Link to="/about">
                    <li className="nav__list__item">About</li>
                </Link>    
            </StyledList>
        </StyledNav>
    )
}

export default Nav;


const StyledNav = styled.nav`
    
`

const StyledList = styled.ul`
    display: flex;
    gap: 2rem;
`