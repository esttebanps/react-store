import Button from '../button/Button.jsx';

function Product({ title,price,description,image }) {

    return(
        <>
            <section className="w-full rounded-2xl flex items-center gap-3 p-4 shadow-md sm:flex-col">
                <picture className="flex h-2/4 w-2/4 sm:w-full">
                    <img 
                        className="rounded-xl object-cover w-full h-full" 
                        src="https://images.pexels.com/photos/3989394/pexels-photo-3989394.jpeg"
                    />
                </picture>
                <div className="flex h-full flex-col justify-between gap-3 w-3/4 sm:w-full">
                    <div className="flex flex-col gap-3">
                        <h1 className="font-semibold">Titulo producto</h1>
                        <p className="text-sm text-[#696969]">Lorem ipsum dolor sit amet, consectetur vadipisicing elit. Omnis, illum!</p>
                    </div>
                    <div className="flex justify-between items-center text-[#E54660] font-semibold sm:flex-col sm:items-start sm:gap-3" >
                        <p>$ 1500</p>
                        <Button 
                            className="py-1 px-3 rounded-lg bg-[#E54660] text-white sm:w-full"
                            text='Buy'
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product;
