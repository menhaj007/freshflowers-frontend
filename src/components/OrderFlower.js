import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

export default function OrderFlower() {
    let store_id = JSON.parse(localStorage.getItem('user_json')).user.store.id
    let {id} = useParams()
    const [flowerId, setFlowerID] = useState(null)

    async function submitOrder() {
        
    }



    return (
        <div>
            
        </div>
    )
}
