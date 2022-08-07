import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utils/formatCurrency";

type ProductItemProps = {
    id: number,
    name: string,
    price: number,
    category: string,
    imgUrl: string
}

export function ProductItem({ 
                id, 
                name, 
                price, 
                category, 
                imgUrl }: ProductItemProps) 
{
    const { 
        getItemQuantity, 
        increaseCartQuantity, 
        decreaseCartQuantity,
        removeFromCart} = useShoppingCart()

        const quantity = getItemQuantity(id)

    return (
        <div className="h-100 w-80 border-2 border-stone-200 my-4">
            <div className="border-b-2 border-stone-200 h-48">
                <img src={imgUrl} alt="" style={{objectFit: 'cover', height:'100%', width: '100%'}} />
            </div>
            <div className="p-4">
                <div className="flex justify-between mb-4">
                    <span>{name}</span>
                    <span>{formatCurrency(price)}</span>
                </div>
                <div>
                    {quantity === 0 ? (
                        <button 
                            onClick={() => increaseCartQuantity(id)}
                            className="border-2 border-lime-400 rounded-full p-4">
                                + Add To Cart
                        </button>
                    ) : (
                        <div className="flex w-32 justify-evenly items-center py-4">
                            <div>
                                <button onClick={() => decreaseCartQuantity(id)} className="bg-lime-400 p-2 text-white rounded-lg">-</button>
                            </div>
                            <div>
                                <span>{quantity}</span>
                            </div>
                            <div>
                                <button onClick={() => increaseCartQuantity(id)} className="bg-lime-400 p-2 text-white rounded-lg">+</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}