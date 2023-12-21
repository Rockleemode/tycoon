"use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Image from 'next/image'
import loading from './loading.png'


export default function CreatingTicket() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [priority, setPriority] = useState('low');
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e) =>{
        e.preventDefault();

        setIsLoading(true)

        if(title == "" || body == ''){
            setError("all the fields need to be filled.")
            return;
        }
        const ticket = {
            title,
            body,
            priority,
            user_email:"rockleemode@gmail.com"
        }
        const res = await fetch("http://localhost:4000/tickets", {
            method:"POST",
            headers:{"content-Type":"application/json"},
            body: JSON.stringify(ticket)
        })

        if(res.status === 201){
            router.refresh();
            router.push('/tickets');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">
                <span>Title:</span>
                <input
                 type="text"
                 value={title}
                 onChange={(e) => setTitle(e.target.value)} 
                 />
            </label>
            <label htmlFor="body">
                <span>Body:</span>
                <textarea 
                name="body" 
                id="body" 
                value={body}
                onChange={(e) => setBody(e.target.value)}
                 />
            </label>
            <label htmlFor="priority">
                <span>priority:</span>
                <select 
                name="priority" 
                id="priority" 
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                >
                    <option>low</option>
                    <option>medium</option>
                    <option>high</option>
                </select>
            </label>
            {error && <span className="error my-4">{error}</span>}
            <button className='border bg-primary text-white'>
                {isLoading && <Image src={loading} alt='loading' height={20} width={20}/>}
                {!isLoading && <span>Add</span>}
            </button>
        </form>
    )
}
