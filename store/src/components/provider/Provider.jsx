import PropTypes from 'prop-types'
import {useState, createContext} from 'react'

export const MyContext = createContext();

const Provider = ({ children }) => {
  const [openCart, setOpenCart] = useState(false);
  const [searchWord, setSearchWord ] = useState('');
  const [products, setProducts ] = useState([]);
  const [category, setCategory ] = useState('');
  const [categories, setCategories ] = useState([]);
  const [cart, setCart ] = useState([]);


  console.log(`Provider.jsx - openCart >>> ${openCart}`);

  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  Provider.propTypes = {
    children: PropTypes.node.isRequired, // Asegura que 'children' es proporcionado y puede ser cualquier nodo React.
  };

  return (
    <MyContext.Provider value={{
      openCart, 
      setOpenCart, 
      searchWord, 
      setSearchWord, 
      products, 
      setProducts, 
      category, 
      setCategory, 
      categories, 
      setCategories,
      cart,
      setCart,
      getTotalPrice
      }}>
      {children}
    </MyContext.Provider>
  );
};

export default Provider;
