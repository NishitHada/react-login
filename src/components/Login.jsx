import { useState, useEffect } from 'react';

export default function Login(){
    const [userName, setUser] = useState(null);

    useEffect(() => {
        console.log(userName);
    }, [userName])

    return (
        <div>
            <label>UserName</label>
            <input value={userName} onChange={(e) => setUser(e.target.value)}></input>
            {!!userName && <h3>Hello {userName}</h3>}     
        </div>
    )
}