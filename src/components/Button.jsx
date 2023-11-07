const Button = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className="btn btn-success btn-lg">{children}</button>
    )
}

export default Button