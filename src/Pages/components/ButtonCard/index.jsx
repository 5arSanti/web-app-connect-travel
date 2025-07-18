import "./styles.css";

const ButtonCard = ({
    children,
    className = "",
    title = "",
    onClick = () => { },
    type = "button",
    padding = 20,
    borderWidth = 1,
    borderRadius = 0,
    style = {},
    disabled = false,
    width = "auto",
    backgroundColor = "transparent",
    color = "var(--text-color)",
}) => {
    return (
        <button
            className={`nav-buttons ${className}`}
            title={title}
            onClick={(event) => onClick(event)}
            type={type}
            style={{
                padding,
                borderWidth,
                borderRadius,
                width,
                backgroundColor,
                color,
                ...style
            }}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export { ButtonCard };