import './style/index.css';
import Product from './components/product/Product.jsx';
import Category from './components/category/Category.jsx';
import ButtonIcon from './components/buttonIcon/ButtonIcon.jsx';
import Search from './components/search/Search.jsx';
import Drawer from './components/drawer/Drawer.jsx';
import Cart from './components/cart/Cart.jsx'
import CartIcon from './components/icons/IconCart.jsx';
import {MyContext} from './components/provider/Provider.jsx' 
import {useState, useContext} from 'react'


function App() {
  const [searchWord , setSearchWord ] = useState('');
  const { openProduct, setOpenProduct, openCart, setOpenCart } = useContext(MyContext);
  console.log(`App.jsx - openCart >>> ${openCart}`);

  const icon = <CartIcon />

  return (
    <>
    {/* boton de carrito de compras y input para filtrar productos */}

    {/* drawer del carrito de compras */}
      <Cart />
      
    {/* drawer del detalle del producto */}
      <Drawer>
        hola soy el product
      </Drawer>

      <main className='py-5 px-6 flex flex-col items-center md:px-28'>
        <div className='flex flex-row gap-4'>
          <ButtonIcon icon={icon} onClick={() => setOpenCart(!openCart)}/>
          <Search setSearchWord={ setSearchWord }/>
        </div>
        <h1 className="text-2xl my-6 self-start text-primeColor font-bold">
          Categories
        </h1>
        <section className='w-full flex flex-row flex-wrap gap-4'>
          <Category name='nombre'/>
          <Category name='nombre caatego'/>
          <Category name='nombre'/>
          <Category name='nombre otra'/>
          <Category name='nombre'/>
        </section>
        <h1 className="text-2xl my-6 self-start text-primeColor font-bold">
          Products List
        </h1>
        <section className='w-full flex flex-col sm:px-32 sm:grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3'>
          <Product textButton='Buy' />
          <Product textButton='Buy' />
          <Product textButton='Buy' />
          <Product textButton='Buy' />
          <Product textButton='Buy' />
          <Product textButton='Buy' />
        </section>
      </main>
    </>

  );
}

export default App;
