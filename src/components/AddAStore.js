import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';

export default function AddAStore(handleChangeUserId, handleChangeUser, readId) {
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
            console.log(storeData, "from res.ok");
            // let user_json = JSON.stringify(storeData);
            // debugger
            
            let id = storeData.user_id //id = user_id
            history.push(`/`)
        } else {
            setErrors(storeData.message)
        }

    };

    return (
        <div className="container">
          <form className="mt-5 mx-5" onSubmit={e => handleSubmit(e)}>
              <h1> <span className="text-success">Please add a store to your profile</span></h1>
          <div className="form-group mt-1">
            <label htmlFor="address"></label>
            <input type="address" className="form-control" id="address" placeholder="Enter an address" value={address} name="address" 
            onChange={e => setAddress(e.target.value)}
            />
          </div>
          <div className="form-group mt-1">
            <label htmlFor="image_url"></label>
            <input type="text" className="form-control" id="image_url" placeholder="Enter an image link/url" value={image_url} name="image_url" 
            onChange={e => setImage_url(e.target.value)}
            />
          </div>
          <div className="form-group mt-1">
            <label htmlFor="zipcode"></label>
            <input type="text" className="form-control" id="zipcode" placeholder="Enter a 5 digit zip code" value={zipcode} name="zipcode" 
            onChange={e => setZipcode(e.target.value)}
            />
          </div>
        
          <div>
            <input type="submit" className="btn btn-success mt-3" id="submit" name="submit"
            />
          </div>
          
        </form>

        </div>
    )
}
