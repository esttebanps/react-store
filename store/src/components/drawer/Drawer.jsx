import ButtonIcon from "../buttonIcon/ButtonIcon";

function Drawer({ setOpen, open, children }) {
    return(
    <div
        className={`py-7 px-8 fixed inset-y-0 right-0 w-full md:w-[40%] bg-white overflow-y-auto transition-transform transform ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ButtonIcon icon='😎' onClick={() => setOpen(!open)}/>
        {children}
    </div>
    )
}

export default Drawer;