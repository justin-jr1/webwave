import {Link} from 'react-router-dom'

const LoginForm = () => {
    return ( 
        <div className="w-[300px] md:w-[400px] flex flex-col py-10">

            <h1 className="text-3xl font-bold mb-4">Log in</h1>
            <h2 className="mb-8">Hey, welcome back👋</h2>

            <div className="bg-[#181818] rounded py-2 px-2 mb-4">
                
                <input type="email" id="email" className="bg-transparent text-gray-300 w-full outline-none px-3 py-2 duration-150 text-sm" placeholder="Email"/>
            </div>

            <div className="bg-[#181818] rounded py-2 px-2 mb-1">
                <input type="password" id="password" className="bg-transparent text-gray-300 w-full outline-none px-3 py-2 duration-150 text-sm" placeholder="Password"/>
            </div>


            <Link to="/forgot-password">
                <p className="text-right text-mainColor mb-4 hover:text-mainHover duration-200 cursor-pointer">Forgot Password?</p>
            </Link>
            

            <button className="bg-mainColor hover:bg-mainHover py-4 text-white mt-2 duration-200 rounded">Login</button>

            <p className="mt-4">New here? 
                <Link to="/register">
                    <span className="text-mainColor hover:text-mainHover duration-200 cursor-pointer font-extrabold"> Join the wave.</span>
                </Link>
            </p>

            
        </div>
     );
}
 
export default LoginForm;