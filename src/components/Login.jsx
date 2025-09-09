import React from 'react'
import { login, logout } from '../reducers/User'
import { useDispatch } from 'react-redux'

const Login = () => {
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => { dispatch(login({ name: "john", age: 40, email: "email@gmail.com" })) }}>Login</button>
            <button onClick={() => { dispatch(logout()) }}>Logout</button>
        </div>
    )
}

export default Login
