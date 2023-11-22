function Button({ text, onClick }) {
    
    return(
        <button 
            className="py-1 px-3 flex flex-row justify-center items-center rounded-lg bg-[#E54660] text-white sm:w-full hover:bg-[#ff4867]"
        >
            {text}
        </button>
    )
}

export default Button; 