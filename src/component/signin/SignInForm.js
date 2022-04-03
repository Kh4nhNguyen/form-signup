import React, { useEffect, useState ,} from "react"
import { Link, useNavigate } from 'react-router-dom'
import dataFake from './../../data.json'
import { CheckLogin } from "../../App"

const testName = 'admin@gmail.com'
const testPass = '123456'


function SignInForm() {

    const [name, setName] = useState('')
    const [pass, setPass] = useState('')

    const nagigate = useNavigate()
    // 1. lấy được thông tin trong input
    // 2. lấy được data trong file json
    // 3. check 1-2
    // 4. true => navigate Home. false => alert

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name === testName && pass === testPass){
            console.log("sussces")
            nagigate(`/todolist`)
        }else{
            alert('error')
        }
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                Sign in
                <br />
                Name
                <input
                    type='text'
                    id="name"
                    placeholder="Enter name..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                Password
                <input
                    type='password'
                    id="password"
                    placeholder="Enter password..."
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                />
                <br />
                <Link to="/register">register</Link>
                <br />
                <button type="submit">Login</button>
            </form>
        </React.Fragment>
    )
}

export default SignInForm