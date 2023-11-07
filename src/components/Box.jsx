const Box = ({ children }) => {
    return (
        <div className="container d-flex justify-content-center my-5">
            <div className="custom-box">{children}</div>
        </div>
    )
}

export default Box