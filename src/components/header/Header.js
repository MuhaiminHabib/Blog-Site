import styled from 'styled-components';
import Nav from './Nav';

const Header = () => {
    return (
        <StyledHeader>
            <h1 className="header__logo">Blog Site</h1>
            <Nav className="navigation"/>
        </StyledHeader>
        
    )
}

export default Header



const StyledHeader = styled.header`
    background-color: var(--color-primary-deep);
    padding:2rem 6rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
`