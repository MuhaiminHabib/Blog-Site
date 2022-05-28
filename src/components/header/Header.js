import styled from 'styled-components';
import Nav from './Nav';

const Header = () => {
    return (
        <StyledHeader className="header__container">
            <h1 className="header__logo">Blog Site</h1>
            <Nav className="navigation"/>
        </StyledHeader>
        
    )
}

export default Header



const StyledHeader = styled.header`
    display: flex;
`