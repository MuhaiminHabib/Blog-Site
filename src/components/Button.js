import styled from 'styled-components';

const Button = ({ text, color, bgColor, onClick}) => {
    return (
        <StyledButton
            style={{color: color, backgroundColor: bgColor, cursor: "pointer", padding: "10px 20px", marginRight: "10px"}}
            onClick={onClick}>
                {text}
        </StyledButton>
    )
}

export default Button;


const StyledButton = styled.button`
    margin-top: 3rem;
    border-radius: 0.5rem;
    border: 2px solid transparent;
    padding: 2px;

    &:hover {
        border: 2px solid var(--color-text-hover);
    }
`