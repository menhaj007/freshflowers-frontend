import React, {useState, useEffect} from 'react'
import Session from 'react-session-api'

export default function SessionUserID({id}) {
    const[userSession, setUserSession] = useState(null);

    useEffect(() => {
        function setNewId() {
            setUserSession(id)
            Session.set(userSession)
        }
        setNewId()
    })
    

    return (
        <div>
            
        </div>
    )
}
