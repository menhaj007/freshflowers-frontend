import React, {useState, useEffect} from 'react'
import {useParams, Link, useHistory, Redirect} from 'react-router-dom'
import {Container, Row, Col, Image, Button} from 'react-bootstrap'
const API = "http://localhost:3000/flowers"
export default function Flower() {
    let history = useHistory()
    const {id} = useParams()
    const [flower, setFlower] = useState([])
    const [errors, setErrors] = useState([])
    const [storeId, setStoreId] = useState("")

    useEffect(() => {
        function fetchFlower(){
            fetch(`/flower/${id}`)
            .then(r => r.json())
            .then(data => {
                setFlower(data)
            })
        }
        fetchFlower()
    }, [id])
    
 

    
    let user_id;
    if (JSON.parse(localStorage.getItem('user_json')).id) {
        user_id = JSON.parse(localStorage.getItem('user_json')).id
        // debugger 
        console.log(user_id)
    } else {
        console.log(JSON.parse(localStorage.getItem('user_json')))
        user_id = JSON.parse(localStorage.getItem('user_json')).user.id
    }

    
    useEffect(() => {
        async function getStore(){
            const res = await fetch(`http://127.0.0.1:3000/users/${user_id}/store`)
            if (res.ok) {
                const store = await res.json();
                console.log(store)
                setStoreId(store.id)
            }
        }
        getStore()
    }, user_id)


    async function addToCart() {
        if (!storeId) return;
        const order = {
            store_id: storeId,
            flower_id: +id
        }

        const res = await fetch("http://localhost:3000/order", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({order})
        })
        const orderData = await res.json();
        if(res.ok){
            // debugger
            console.log(orderData);
            // add ID to either session or localStorage
            history.push('/dashboard')
        } else {
            setErrors(order.message)
        }
    }
    function redirectTo() {
        return  alert("Please login first")
    }

    return (
        <div>
            <figure className="figure">
            <Row className="ml-5 ml-lg-5">
                <Col className="ml-5 ml-lg-5 mt-5">
                    <h3>{flower.name}</h3>
                    <h4>{flower.occasion}</h4>
                    <h4>{flower.price}</h4>
                <Button className="ml-2 ml-lg-0 mt-1" variant="success" onClick={storeId? addToCart: redirectTo}>Add to cart </Button>
                    {/* <Link to={`/order/${flower.id}`} className="btn btn-success ml-2 ml-lg-0 mt-1" variant="success">Add to cart</Link> */}
                </Col >

                <Col className="ml-5 ml-lg-5 mt-3">
                    <img src={flower.image_url} className="img-fluid" style={{width: "600px", height: "600px"}} alt="flowers"/>
                </Col>
                
            </Row>
            
    
            {/* <figcaption className="figure-caption">Order now</figcaption> */}
            </figure>
            
        </div>

        

    )
}
