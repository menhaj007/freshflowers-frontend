import React from 'react'
import { useParams } from 'react-router-dom'

export default function Dashboard() {
    // const {id} = useParams()
    let userData = JSON.parse(localStorage.getItem('user_json'))
    // let userDataFromStorage = JSON.parse(localStorage.getItem('user_json'))
    // console.log(userData.user.store);
    // {debugger}
    
    return (
        <div>
            <h1>Welcome to your page.</h1>
            <h2>{userData.user.email}</h2>
            {/* {<img src={userData.user.store.image_url} /> */}
            <p>{userData.user.store.zipcode}</p>
            <p>{userData.user.store.user_id}</p>
            <p>{userData.user.store.address}</p>
            <p>{userData.user.store.total}</p>
            
       
            
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