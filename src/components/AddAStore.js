import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';

export default function AddAStore() {
    const [address, setAddress] = useState('')
    const [image_url, setImage_url] = useState('')
    const [zipcode, setZipcode] = useState('')
    //think about user_id, options: localStorage, session, retrieve form back-end's session.
    let userData = JSON.parse(localStorage.getItem('user_json')).user
    let user_id = JSON.parse(localStorage.getItem('user_json')).id
    
    const [errors, setErrors] = useState(null)

    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault()
        const store = {
            address: address,
            image_url: image_url,
            zipcode: zipcode,
            user_id: user_id
        }
        // debugger
        const res = await fetch(`http://localhost:3000/stores`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({store})
        });
        const storeData = await res.json();
        if(res.ok){
            console.log(storeData);
            // debugger
            // add ID to either session or localStorage
            history.push('/dashboard')
        } else {
            setErrors(storeData.message)
        }

    };

    return (
        <form className="mt-5 mx-5" onSubmit={e => handleSubmit(e)}>
            <h1>Signup</h1>
        <div className="form-group mt-5">
          <label htmlFor="email">Email address</label>
          <input type="address" className="form-control" id="address" placeholder="2222 Golden Bridge" value={address} name="address" 
          onChange={e => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group mt-5">
          <label htmlFor="image_url">Picture</label>
          <input type="text" className="form-control" id="image_url" placeholder="url" value={image_url} name="image_url" 
          onChange={e => setImage_url(e.target.value)}
          />
        </div>
        <div className="form-group mt-5">
          <label htmlFor="zipcode">Zip Code</label>
          <input type="text" className="form-control" id="zipcode" placeholder="00000" value={zipcode} name="zipcode" 
          onChange={e => setZipcode(e.target.value)}
          />
        </div>
       
        <div className="btn btn-secondary mt-3" >
          <input type="submit" className="form-control" id="submit" name="submit"
          />
        </div>
        
      </form>
    )
}
