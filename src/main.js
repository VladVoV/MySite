import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import App from "./Pages/Main Page/App";
import FirstPage from "./Pages/First Page/FirstPage";
import SecondPage from "./Pages/Second Page/SecondPage";
import ThirdPage from "./Pages/Third Page/ThirdPage";
import FourthPage from "./Pages/Fourth Page/FourthPage";
import Registration from "./Pages/Registration/Registration";
import Login from "./Pages/Login/Login";
import Questionnaire from "./Pages/Questionnaire/Questionnaire";
import SearchVolunteer from "./Pages/SearchVolunteer/SearchVolunteer";
import FifthPage from "./Pages/Fifth Page/FifthPage";
import SixthPage from "./Pages/SixthPage/SixthPage";
function Main() {
    return (
            <Routes>
                <Route path={'/'} element={<App/>}/>
                <Route path={'/firstPage'} element={<FirstPage/>}/>
                <Route path={'/secondPage'} element={<SecondPage/>}/>
                <Route path={'/thirdPage'} element={<ThirdPage/>}/>
                <Route path={'/fourthPage'} element={<FourthPage/>}/>
                <Route path={'/fifthPage'} element={<FifthPage/>}/>
                <Route path={'/sixthPage'} element={<SixthPage/>}/>
                <Route path={'/registration'} element={<Registration/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/questionnaire'} element={<Questionnaire/>}/>
                <Route path={'/searchVolunteer'} element={<SearchVolunteer/>}/>
            </Routes>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
export default Main;