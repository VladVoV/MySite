import React, {useState} from 'react';
import './Login.css'
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
function Login() {
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // User Login info
    const database = [
        {
            email: "vladvojch@gmail.com",
            password: "12345"
        }
    ];

    const errors = {
        unemail: "Даний eMail не зареєстрований на сайті",
        pass: "Неправильний пароль"
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        let { uname, pass } = document.forms[0];

        const userData = database.find((user) => user.email === uname.value);

        if (userData) {
            if (userData.password !== pass.value) {
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            setErrorMessages({ name: "uname", message: errors.unemail });
        }
    };
    
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="login-error">{errorMessages.message}</div>
        );

    return (
        <div>
            <Navbar/>
        <div className="login-form">
            <div className={'login-header'}>Вхід</div>
            <form onSubmit={handleSubmit}>
                <div className="login-input-container">
                    <input type="text" name="uname" placeholder={'eMail'} required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="login-input-container">
                    <input type="password" name="pass" placeholder={'Пароль'} required />
                    {renderErrorMessage("pass")}
                </div>
                <button className='login-button' type={"submit"}>Увійти</button>
                <button className='registration-button' type={"submit"}>Зареєструватися</button>
            </form>
        </div>
            <Footer/>
        </div>
    );
}

export default Login;