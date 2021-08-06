import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';

export default function RegisterUserForm({handleChangeUserId, handleChangeUser, setNewUserIdFromStorage}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState(null)

    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault()
        console.log("local Storage cleared", localStorage)
        const user = {
            email: email,
            password: password
        }
        // debugger
        const res = await fetch(`http://localhost:3000/users`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user})
        });
        const userData = await res.json();
        if(res.ok){
            localStorage.clear()
            // debugger
            // console.log(userData)
            localStorage.setItem('user_json', JSON.stringify(userData));
            // setEmail(userData)
            // debugger
            // add ID to either session or localStorage
            let user = JSON.parse(localStorage.getItem('user_json'))
            // debugger    
            setNewUserIdFromStorage(user)
            

            history.push('/addStore')
        } else {
            setErrors(userData.message)
        }

    };

    return (
        <div className="container" >
            <div className="d-bg-flex justify-content-between align-item-center">
                <form className="mt-5 mx-5" onSubmit={e => handleSubmit(e)}>
                    <h1>Signup</h1>
                        <div className="form-group mt-5">
                            <label htmlFor="email"><span className="h4"></span></label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} name="email" 
                            onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password"></label>
                            <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} name="password"
                            onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                            <div className="form-group">
                            <input type="submit" className="btn btn-dark btn-md mt-3" id="submit" name="submit"
                            />
                        </div>
                
                </form>
            </div>
        </div>
    )
}
