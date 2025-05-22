import { useState } from 'react'

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        console.log(email, password);
    }

    return(
        <div className="flex flex-col">
            <form className="flex flex-col space-y-4 p-8 max-w-sm mx-auto" onSubmit={handleSubmit}>
                <input className="p-2 border border-gray-300 rounded" type="email" placeholder="Email" 
                value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className="p-2 border border-gray-300 rounded" type="password" placeholder="Password" 
                value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" type="submit" placeholder="Submit" />
            </form>
        </div>
    );
}