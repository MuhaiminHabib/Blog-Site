const Button = ({ text, color, bgColor, onClick}) => {
    return (
        <button
            style={{color: color, backgroundColor: bgColor, cursor: "pointer", padding: "10px", marginRight: "10px"}}
            onClick={onClick}>
                {text}
        </button>
    )
}

export default Button;