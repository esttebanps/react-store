import './style/index.css';
import Product from './components/product/Product.jsx';
import Category from './components/category/Category.jsx';
import ButtonIcon from './components/buttonIcon/ButtonIcon.jsx';
import Cart from './components/cart/Cart.jsx'
import CartIcon from './components/icons/IconCart.jsx';
import Search from './components/search/Search.jsx'
import { MyContext } from './components/provider/Provider.jsx' 
import { useContext, useEffect } from 'react'
import { GetApiProducts, GetApiCategories } from './services/api.js';

function App() {
  const { 
    openCart, 
    setOpenCart, 
    searchWord, 
    products, 
    setProducts, 
    category, 
    categories, 
    setCategories,
  } = useContext(MyContext);

  const icon = <CartIcon />

  useEffect(() => {
    async function fetchData() {
      try {
        const products = await GetApiProducts(searchWord, category);
        const categories = await GetApiCategories();
        setProducts(products);
        setCategories(categories);
      } catch (error) {
        console.error(error.message);
      }
    }
  
    fetchData(); 
  }, [ searchWord, category, setProducts, setCategories ]);

  return (
    <>
      <Cart />

      <main className='py-5 px-6 flex flex-col items-center md:px-28'>
        <div className='flex flex-row gap-4'>
          <ButtonIcon icon={ icon } onClick={ () => setOpenCart(!openCart) }/>
          <Search />
        </div>
        <h1 className="text-2xl my-6 self-start text-primeColor font-bold">
          Categories
        </h1>
        <section className='w-full flex flex-row flex-wrap gap-4'>
          <Category name='All'/>
          { categories && categories.map(c => <Category key={c.id} name={c.name} id={c.id}/>) }
        </section>
        <h1 className="text-2xl my-6 self-start text-primeColor font-bold">
          Products List
        </h1>
        {
          products.length > 0 ? (
            <section className="w-full flex flex-col sm:px-32 sm:grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {products.map((p) => (
                <Product
                  key={p.id}
                  textButton="Buy"
                  title={p.title}
                  price={p.price}
                  description={p.description}
                  image={p.images[0]}
                  id={p.id}
                />
              ))}
            </section>
          ) : (
            <div className="w-full flex justify-center">
              <p>No hay productos para mostrar</p>
            </div>
          )
        }
      </main>
    </>
  );
}

export default App;
