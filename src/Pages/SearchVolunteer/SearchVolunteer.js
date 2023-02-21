import React, {useState} from 'react';
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import './SearchVolunteer.css'
function SearchVolunteer() {
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [email, setEmail] = useState(null)
    const [number, setNumber] = useState(null)
    const [telegram, setTelegram] = useState(null)
    const [city, setCity] = useState(null)
    const [nameOrganization, setNameOrganization] = useState(null)
    const [aboutOrganization, setAboutOrganization] = useState(null)
    const [whatHelpDoYouNeed, setWhatHelpDoYouNeed] = useState(null)
    const handleInputChange = (e) => {
        const {id, value} = e.target;
        if (id === "firstName") {
            setFirstName(value);
        }
        if (id === "lastName") {
            setLastName(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "number") {
            setNumber(value);
        }
        if(id === "telegram"){
            setTelegram(value);
        }
        if(id === "city"){
            setCity(value);
        }
        if(id === "nameOrganization"){
            setNameOrganization(value);
        }
        if(id === "aboutOrganization"){
            setAboutOrganization(value);
        }
        if(id === "whatHelpDoYouNeed"){
            setWhatHelpDoYouNeed(value);
        }

    }
    const handleSubmit  = (e) => {
        e.preventDefault();
        console.log(firstName,lastName,email,number,telegram,city, nameOrganization, aboutOrganization, whatHelpDoYouNeed);
    }
    return (
        <div>
            <Navbar/>
            <div className={'search-volunteer-container'}>
                <div>Пошук волонтерів</div>
                <input type={"text"} id={'firstName'} value={firstName} onChange = {(e) => handleInputChange(e)} placeholder={"Ім'я"}/>
                <input type={"text"} id={'lastName'} value={lastName} onChange = {(e) => handleInputChange(e)} placeholder={"Прізвище"}/>
                <input type={"email"} id={'email'} value={email} onChange = {(e) => handleInputChange(e)} placeholder={"eMail"}/>
                <input type={"number"} id={'number'} value={number} onChange = {(e) => handleInputChange(e)} placeholder={"Номер телефону"}/>
                <input type={"text"} id={'telegram'} value={telegram} onChange = {(e) => handleInputChange(e)} placeholder={"Акаунт Telegram"}/>
                <input type={"text"} id={'city'} value={city} onChange = {(e) => handleInputChange(e)} placeholder={"Місто"}/>
                <textarea type={"text"} id={'nameOrganization'} value={nameOrganization} onChange = {(e) => handleInputChange(e)} placeholder={"Назва організації, яку ви представляєте"} rows={2}/>
                <textarea type={"text"} id={'aboutOrganization'} value={aboutOrganization} onChange = {(e) => handleInputChange(e)} placeholder={"Коротко про організацію. (2-3 речення)"} rows={5}/>
                <textarea type={"text"} id={'whatHelpDoYouNeed'} value={whatHelpDoYouNeed} onChange = {(e) => handleInputChange(e)} placeholder={" Яка допомога вам потрібна?"} rows={8}/>
                <button className={'questionnaire-button'} type={"submit"} onClick={(e)=>handleSubmit(e)}>Надіслати</button>
            </div>
            <Footer/>
        </div>
    );
}

export default SearchVolunteer;