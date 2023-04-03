import Logo from "./Logo";
import SettingsContainer from "./SettingsContainer"

const Settings = () => {
    return (
        <div className="bg-[rgba(0,0,0,1)] w-screen h-screen fixed top-0 left-0 backdrop-blur-md px-8 md:px-16">
            <Logo/>
            <h1 className="text-2xl">Account Settings</h1>
            <div className="w-full justify-center flex">
                <SettingsContainer/>
            </div>
        </div>
    );
}
 
export default Settings;