import { Link } from 'react-router-dom';
import '../App.css';
import { ProductItem } from '../components/ProductItem';
import products from '../data/products.json'

export function Home() {
    return (
        <div>
            <header className="h-screen px-5 flex flex-col justify-center items-center hero">
                <h1 className="text-3xl text-center mb-5 md:text-3xl lg:text-6xl font-bold text-white">100% Fresh and Organic Fruits and Veggies!</h1>
                <button className="border-lime-400 p-4 text-white bg-lime-400 rounded-full lg:p-5 text-2xl">
                    <Link to="/products">Shop now</Link>
                </button>
            </header>

            <section className='px-5 border-2 border-gray-200'>
                <h2 className='text-center text-3xl py-4'>Featured Products</h2>

                <div className='md:grid grid-cols-3'>
                    {products.slice(4,10).map(product => (
                        <div key={product.id} className='flex flex-col items-center'>
                            <ProductItem {...product} />
                        </div>
                    ))}

                </div>
                    <div className='flex justify-center my-4'>
                        <button className="border-lime-400 p-4 text-white bg-lime-400 text-base rounded-full lg:p-5 text-2xl">
                            <Link to="/products">Browse Products</Link>
                        </button>
                    </div>
                {/* <div className='flex flex-col items-center px-5'>
                    <div className='border-2 border-gray-600 w-80 my-4'>
                        <div>
                            <img src="/images/product-1.jpg" alt="Bell Peppers" />
                        </div>


                        Vegetables
                    </div>

                    <div className='border-2 border-gray-600 w-80 my-4'>
                        <div>
                            <img src="/images/product-10.jpg" alt="Bell Peppers" />
                        </div>
                        Fruits
                    </div>

                    <div className='border-2 border-gray-600 w-80 my-4'>
                        <div>
                            <img src="/images/product-14.jpg" alt="Bell Peppers" />
                        </div>
                        Juice
                    </div>

                    
                </div> */}
            </section>
        </div>
    )
}