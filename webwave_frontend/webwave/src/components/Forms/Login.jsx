const LoginForm = () => {
    return ( 
        <div className="w-[300px] flex flex-col gap-y-8 bg-white text-black px-8 py-10">

            <h1 className="text-3xl">LOGIN</h1>

            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" className="bg-transparent w-full focus:border-t-0 border-b border-b-gray-500 outline-none px-3 py-2 focus:border-b-mainColor duration-150 text-sm"/>
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="bg-transparent w-full focus:border-t-0 border-b border-b-gray-500 outline-none px-3 py-2 focus:border-b-mainColor duration-150 text-sm"/>
            </div>

            <button className="bg-black py-4 text-white">Login</button>
        </div>
     );
}
 
export default LoginForm;