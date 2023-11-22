import Button from '../button/Button.jsx';

function Product({ title,price,description,image, textButton }) {

    return(
        <>
            <section className="w-full group">
                <div className="max-w-80 max-h-80 relative overflow-y-hidden ">
                    <div>
                        <img className="w-full h-full" src="https://images.pexels.com/photos/3989394/pexels-photo-3989394.jpeg" />
                    </div>
                    <div className="w-full h-32 p-4 border-x-[1px] border-[#e5466138] absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700">
                        <p className="text-[#767676] text-[14px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ut dicta. Fuga explicabo blanditiis non fugiat minima vel, fugit in.
                        </p>
                    </div>
                </div>
                <div className="max-w-80 py-6 flex flex-col gap-4 border-[#e5466138] border-[1px] border-t-0 px-4">
                    <div className="flex items-center justify-between font-titleFont">
                        <h2 className="text-lg text-primeColor font-bold">
                        name
                        </h2>
                        <p className="text-[#767676] text-[14px]">$156156</p>
                    </div>
                    <Button text={textButton} />
                </div>
            </section>
        </>
    )
}

export default Product;
