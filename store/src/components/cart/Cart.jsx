import Drawer from "../drawer/Drawer";
import Product from "../product/Product.jsx";
import Button from "../button/Button.jsx";
import { useContext } from "react";
import { MyContext } from '../provider/Provider.jsx'
import TrashIcon from "../icons/IconTrash.jsx";
function Cart() {

    const {openCart, setOpenCart} = useContext(MyContext)

    const icon = <TrashIcon />

    return(
        <Drawer open={openCart} setOpen={() => setOpenCart(!openCart)}>
            <h1 className="text-2xl my-6 self-start text-primeColor font-bold">
                Products List
            </h1>
            <section className="grid grid-cols-1 gap-4 my-6">
                <Product textButton={ icon } />
                <Product textButton={ icon } />
                <Product textButton={ icon } />
                <Product textButton={ icon } />
            </section>
            <div className="flex flex-col gap-3 py-16">
                <div className="flex justify-between">
                    <p className="text-slate-500">Subtotal</p>
                    <p>$ 19000</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-slate-500">IVA(%)</p>
                    <p>$ 1000</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-slate-500">Shopping free</p>
                    <p>$ 00.0</p>
                </div>
            </div>
            <div className="flex justify-between">
                <p className="text-lg font-medium">$ 20000</p>
                <div className="w-20">
                    <Button text='Buy' />
                </div>
            </div>
        </Drawer>
    )
}

export default Cart;