import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Verify() {

    const { clearCart } = useShoppingCart()
    const { cartId } = useParams()
    const [searchParams] = useSearchParams()
    const [verified, setVerified] = useState(false)

    // useEffect(() => {
    //     axios.get(`http://localhost:4000/verify/${cartId}`, {
    //         params: {
    //             status: searchParams.get('status'),
    //             tx_ref: searchParams.get('tx_ref'),
    //             transaction_id: searchParams.get('transaction_id')
    //         }
    //     }).then(response => {
    //         if(response.data.verified) {
    //             console.log("verified");
    //             setVerified(true)
    //             clearCart()

    //             setTimeout(() => {
    //                 setVerified(false)
    //             }, 4000)
    //         }
    //     }).catch(error => {
    //         console.log(error);
    //         return error;
    //     })
    // }, [])

    return (
        <div>
            <div>Payment Verified</div>
            <div>Unfortunately it's not a real app so I won't be delivering any of the goodies to you 🥴</div>

            <div>Let me build something with/for you</div>
            <div>Follow me on Twitter, Instagram, Github and/or let's connect on LinkedIn. Thanks</div>

            <div>
                <Link to="/">Go home</Link>
            </div>
        </div>
    )
}