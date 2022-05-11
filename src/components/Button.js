const Button = ({ text, color, bgColor, onClick}) => {
    return (
        <button
            style={{color: color, backgroundColor: bgColor}}
            onClick={onClick}
        >{text}</button>
    )
}

export default Button;