export default function Login(){
    return(
        <div className="flex flex-col">
            <form className="flex flex-col space-y-4 p-8 max-w-sm mx-auto">
                <input className="p-2 border border-gray-300 rounded" type="email" placeholder="Email" />
                <input className="p-2 border border-gray-300 rounded" type="password" placeholder="Password" />
                <input className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" type="submit" placeholder="Submit" />
            </form>
        </div>
    );
}