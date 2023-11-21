import './style/index.css';
import Product from './components/product/Product.jsx';
import Category from './components/category/Category.jsx';
import ButtonIcon from './components/buttonIcon/ButtonIcon.jsx';
import Search from './components/search/Search.jsx';
import Drawer from './components/drawer/Drawer.jsx';
import Cart from './components/cart/Cart.jsx'
import Provider from './components/provider/Provider.jsx' 
import {MyContext} from './components/provider/Provider.jsx' 
import {useState, useContext} from 'react'


function App() {
  const [searchWord , setSearchWord ] = useState('');

  const { openProduct, setOpenProduct, openCart, setOpenCart } = useContext(MyContext);
  console.log(`App.jsx - openCart >>> ${openCart}`);

  return (
    <>
      <div className='flex flex-row gap-4'>
        <ButtonIcon icon='🛒' onClick={() => setOpenCart(!openCart)}/>
        <Search setSearchWord={ setSearchWord }/>
      </div>

        <Drawer>
          hola soyv el product
        </Drawer>
        <Cart />

        <main className='py-8 px-6 flex flex-col sm:py-12 sm:px-32 sm:grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
          <Product />
          <Product />
          <Product />
          <Product />
          <div>
            <Category name='texto del category'/>
          </div>
        </main>
    </>

  );
}

export default App;
