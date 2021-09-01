import PropTypes from "prop-types";

const Button = ({text, color, onClick}) => {
    return (
        <button 
            className="btn" 
            onClick={onClick}
            style={{backgroundColor: color}}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: "#45F"
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
