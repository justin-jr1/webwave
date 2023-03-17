
const TopBar = () => {
    return ( 
        <div className={`flex-col-reverse md:flex-row items-center md:justify-between gap-y-5 mb-10 md:gap-y-0 flex`}>
            <div>
                <span className="text-2xl">Hello there👋</span>
            </div>
            <div>
                <div className="border w-[80px] h-[80px] md:w-[50px] md:h-[50px] rounded-full flex justify-center items-center">
                    <i className="fas fa-user md:text-2xl text-3xl"></i>
                </div>
            </div>
        </div>
     );
}
 
export default TopBar;