import React from 'react';
import './SecondFAQ.css';
import Info_first from '../../../Content/info_1.png';
import {Link} from "react-router-dom";
function SecondFAQ_first() {
    return (
        <div className={'secondFAQ-container-first'}>
            <img className={'secondFAQ-img-first'} src={Info_first}/>
            <div className={'secondFAQ-head-first'}>Ви активіст, чи представник громадської організації?</div>
            <div className={'secondFAQ-text-first'}>Створюйте власні події чи проекти або приєднуйтеся до уже існуючих. Опишіть, хто вам потрібен для реалізації задуму. Може, вам треба дизайнер чи копірайтер? Чи художник? Чи звукорежисер? Знайдіть цю людину. Ми віримо, що є багато тих, хто може зробити добру справу для тих, у кого вірить.

                Збирайте людей на заходи, обговорюйте внутрішні завдання і плани. Розповідайте про те, які проекти ви вже реалізовували. Де були корисними? Що встигли зробити?</div>
            <Link to={'/searchVolunteer'}>
            <button>Знайти волонтерів</button>
            </Link>
        </div>
    );
}

export default SecondFAQ_first;