import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import {Navbar, Container, Form, FormControl, Button, Row, Col, InputGroup} from 'react-bootstrap'

export default function Auth({handleChangeUserId, handleChangeUser, readFromStorage}) {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    let history = useHistory();

    function handleSubmit(e) {

        e.preventDefault();
        setIsLoading(true);
        async function login(){
        const res = await fetch("/login", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })
        if(res.ok){
            setIsLoading(false);
            const user_json_res = await res.json()
            localStorage.setItem('user_json', JSON.stringify(user_json_res))
            // onLogin(user)'
            // let userDataFromStorage = JSON.parse(localStorage.getItem('user_json'))
            // debugger
            // console.log(userDataFromStorage)
            const user_id = user_json_res.user.id
            console.log(user_id);
            readFromStorage()
            // handleChangeUserId(user_id)
            // handleChangeUser(user_json_res)
            history.push(`/user/${user_id}`)
        } else {
            const err = await res.json()
            setErrors(err.errors)
         }
        };
        login()
    };


    return (
        <div className="container">
           <h1>Login</h1>
            <Form className="mt-4 mx-2" onSubmit={handleSubmit}>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" 
                        name="email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" 
                    name="password"
                    value={password} 
                    onChange={e => setPassword(e.target.value)}/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                
                <Button variant="dark" type="submit">
                    Submit
                </Button>

            </Form>
            

       
                
            

            
        </div>
        
    )
}
