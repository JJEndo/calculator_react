
import '../styles/Button.css'
function Button(props) {

    const isOperator = (value) => {
        return isNaN(value) && (value != '.') && (value != '=');
    }


  return (
    <div 
    className={`button-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()} 
    onClick={() => props.onClick(props.children)}
    >
        {props.children}
    </div>
  )
};

//Button.propTypes = {}

export default Button
