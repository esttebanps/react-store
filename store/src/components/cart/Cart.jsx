import Drawer from "../drawer/Drawer";
import Product from "../product/Product.jsx";
import Button from "../button/Button.jsx";
import TrashIcon from "../icons/IconTrash.jsx";
import { useContext } from "react";
import { MyContext } from '../provider/Provider.jsx'

function Cart() {

    const { openCart, setOpenCart, cart, getTotalPrice } = useContext(MyContext)

    const icon = <TrashIcon />

    return(
        <Drawer open={ openCart } setOpen={ () => setOpenCart(!openCart) }>
            <h1 className="text-2xl my-6 self-start text-primeColor font-bold">
                Products List
            </h1>
            <section className="grid grid-cols-1 gap-4 my-6">
                {
                    cart && cart.map(p => {
                        return(<Product 
                            key={ p.id } 
                            textButton={ icon }
                            title={ p.title }
                            price={ p.price }
                            description={ p.description }
                            image={ p.image }
                            id={ p.id }
                            quantity={ p.quantity }
                          />
                        )
                    })
                }
            </section>
            <div className="flex flex-col gap-3 py-16">
                <div className="flex justify-between">
                    <p className="text-slate-500">Subtotal</p>
                    <p>$ { getTotalPrice() }</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-slate-500">IVA(%)</p>
                    <p>$ 50</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-slate-500">Shopping free</p>
                    <p className="text-green-500">$ 00.0</p>
                </div>
            </div>
            <div className="flex justify-between">
                <p className="text-lg font-medium">$ { getTotalPrice() + 50 }</p>
                <div className="w-20">
                    <Button text='Buy' />
                </div>
            </div>
        </Drawer>
    )
}

export default Cart;