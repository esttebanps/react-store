import ButtonIcon from "../buttonIcon/ButtonIcon";
import { useState } from "react";
import SearcIcon from "../icons/IconSearch";




function Search({ setSearchWord }){
    const [open, setOpen] = useState(false);

    const icon = <SearcIcon />

    return(
        <section>
            <div className="flex flex-row gap-2">
                <ButtonIcon icon={icon}  onClick={() => setOpen(!open)}/>
                {open &&    
                    <input 
                        className={`flex py-1 px-3 rounded-lg border border-[#E6E6E6]`}
                        placeholder="texto prueba" 
                        onChange={(e) => setSearchWord(e.target.value)}
                    />
                }
            </div>
        </section>
    )
}

export default Search;