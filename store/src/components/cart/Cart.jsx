import Drawer from "../drawer/Drawer";
import Button from "../button/Button";
import ButtonIcon from "../buttonIcon/ButtonIcon";
import { useContext, useState } from "react";
import {MyContext} from '../provider/Provider.jsx'

function Cart() {
    const {openCart, setOpenCart} = useContext(MyContext)
    console.log(`Cart.jsx - openCart >>> ${openCart}`);
    return(
        <Drawer open={openCart} setOpen={() => setOpenCart(!openCart)}>hola soy el cart</Drawer>
    )
}

export default Cart;