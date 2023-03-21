import ForgotPasswordForm from "./Forms/ForgotPassword";
import LoginForm from "./Forms/Login";
import RegisterForm from "./Forms/Register";

const Forms = () => {
    return ( 
        <div className="w-full h-[80vh] flex justify-center items-center">
            {/* <LoginForm /> */}
            {/* <RegisterForm/> */}
            <ForgotPasswordForm/>
        </div>
     );
}
 
export default Forms;