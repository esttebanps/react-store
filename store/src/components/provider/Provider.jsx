import PropTypes from 'prop-types'
import { useState, useEffect, createContext } from 'react'
import { Login } from "../../services/api";


export const MyContext = createContext();

const Provider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [searchWord, setSearchWord ] = useState('');
  const [products, setProducts ] = useState([]);
  const [category, setCategory ] = useState('');
  const [categories, setCategories] = useState([]);
  const [cart, setCart ] = useState([]);
  const [accessToken, setAccessToken ] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const quantity = cart.length

  const handleLogin = async (email, password) => {
    try {
      const { accessToken, refreshToken } = await Login(email, password);
      setAccessToken(accessToken);
      console.log("provider", accessToken);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  // handleLogin('maria@mail.com', '12345')

  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  Provider.propTypes = {
    children: PropTypes.node.isRequired, // Asegura que 'children' es proporcionado y puede ser cualquier nodo React.
  };

  return (
    <MyContext.Provider
      value={{
        openModal,
        setOpenModal,
        openCart,
        setOpenCart,
        openForm,
        setOpenForm,
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
        getTotalPrice,
        quantity,
        accessToken,
        setAccessToken,
        handleLogin,
        setIsAuthenticated,
        isAuthenticated,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default Provider;
