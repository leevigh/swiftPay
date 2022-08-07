import { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useShoppingCart } from '../context/ShoppingCartContext';
import { Link } from 'react-router-dom';

export function Navbar() {

    const [menu, setMenu] = useState('hidden')

    const { cartQuantity } = useShoppingCart()

    function toggleMenu() {
        menu === 'hidden' ? setMenu('') : setMenu('hidden');
    }

    return (
        <>
            <nav className="flex justify-between px-5 sticky top-0 bg-stone-800 text-white py-5 md:px-24">
                <div>Veggies</div>

                <div className="cursor-pointer md:hidden" onClick={() => toggleMenu()}>
                    <div className="w-8 bg-white my-1 py-0.5"></div>
                    <div className="w-8 bg-white my-1 py-0.5"></div>
                    <div className="w-8 bg-white my-1 py-0.5"></div>
                </div>

                <div className="hidden md:block">
                    <ul className="flex list-none">
                        <li className="px-4"><Link to="/">Home</Link></li>
                        <li className="px-4"><Link to="/products">Products</Link></li>
                        <li className="px-4"><Link to="/wishlist">Wishlist</Link></li>
                        <li className="px-4 text-2xl">
                            <Link to="/cart" className='flex'>
                            <AiOutlineShoppingCart />
                            <span 
                                className='text-base text-black text-center bg-white w-5 h-5 rounded-full'>
                                    {cartQuantity}
                            </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className={`sticky top-16 ${menu} p-5 bg-white md:hidden`}>
                <div className='py-4 border-b-2 text-xl'><Link to="/">Home</Link></div>
                <div className='py-4 border-b-2 text-xl'><Link to="/products">Products</Link></div>
                <div className='py-4 border-b-2 text-xl'><Link to="/wishlist">Wishlist</Link></div>
                <div className='py-4 border-b-2 text-xl flex'>
                    <Link to="/cart" className='flex'>
                    <AiOutlineShoppingCart />
                    <span 
                        className='bg-stone-800 w-5 h-5 rounded-full text-white text-sm text-center'>
                            {cartQuantity}
                    </span>
                    </Link>
                </div>
            </div>
        </>
    )
}