import { useShoppingCart } from "../context/ShoppingCartContext";
import products from '../data/products.json'
import { formatCurrency } from "../utils/formatCurrency";

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({ id, quantity }:CartItemProps) {
    const { removeFromCart } = useShoppingCart()

    const product = products.find(item => item.id === id)

    if(product == null) return null

    return (
        <section className="flex justify-between items-center border-b-2 border-stone-200 py-3 mb-4">
            <div>
                <img 
                    src={product?.imgUrl} 
                    alt={`${product?.name}`}
                    style={{ 
                        width: '125px', 
                        height: '75px', 
                        objectFit:'cover'}} />
            </div>

            <div>
                <div>{product?.name}</div>
                {quantity > 1 && <span>x{quantity}</span>}
                <div>
                    {formatCurrency(product?.price)}
                </div>
            </div>

            <div>
                <button className="bg-red-400 text-white p-2 rounded-sm" onClick={() => removeFromCart(id)}>&times;</button>
            </div>
        </section>
    )
}