const RegisterForm = () => {
    return ( 
        <div className="w-[300px] md:w-[400px] flex flex-col py-10">

            <h1 className="text-3xl font-bold mb-4">Register</h1>
            <h2 className="mb-8">Join the wave 👋</h2>

            <div className="bg-[#181818] rounded py-2 px-2 mb-4">                
                <input type="text" id="username" className="bg-transparent text-gray-300 w-full outline-none px-3 py-2 duration-150 text-sm" placeholder="Username"/>
            </div>

            <div className="bg-[#181818] rounded py-2 px-2 mb-4">                
                <input type="email" id="email" className="bg-transparent text-gray-300 w-full outline-none px-3 py-2 duration-150 text-sm" placeholder="Email"/>
            </div>

            <div className="bg-[#181818] rounded py-2 px-2 mb-4">
                <input type="password" id="password" className="bg-transparent text-gray-300 w-full outline-none px-3 py-2 duration-150 text-sm" placeholder="Password"/>
            </div>

            <div className="bg-[#181818] rounded py-2 px-2 mb-4">
                <input type="password" id="confirm-password" className="bg-transparent text-gray-300 w-full outline-none px-3 py-2 duration-150 text-sm" placeholder="Confirm Password"/>
            </div>

            <button className="bg-mainColor hover:bg-mainHover py-4 text-white mt-2 duration-200 rounded">Register</button>

            <p className="mt-4">Own a wave? <span className="text-mainColor hover:text-mainHover duration-200 cursor-pointer font-extrabold">Log In.</span></p>

            
        </div>
     );
}
 
export default RegisterForm;