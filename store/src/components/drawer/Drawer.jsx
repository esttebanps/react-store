import ButtonIcon from "../buttonIcon/ButtonIcon";
import ArrowIcon from "../icons/IconArrow";

function Drawer({ setOpen, open, children }) {

  const icon = <ArrowIcon />

  return(
    <div
        className={`py-5 px-6 z-10 fixed inset-y-0 right-0 w-full border-[#e5466138] border-l-[1px] bg-white overflow-y-auto transition-transform transform duration-700 md:w-[30%] ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ButtonIcon icon={icon} onClick={() => setOpen(!open)}/>
        {children}
    </div>
  )
}

export default Drawer;