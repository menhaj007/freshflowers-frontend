import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';

export default function RegisterUserForm() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState(null)

    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault()
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
            // console.log(userData)
            localStorage.setItem('user_json', JSON.stringify(userData));
            // setEmail(userData)
            // debugger
            // add ID to either session or localStorage
            history.push('/dashboard')
        } else {
            setErrors(userData.message)
        }

    };

    return (
        <form className="mt-5 mx-5" onSubmit={e => handleSubmit(e)}>
            <h1>Signup</h1>
        <div className="form-group mt-5">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="username@star.com" value={email} name="email" 
          onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder="*****" value={password} name="password"
          onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input type="submit" className="form-control" id="submit" name="submit"
          />
        </div>
        
      </form>
    )
}
