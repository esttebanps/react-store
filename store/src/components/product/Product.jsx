import PropTypes from "prop-types";
import Button from "../button/Button.jsx";
import TrashIcon from "../icons/IconTrash.jsx";
import { useContext } from "react";
import { MyContext } from "../provider/Provider.jsx";

function Product({ title, price, description, image, id, quantity }) {
  const { cart, setCart } = useContext(MyContext);

  const handleError = (event) => {
    // Manejar la carga fallida de la imagen
    event.target.src =
      "https://images.pexels.com/photos/2074122/pexels-photo-2074122.jpeg?auto=compress&cs=tinysrgb&w=600"; // Reemplaza 'URL_DE_LA_IMAGEN_POR_DEFECTO' con la URL de tu imagen por defecto
  };

  const handleAddToCart = () => {
    // Verificar si el producto ya está en el carrito
    const productExists = cart.find((product) => product.id === id);

    if (productExists) {
      // Si el producto ya está en el carrito, incrementar la cantidad
      setCart((prevCart) =>
        prevCart.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    } else {
      // Si el producto no está en el carrito, agregarlo con cantidad 1
      setCart((prevCart) => [
        ...prevCart,
        { id, title, price, image, description, quantity: 1 },
      ]);
    }
  };

  const handleDelete = () => {
    setCart((prevCart) =>
      prevCart
        .map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0)
    );
  };

  Product.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    textButton: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  };

  return (
    <>
      <section className="w-full group">
        <div className="max-w-80 max-h-80 relative overflow-y-hidden ">
          <div>
            <img className="w-full h-fit" src={image} onError={handleError} />
          </div>
          <div className="w-full h-32 p-4 border-x-[1px] border-[#e5466138] absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700">
            <p className="text-[#767676] text-[14px]">{description}</p>
          </div>
        </div>
        <div className="max-w-80 py-6 flex flex-col gap-4 border-[#e5466138] border-[1px] border-t-0 px-4">
          <div className="flex items-center justify-between font-titleFont">
            <h2 className="text-lg text-primeColor font-bold">{title}</h2>
            <p className="text-[#767676] text-[14px]">${price}</p>
          </div>

          {quantity > 0 ? (
            <>
              <div className="flex gap-2">
                <p className="font-bold">Cantidad:</p>
                <p className="text-[#767676]">{quantity}</p>
              </div>
              <Button text={<TrashIcon />} onClick={handleDelete} />
            </>
          ) : (
            <Button text="Add To cart" onClick={handleAddToCart} />
          )}
        </div>
      </section>
    </>
  );
}

export default Product;
