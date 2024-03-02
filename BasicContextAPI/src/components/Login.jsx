import React,{useContext,useState} from 'react'
import UserContext from '../contexts/UserContext'
function Login() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const{setUser} = useContext(UserContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username,password});
    }
  return (
    <div>
        <h2>Login</h2>
        <input className='bg-gray-700' type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' />
        {" "}
        <input className='bg-gray-700' type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
        <button onClick={handleSubmit}>Enter</button>
    </div>
  )
}

export default Login