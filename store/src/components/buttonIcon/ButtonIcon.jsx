import PropTypes from 'prop-types';

function ButtonIcon({ icon, onClick }) {

    ButtonIcon.propTypes = {
        icon: PropTypes.node.isRequired, // Validación para asegurar que 'icon' es proporcionado y es de tipo nodo (Node).
        onClick: PropTypes.func, // Opcional: Validación para 'onClick' como una función (puedes ajustar según tus necesidades).
    };
    
    return(
        <button 
            className="flex justify-center items-center w-10 h-10 rounded-lg border border-[#E6E6E6] transition-all hover:border-[#ff48665e]"
            onClick={ onClick }
        >
            { icon }
        </button>
    )
}

export default ButtonIcon;
