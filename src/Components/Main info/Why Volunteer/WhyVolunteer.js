import React from 'react';
import './WhyVolunteer.css'
import WomanAHAHAH from '../../../Content/woman AAHHAHAHAHA.png'
import QuestionSmall from '../../../Content/question_small.png'
import QuestionMedium from '../../../Content/question_medium.png'
import QuestionBig from '../../../Content/question_big.png'
function WhyVolunteer() {
    return (
        <div className={'container-WhyVolunteer'}>
            <img src={WomanAHAHAH}/>
            <div className={'WhyVolunteer-text'}>
                <div>Чому волонтерство?</div>
                    <img src={QuestionSmall} className={'question-small'}/>
                    <img src={QuestionMedium} className={'question-medium'}/>
                    <img src={QuestionBig} className={'question-big'}/>
                <div>
                    <div>
                        В Україні <b>близько 12% населення</b> долучається до волонтерського руху, і ця цифра потроху зростає. Щоб волонтерство приносило користь і задоволення, воно не обов’язково має займати весь наявний час.
                    </div>
                    <div>
                        Волонтерство — це знайти те, що відгукується особисто вам та вписується у ваше життя.
                    </div>
                    <div>
                        На сьогодні волонтерські організації існують у 80-ти країнах світу. Близько 110 мільйонів людей щорічно беруть участь у добровільних програмах, де допомагають у сферах освіти, охорони здоров'я, екології, соціального захисту та багатьох інших.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyVolunteer;