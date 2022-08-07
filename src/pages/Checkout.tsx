import { useState, useEffect, MouseEvent } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useShoppingCart } from '../context/ShoppingCartContext';
import products from '../data/products.json'


export function Checkout() {

    const { clearCart, getTotalCartAmount } = useShoppingCart()

    const { cartId } = useParams()

    const total = getTotalCartAmount(products);
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [loading, setLoading] = useState(false)

    const data:any = {
        email,
        phone,
        total
    }

    function handleCheckout(e: { preventDefault: () => void; }) {
        e.preventDefault()
        setLoading(true)
        axios.post(`http://localhost:4000/pay/${cartId}`, data)
        .then(response => {
            if(response.data.status === 'success') {
                window.location.assign(response.data.payment_url)
            }
        })
        .catch(error => {
            setLoading(false)
            console.error(error)
        })
    }
    // clear cart after checkout

    // give cart session id during id

    return (
        <div className='px-5 py-5'>
            <h1 className='my-5 text-2xl'>Checkout</h1>
            <form className='' onSubmit={handleCheckout}>
                <div className='flex flex-col'>
                    <label className='text-stone-500' htmlFor="email">Email</label>
                    <input className='border-b-2 border-stone-200 mb-4 p-3 focus:border-b-2 focus:outline-none focus:border-lime-200' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className='flex flex-col'>
                    <label className='text-stone-500' htmlFor="phone">Phone number</label>
                    <input className='border-b-2 border-stone-200 mb-4 p-3 focus:border-b-2 focus:outline-none focus:border-lime-200' type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>

                <button 
                    className='border-2 border-lime-400 bg-lime-400 p-2 text-white rounded-lg' 
                    type="submit" 
                    >{loading ? 'Loading...':'Proceed to Payment'}</button>
            </form>
        </div>
    )
}