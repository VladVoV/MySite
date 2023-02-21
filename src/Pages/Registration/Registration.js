import React, {useState} from 'react';
import './Registration.css'
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
function Registration() {
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [email, setEmail] = useState(null)
    const [number, setNumber] = useState(null)
    const [password,setPassword] = useState(null)
    const [confirmPassword,setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "number"){
            setNumber(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }
    const handleSubmit  = (e) => {
        e.preventDefault();
        console.log(firstName,lastName,email,number,password,confirmPassword);
    }

    return (
        <div>
            <Navbar/>
        <div>
            <form className={'registration-container'}>
                <div>Реєстрація</div>
                <input type={"text"} id={'firstName'} value={firstName} onChange = {(e) => handleInputChange(e)} placeholder={"Ім'я"}/>
                <input type={"text"} id={'secondName'} value={lastName} onChange = {(e) => handleInputChange(e)} placeholder={"Прізвище"}/>
                <input type={"email"} id={'email'} value={email} onChange = {(e) => handleInputChange(e)} placeholder={"eMail"}/>
                <input type={"number"} id={'number'} value={number} onChange = {(e) => handleInputChange(e)} placeholder={"Номер телефону"}/>
                <input type={"password"} id={'password'} value={password} onChange = {(e) => handleInputChange(e)} placeholder={"Пароль"}/>
                <input type={"password"} id={'confirmPassword'} value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder={"Повторити пароль"}/>
                <button onClick={(e)=>handleSubmit(e)} type={"submit"} className={'registration-button'}>Зареєструватись</button>
                <button className={'login-button'}>Увійти</button>
            </form>
        </div>
            <Footer/>
        </div>
    );
}

export default Registration;