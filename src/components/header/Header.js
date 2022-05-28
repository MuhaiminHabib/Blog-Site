import styled from 'styled-components';
import Nav from './Nav';

const Header = () => {
    return (
        <StyledHeaderContainer >
             <StyledHeader>
                <h1 className="header__logo">Habib's Blog</h1>
                <Nav className="navigation"/>
            </StyledHeader>
        </StyledHeaderContainer>
       
        
    )
}

export default Header


const StyledHeaderContainer = styled.div`
    background-color: var(--color-primary-deep);
    width: 100%;
`


const StyledHeader = styled.header`
    background-color: var(--color-primary-deep);
    padding:2rem 0rem;
    margin: 0 auto;
    width: var(--container-width-lg);
    display: flex;
    justify-content: space-between;
`

