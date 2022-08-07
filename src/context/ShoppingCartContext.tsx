import { createContext, 
        ReactNode, 
        useContext, 
        useState } from "react";
import { useLocalStorage } from '../hooks/useLocalStorage';

type ShoppingCartProviderProps = {
    children: ReactNode
}

type ShoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id:number) => number
    increaseCartQuantity: (id:number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id:number) => void
    clearCart: () => void
    getTotalCartAmount: (products:ProductsProps[]) => number
    cartQuantity: number
    cartItems: CartItem[]
}

type CartItem = {
    id: number,
    quantity: number
}

type ProductsProps = 
    {
        id: number
        name: string
        price: number
        imgUrl: string
        category: string
    }

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {

    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping cart", [])

    const [isOpen, setIsOpen] = useState(false)

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    const getTotalCartAmount = (products:ProductsProps[]) => cartItems.reduce((total, itemInCart) => {
        const item = products.find(i => i.id === itemInCart.id)
        return total + (item?.price || 0 * itemInCart.quantity)
    }, 0)

    function getItemQuantity(id:number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id:number) {
        setCartItems(currItems => {
            if(currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, quantity: 1}]
            } else {
                return currItems.map(item => {
                    //If the item exists, get the item & only increase quantity
                    if(item.id === id) {
                        return { ...item, quantity: item.quantity+1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id:number) {
        setCartItems(currItems => {
            if(currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    //If the item exists, get the item & only decrease quantity
                    if(item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id:number) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    function clearCart() {
        setCartItems(currItems => {
            return []
        })
    }

    return (
        <ShoppingCartContext.Provider value={{
            getItemQuantity,
            increaseCartQuantity,
            decreaseCartQuantity,
            removeFromCart,
            getTotalCartAmount,
            clearCart,
            openCart,
            closeCart,
            cartQuantity,
            cartItems
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}