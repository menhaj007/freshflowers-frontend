import React, {useState, useEffect} from 'react'
import { useParams, useHistory } from 'react-router-dom'

export default function Dashboard(handleChangeUserId, handleChangeUser, userId) {
    // let {id} = useParams()
    // console.log(id)

    const [orders, setOrders] = useState([])
    const [stores, setStores] = useState([])
    // const [stores, setStores] = useState([])

    let user_id;
    if (JSON.parse(localStorage.getItem('user_json')).id) {
        user_id = JSON.parse(localStorage.getItem('user_json')).id
        // debugger 
        console.log(user_id)
    } else {
        console.log(JSON.parse(localStorage.getItem('user_json')))
        user_id = JSON.parse(localStorage.getItem('user_json')).user.id
        // debugger
    }



    useEffect(() => {
        async function fetchOrders() {
            const res = await fetch(`http://127.0.0.1:3000/users/${+user_id}/store`)
            // http://127.0.0.1:3000/users/25/store
         
            if (res.ok) {
                const storeData = await res.json()
                setStores(storeData.flowers)
                console.log("data in orders", storeData);
                // debugger
            }
        }
        fetchOrders()
    }, [user_id])
    console.log(orders)
    
    
    return (
        <div>
           {
               stores.map(flower => <li key={flower.id}>{flower.name}</li>)
            //    stores.map(flower => <li key={flower.id}>{flower.name}</li>)
           }
            
        </div>
    )
}


// // setter
// localStorage.setItem('myData', data);
 
// // getter
// localStorage.getItem('myData');
 
// // remove
// localStorage.removeItem('myData');
 
// // remove all
// localStorage.clear();