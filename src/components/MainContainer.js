import React, {useState, useEffect} from 'react'
import {Container, Row, Col, Badge} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Footer from './Footer'
import Flower from './Flower'

const API = "http://localhost:3000"


export default function MainContainer() {
    const [flowers, setFlowers] = useState([])


    useEffect(() => {
        function fetchFlower(){
            fetch(`${API}/flowers`)
            .then(r => r.json())
            .then(data => setFlowers(data))
        }
        fetchFlower()
      }, [])

    return (
        <Container fluid className="container mt-4">
            <Row>
                {flowers.map(flower => 
                <Col key={flower.id}>
                    <div className="card" style={{width: "15rem"}}>
                            <img className="card-img-top" src={flower.image_url} alt="Card image cap" style={{width: "200px", height: "300px", margin: "15px"}} />
                        
                        <div className="card-body">
                            <h5 className="card-title">{flower.name}</h5>
                            <p className="card-text">{flower.occasion}</p>
                            <Link to={`/flowers/${flower.id}`} className="btn btn-primary">Flower Detail</Link>
                        </div>
                    </div>
                </Col>
                    )}
           
            
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>

    )
}
