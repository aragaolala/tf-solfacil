import "../components/button.css"

function Button ({
    type,
    onClick,
    text,
    className = "button-input",
}) {
    return (
        <button
            className={className}
            type={type}
            onClick={onClick}>
            {text}
        </button>
    )
};

export default Button







