const ForgotPasswordForm = () => {
    return ( 
        <div className="w-[300px] md:w-[400px] flex flex-col py-10">

            <h1 className="text-3xl font-bold mb-4">Forgot Your Password?</h1>
            <h2 className="mb-8">Oops! We reset passwords tho.</h2>

            <div className="bg-[#181818] rounded py-2 px-2 mb-4">                
                <input type="email" id="email" className="bg-transparent text-gray-300 w-full outline-none px-3 py-2 duration-150 text-sm" placeholder="Email"/>
            </div>

            <button className="bg-mainColor hover:bg-mainHover py-4 text-white mt-2 duration-200 rounded">Send me a reset link</button>

            <p className="mt-4">Remember Now? <span className="text-mainColor hover:text-mainHover duration-200 cursor-pointer font-extrabold">Login</span></p>

            
        </div>
     );
}
 
export default ForgotPasswordForm;