import PropTypes from 'prop-types'; 
import { MyContext } from "../provider/Provider";
import { useContext } from "react";

function Category({ name, id }) {

    const { setCategory } = useContext(MyContext);

    Category.propTypes = {
        name: PropTypes.string.isRequired, // Asegura que 'name' es proporcionado y es de tipo cadena.
        id: PropTypes.number.isRequired,   // Asegura que 'id' es proporcionado y es de tipo número.
    };

    return (
        <span 
            className="py-2 px-3 rounded-xl bg-white border-[1px] font-medium cursor-pointer hover:bg-[#ff4866d7] hover:text-white"
            onClick={ () => setCategory(id) } 
        >
            { name }
        </span>
    )
}

export default Category;