const ProfileSettings = () => {
    return (
        <div>
            <h1>Profile settings</h1>

            <div className="flex items-center">
                <div className="border w-[200px] h-[200px] md:w-[200px] md:h-[200px] rounded-full flex justify-center items-center mt-5 relative">
                        <i className="fas fa-user md:text-6xl text-6xl"></i>
                        <div className="w-[40px] h-[40px] bg-mainColor absolute bottom-3 right-3 rounded-full text-white flex justify-center items-center">
                            <i className="fas fa-pen"/>
                        </div>
                </div>

                <div className="w-[2px] h-20 bg-gray-50 mx-10 opacity-20">
                </div>

                <div className="flex flex-col">
                    <label htmlFor="userName">Username</label>
                    <input type="text" className="bg-[#121212] text-gray-300 w-full outline-none px-3 py-2 duration-150 text-sm mt-2" value={'Username'}/>

                    <label htmlFor="email" className="mt-5">Email</label>
                    <input type="email" id="email" className="bg-[#121212] text-gray-300 w-full outline-none px-3 py-2 duration-150 text-sm mt-2" value={'email@email.com'}/>
                </div>
            </div>
        </div>
    );
}
 
export default ProfileSettings;