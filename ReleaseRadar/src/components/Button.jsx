function Button({ children, onClick }) {
    return (
        <button className="custom-btn" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button