import { useState } from "react";
import Hello from './Hello';
import Login from './Login'

export default function Entry(){
    const [isLoggedIn, setUser] = useState(false);

    if(isLoggedIn) return <Hello />
    return <Login />
}