import React from 'react';
import './VolunteerFAQ.css';
import volunteer from '../../../Content/volunteer.png'
import {Link} from "react-router-dom";
function VolunteerFaq() {
    return (
        <div className={'container-volunteer'}>
            <img className={'volunteer-image'} src={volunteer}/>
            <div className={'volunteer-text1'}>Волонтери України</div>
            <div className={'volunteer-text2'}>Кожна людина може змінити ситуацію і кожній
                людині слід спробувати</div>
            <div className={'button-container-volunteer'}>
                <Link to={'/questionnaire'}>
                <div>Стати волонтером</div>
                </Link>
                <div>Допомогти</div>
                <Link to={'/searchVolunteer'}>
                <div>Знайти волонтерів</div>
                </Link>
            </div>
        </div>
    );
}

export default VolunteerFaq;