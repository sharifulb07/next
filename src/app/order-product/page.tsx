'use client'
import { useRouter } from "next/navigation"
export default function OrderProduct(){
    const router=useRouter();
    const handleOrder=()=>{
        console.log("Placing Your Order ")
        router.back();
    }
    return(
        <div>
            <h1>Order Product </h1>
            <button onClick={handleOrder}>Place Order</button>
        </div>
    )
}