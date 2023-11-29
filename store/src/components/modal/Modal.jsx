import { createPortal } from "react-dom";
import { useContext } from "react";
import { MyContext } from "../provider/Provider";
import Button from "../button/Button";

const Modal = () => {
  const { openModal, setOpenModal, cart, getTotalPrice } =
    useContext(MyContext);

  return createPortal(
    <div className="flex justify-center items-center z-20 w-full fixed top-0 bottom-0 bg-black bg-opacity-70 left-0 right-0">
      <div className="flex flex-col gap-4 bg-white p-8 rounded-md shadow-md md:w-1/4">
        <h2 className="text-2xl font-bold mb-4 text-[#E54660]">
          Recibo de Compra
        </h2>
        <div className="flex justify-between">
          <p className="font-medium">Fecha:</p>
          <p className="text-slate-500">10/20/2023</p>
        </div>
        <div>
          <h2 className="text-lg font-bold py-3">Productos adquiridos:</h2>
          <div className="flex p-2 font-medium bg-[#E54660] text-white rounded-md">
            <p className="w-2/5">Nombre</p>
            <p className="w-1/5 text-center">Cantidad</p>
            <p className="w-2/5 text-right">Total</p>
          </div>
          {cart.map((product) => {
            return (
              <div key={product.id} className="flex p-2">
                <p className="w-2/5">{product.title}</p>
                <p className="w-1/5 text-center">{product.quantity}</p>
                <p className="w-2/5 text-right">
                  $ {product.price * product.quantity}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-3 py-3">
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
        <div className="flex justify-center">
          <p>¡Gracias por tu compra!</p>
        </div>
        <div className="flex justify-between">
          <p className="text-lg font-medium">$ {getTotalPrice()}</p>
          <div className="w-20">
            <Button text="Cerrar" onClick={() => setOpenModal(!openModal)} />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;