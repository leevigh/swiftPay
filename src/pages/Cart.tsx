import { Link } from "react-router-dom"
import { CartItem } from "../components/CartItem"
import { useShoppingCart } from "../context/ShoppingCartContext"
import products from '../data/products.json'
import { formatCurrency } from "../utils/formatCurrency"

export function Cart() {

    const { cartItems } = useShoppingCart()

    return (
        <section className="p-5 h-auto md:px-40">
            <h1>cart</h1>

            <div>
                {cartItems.length === 0 && 
                    <div className="text-center">
                        <h4>No Items in your cart yet</h4>
                        <button>browse products</button>
                    </div> 
                }

                {cartItems.map(item => (
                    <CartItem key={item.id} {...item} />
                ))}
            </div>

            <div className="flex justify-between items-center">
                <div className={`mt-4 text-xl ${!cartItems.length && 'hidden'}`}>
                    Total {formatCurrency(cartItems.reduce((total, itemInCart) => {
                        const item = products.find(i => i.id === itemInCart.id)
                        return total + (item?.price || 0 * itemInCart.quantity)
                    }, 0))}
                </div>

                <div className={`mt-4 text-xl ${!cartItems.length && 'hidden'}`}>
                    <button><Link to={`/checkout/${'cart-'+Math.random().toString(36).slice(2)}`}>Checkout</Link></button>
                </div>
            </div>
        </section>
    )
}