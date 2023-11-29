import ButtonIcon from "../buttonIcon/ButtonIcon";
import SearcIcon from "../icons/IconSearch";
import { useState, useContext } from "react";
import { MyContext } from '../provider/Provider.jsx' 

function Search() {
  const [open, setOpen] = useState(false);
  const { setSearchWord } = useContext(MyContext);

  const icon = <SearcIcon />;

  return (
    <section>
      <div className="flex flex-row gap-2">
        <ButtonIcon icon={icon} onClick={() => setOpen(!open)} />
        {open && (
          <input
            className={`flex py-1 px-3 rounded-lg border border-[#E6E6E6]`}
            placeholder="texto prueba"
            onChange={(e) => setSearchWord(e.target.value)}
          />
        )}
      </div>
    </section>
  );
}

export default Search;