function ButtonIcon({ icon, onClick }) {
    
    return(
        <button 
            className="flex justify-center items-center w-10 h-10 rounded-lg border border-[#E6E6E6] transition-all"
            onClick={onClick}
        >
            { icon }
        </button>
    )
}

export default ButtonIcon;
