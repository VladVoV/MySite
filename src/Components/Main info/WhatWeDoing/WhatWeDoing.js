import React from 'react';
import './WhatWeDoing.css';
import wwd_1 from '../../../Content/wwd_1.png'
import wwd_2 from '../../../Content/wwd_2.png'
import wwd_3 from '../../../Content/wwd_3.png'
import wwd_4 from '../../../Content/wwd_4.png'
import wwd_5 from '../../../Content/wwd_5.png'
import wwd_6 from '../../../Content/wwd_6.png'
import {Link} from "react-router-dom";
function WhatWeDoing() {
    return (
        <div className={'whatwedoing-container'}>
            <div className={'whatwedoing-hteg'}>Що ми робимо?</div>
            <ul className={'whatwedoing-first-ul'}>
                <li>
                    <img src={wwd_1}/>
                    <h2>Координуємо волонтерів</h2>
                    <div>Об'єднуємо волонтерів з усієї України у єдину спільноту змінотворців.</div>
                </li>
                <li>
                    <img src={wwd_2}/>
                    <h2>Творимо добро</h2>
                    <div>Ми голос українського волонтерства. Надихаємо добрими вчинками змінювати світ на краще. </div>
                </li>
                <li>
                    <img src={wwd_3}/>
                    <h2>Об’єднюємо волонтерів</h2>
                    <div>Знаходимо, готуємо та координуємо волонтерів на подіях, фестивалях, бізнес-конференціях, волонтерських акціях.</div>
                </li>
            </ul>
            <ul className={'whatwedoing-second-ul'}>
                <li>
                    <img src={wwd_4}/>
                    <h2>Долучись до команди</h2>
                    <div>Хочеш допомагати тим, хто на це потребує? Долучитися до соціально корисного проєкту? Розвивати себе і вчитися новому, роблячи добрі справи?</div>
                    <button className={'whatwedoing-firstandsecond-button'}>Твори Добро</button>
                </li>
                <li>
                    <img src={wwd_5}/>
                    <h2>Допомагай без зусиль</h2>
                    <div>Не маєш часу долучитися, але хочеш допомогти? Хочеш творити добрі справи без зусиль? Маєш змогу інвестувати у розвиток волонтерського руху?</div>
                    <Link to={'/questionnaire'}>
                    <button className={'whatwedoing-firstandsecond-button'}>Стань Доброчинцем</button>
                    </Link>
                </li>
                <li>
                    <img src={wwd_6}/>
                    <h2>Знайди волонтерів</h2>
                    <div>Маєш власний соціально корисний проєкт чи захід? Потребуєш допомоги волонтерів? Хочеш із їхньою допомогою творити більше добрих справ? Розумієш, як мотивувати та розвивати волонтерів?</div>
                    <Link to={'/searchVolunteer'} >
                    <button className={'whatwedoing-last-button'}>Знайди волонтерів</button>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default WhatWeDoing;