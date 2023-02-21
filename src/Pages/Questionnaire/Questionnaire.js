import React, {useState, useEffect} from 'react';
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import './Questionnaire.css'
function Questionnaire() {
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [email, setEmail] = useState(null)
    const [number, setNumber] = useState(null)
    const [telegram, setTelegram] = useState(null)
    const [region, setRegion] = useState(null)
    const [dateOfBirth, setDateOfBirth] = useState(null)
    const [autoVolunteer, setAutoVolunteer] = useState(false)
    const [houseVolunteer, setHouseVolunteer] = useState(false)
    const [psychoVolunteer, setPsychoVolunteer] = useState(false)
    const [layerVolunteer, setLayerVolunteer] = useState(false)
    const [goodsVolunteer, setGoodsVolunteer] = useState(false)
    const [firstAidVolunteer, setFirstAidVolunteer] = useState(false)
    const [doctorVolunteer, setDoctorVolunteer] = useState(false)
    const [coordinationVolunteer, setCoordinationVolunteer] = useState(false)
    const [elseVolunteer, setElseVolunteer] = useState(false)
    const [elseText, setElseText] = useState(null)
    const [isDisabled, setIsDisabled] = useState(true);
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
        if(id === "telegram"){
            setTelegram(value);
        }
        if(id === "region"){
            setRegion(value);
        }
        if(id === "dateOfBirth"){
            setDateOfBirth(value);
        }
        if(id === "autoVolunteer"){
            setAutoVolunteer(!autoVolunteer);
        }
        if(id === "houseVolunteer"){
            setHouseVolunteer(!houseVolunteer);
        }
        if(id === "psychoVolunteer"){
            setPsychoVolunteer(!psychoVolunteer);
        }
        if(id === "layerVolunteer"){
            setLayerVolunteer(!layerVolunteer);
        }
        if(id === "goodsVolunteer"){
            setGoodsVolunteer(!goodsVolunteer);
        }
        if(id === "firstAidVolunteer"){
            setFirstAidVolunteer(!firstAidVolunteer);
        }
        if(id === "doctorVolunteer"){
            setDoctorVolunteer(!doctorVolunteer);
        }
        if(id === "coordinationVolunteer"){
            setCoordinationVolunteer(!coordinationVolunteer);
        }
        if(id === "elseVolunteer"){
            setElseVolunteer(!elseVolunteer);
        }
        if(elseVolunteer === true){
            setIsDisabled(!isDisabled);
        }
        if(id === "elseText"){
            setElseText(value);
        }
    }
    useEffect(()=>{
        if(elseVolunteer === true){
            setIsDisabled(false);
        }
    }, [elseVolunteer, isDisabled])
    const handleSubmit  = (e) => {
        e.preventDefault();
        console.log(firstName,lastName,email,number, telegram, region, dateOfBirth, autoVolunteer, houseVolunteer, psychoVolunteer, layerVolunteer, goodsVolunteer,
            firstAidVolunteer, doctorVolunteer, coordinationVolunteer, elseVolunteer, elseText);
    }
    return (
        <div>
            <Navbar/>
            <div className={'questionnaire-container'}>
                <div className={'questionnaire-htag'}>Анкета Волонтера</div>
                <input type={"text"} id={'firstName'} value={firstName} onChange = {(e) => handleInputChange(e)} placeholder={"Ім'я"} required={true}/>
                <input type={"text"} id={'lastName'} value={lastName} onChange = {(e) => handleInputChange(e)} placeholder={"Прізвище"} required={true}/>
                <input type={"email"} id={'email'} value={email} onChange = {(e) => handleInputChange(e)} placeholder={"eMail"} required={true}/>
                <input type={"number"} id={'number'} value={number} onChange = {(e) => handleInputChange(e)} placeholder={"Номер телефону"} required={true}/>
                <input type={"text"} id={'telegram'} value={telegram} onChange = {(e) => handleInputChange(e)} placeholder={"Акаунт Telegram"}/>
                <input type={"text"} id={'region'} value={region} onChange = {(e) => handleInputChange(e)} placeholder={"Область проживання"} required={true}/>
                <input type={"date"} id={'dateOfBirth'} value={dateOfBirth} onChange = {(e) => handleInputChange(e)} placeholder={"Дата народження"} required={true}/>
                <div className={'questionnaire-text'}>Обери зі списку те, чим можеш допомогти (можна обрати декілька варіантів):</div>
                <div className={'questionnaire-checkbox'}>
                    <input type={"checkbox"} id={'autoVolunteer'} value={autoVolunteer} onChange={(e) => handleInputChange(e)} checked={autoVolunteer}/>
                    <label>Автоволонтер з машиною</label>
                </div>
                <div className={'questionnaire-checkbox'}>
                    <input type={"checkbox"} id={'houseVolunteer'} value={houseVolunteer} onChange={(e) => handleInputChange(e)} checked={houseVolunteer}/>
                    <label>Можу прийняти вдома тих, хто потребує
                    </label>
                </div>
                <div className={'questionnaire-checkbox'}>
                    <input type={"checkbox"} id={'psychoVolunteer'} value={psychoVolunteer} onChange={(e) => handleInputChange(e)} checked={psychoVolunteer}/>
                    <label>Можу надати психологічну допомогу
                    </label>
                </div>
                <div className={'questionnaire-checkbox'}>
                    <input type={"checkbox"} id={'layerVolunteer'} value={layerVolunteer} onChange={(e) => handleInputChange(e)} checked={layerVolunteer}/>
                    <label>Можу надати юридичну допомогу
                    </label>
                </div>
                <div className={'questionnaire-checkbox'}>
                    <input type={"checkbox"} id={'goodsVolunteer'} value={goodsVolunteer} onChange={(e) => handleInputChange(e)} checked={goodsVolunteer}/>
                    <label>Можу надати продукти/одяг/спальники/ліхтарики
                    </label>
                </div>
                <div className={'questionnaire-checkbox'}>
                    <input type={"checkbox"} id={'firstAidVolunteer'} value={firstAidVolunteer} onChange={(e) => handleInputChange(e)} checked={firstAidVolunteer}/>
                    <label>Вмію надавати першу домедичну допомогу
                    </label>
                </div>
                <div className={'questionnaire-checkbox'}>
                    <input type={"checkbox"} id={'doctorVolunteer'} value={doctorVolunteer} onChange={(e) => handleInputChange(e)} checked={doctorVolunteer}/>
                    <label>Лікар/лікарка
                    </label>
                </div>
                <div className={'questionnaire-checkbox'}>
                    <input type={"checkbox"} id={'coordinationVolunteer'} value={coordinationVolunteer} onChange={(e) => handleInputChange(e)} checked={coordinationVolunteer}/>
                    <label>Можу координувати людей під час евакуації (зустрічати, відвозити на місця)
                    </label>
                </div>
                <div className={'questionnaire-checkbox'}>
                    <input type={"checkbox"} id={'elseVolunteer'} value={elseVolunteer} onChange={(e) => handleInputChange(e)} checked={elseVolunteer}/>
                    <label>інше (напиши в полі нижче)
                    </label>
                </div>
                <input type={"text"} id={'elseText'} value={elseText} onChange = {(e) => handleInputChange(e)} placeholder={"Чим можете допомогти"} disabled={isDisabled}/>
                <button className={'questionnaire-button'} type={"submit"} onClick={(e)=>handleSubmit(e)}>Надіслати</button>
            </div>
            <Footer/>
        </div>
    );
}

export default Questionnaire;