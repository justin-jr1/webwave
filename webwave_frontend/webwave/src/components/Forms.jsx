import ForgotPasswordForm from "./Forms/ForgotPassword";
import LoginForm from "./Forms/Login";
import RegisterForm from "./Forms/Register";

const Forms = (props) => {
    let isLogin = false
    let isRegister = false
    let isForgotPassword = false

    if(props.type === 'login'){
        isLogin = true
    }

    if(props.type === 'register'){
        isRegister = true
    }

    if(props.type === 'forgot-password'){
        isForgotPassword = true
    }


    return ( 
        <div className="w-full h-[80vh] flex justify-center items-center">
            {isLogin ? <LoginForm /> : (<span></span>)}
            {isRegister ? <RegisterForm/> : (<span></span>)}
            {isForgotPassword ? <ForgotPasswordForm/> : (<span></span>)}
        </div>
     );
}
 
export default Forms;