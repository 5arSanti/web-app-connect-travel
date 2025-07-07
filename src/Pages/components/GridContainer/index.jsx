import "./styles.css"

const GridContainer = ({
    children,
    padding = 0,
    className = "grid-1-1",
    gap = 20,
    width = "100%",
    justifyContent = "center",
    alignItems = "center"
}) => {
    return (
        <div className={`grid-container ${className}`} style={{
            gap: gap,
            padding: padding,
            width: width,
            justifyContent: justifyContent,
            alignItems: alignItems
        }}>
            {children}
        </div>
    )
}

export { GridContainer };