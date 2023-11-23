import PropTypes from 'prop-types';

function Button({ text, onClick }) {
    
    Button.propTypes = {
        text: PropTypes.node.isRequired, // Validación para asegurar que 'text' es proporcionado y es de tipo nodo (Node).
        onClick: PropTypes.func, // Opcional: Validación para 'onClick' como una función (puedes ajustar según tus necesidades).
    };

    return(
        <button 
            className="py-1 px-3 flex flex-row justify-center items-center rounded-lg bg-[#E54660] text-white sm:w-full hover:bg-[#ff4867]"
            onClick={ onClick }
        >
            { text }
        </button>
    )
}

export default Button; 