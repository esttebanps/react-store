import Drawer from "../drawer/Drawer";
import Product from "../product/Product.jsx";
import Button from "../button/Button.jsx";
import { useContext } from "react";
import { MyContext } from '../provider/Provider.jsx'

function Cart() {

    const { openCart, setOpenCart, cart, getTotalPrice, setOpenModal, openModal } = useContext(MyContext)

    return (
      <Drawer open={openCart} setOpen={() => setOpenCart(!openCart)}>
        <h1 className="text-2xl my-6 self-start text-primeColor font-bold">
          Products List
        </h1>
        <section className="grid grid-cols-1 gap-4 my-6">
          {cart.length > 0 ? (
            cart.map((p) => {
              return (
                <Product
                  key={p.id}
                  title={p.title}
                  price={p.price}
                  description={p.description}
                  image={p.image}
                  id={p.id}
                  quantity={p.quantity}
                />
              );
            })
          ) : (
            <div className="w-full flex justify-center">
              <p>No hay productos para mostrar</p>
            </div>
          )}
        </section>
        <div className="flex flex-col gap-3 py-16">
          <div className="flex justify-between">
            <p className="text-slate-500">Subtotal</p>
            <p>$ {getTotalPrice()}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-slate-500">IVA(%)</p>
            <p>$ 00.0</p>
          </div>
          <div className="flex justify-between">
            <p className="text-slate-500">Shopping free</p>
            <p className="text-green-500">$ 00.0</p>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-lg font-medium">$ {getTotalPrice()}</p>
          <div className="w-20">
            <Button text="Buy" onClick={() => setOpenModal(!openModal)} />
          </div>
        </div>
      </Drawer>
    );
}

export default Cart;