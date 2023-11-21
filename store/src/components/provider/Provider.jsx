import {useState, createContext, useContext} from 'react'

export const MyContext = createContext();

const Provider = ({ children }) => {
  const [openProduct, setOpenProduct] = useState(true);
  const [openCart, setOpenCart] = useState(false);

  console.log(`Provider.jsx - openCart >>> ${openCart}`);



  return (
    <MyContext.Provider value={ {openCart,setOpenCart} }>
      {children}
    </MyContext.Provider>
  );
};

export default Provider;