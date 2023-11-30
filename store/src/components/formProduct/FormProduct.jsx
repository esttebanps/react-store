import { useContext } from "react";
import { MyContext } from "../provider/Provider";
import Drawer from "../drawer/Drawer";
import LoginForm from "../loginForm/LoginForm";
import Button from "../button/Button";

function FormProduct() {
  const {
    openForm,
    setOpenForm,
    accessToken,
    setAccessToken,
    setIsAuthenticated,
  } = useContext(MyContext);

  const handleCerrarSesion = () => {
    setAccessToken(null);
    setIsAuthenticated(false);
  };

  return (
    <>
      <Drawer open={openForm} setOpen={() => setOpenForm(!openForm)}>
        <p>Soy el formulario para agregar productos</p>
        <p>En construccion</p>
        {accessToken ? (
          <>
            <p>estas con login!</p>
            <form method="post">
              <label>
                  <input type="text"  placeholder="title"/>
              </label>
              <label>
                  <input type="number"  placeholder="price"/>
              </label>
              <label>
                  <input type="text"  placeholder="description"/>
              </label>
            </form>
            <Button text="Cerrar sesion" onClick={handleCerrarSesion} />
          </>
        ) : (
          <LoginForm />
        )}
      </Drawer>
    </>
  );
}

export default FormProduct;
