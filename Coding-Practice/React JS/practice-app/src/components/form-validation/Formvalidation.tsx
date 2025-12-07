import { useState } from 'react'
import './style.css'


export default function FormValidation() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const validateInput = () => {
        localStorage.setItem('email',email)
    }

    const name = localStorage.getItem('email')

    



    return (
        <div className='container'>
            <h1>Form Validation</h1>
            <div>
                <form className='form' onSubmit={validateInput}>
                    <input type='email' onChange={(e) => setEmail(e.target.value)} />
                    <input type='text'  onChange={(e) => setPassword(e.target.value)}/>
                    <button type='submit'>Submit</button>
                </form>
            </div>

            <h4>{name}</h4>
            <h4>{password}</h4>

        </div>
    )
}

