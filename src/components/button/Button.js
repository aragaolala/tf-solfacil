import "./button.css"

function Button ({
    type,
    onClick,
    text,
    value,
    className = "button-input",
}) {
    return (
        <button
            className={className}
            type={type}
            onClick={onClick}
            value={value}>
            {text}
        </button>
    )
};

export default Button







