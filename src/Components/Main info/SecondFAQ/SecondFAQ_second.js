import React from 'react';
import './SecondFAQ.css';
import Info_second from '../../../Content/info_2.png'
import Vector_Second from '../../../Content/Vector 1.png'
import {Link} from "react-router-dom";
function SecondFaqSecond() {
    return (
        <div className={'secondFAQ-container-second'}>
            <img className={'secondFAQ-img-second'} src={Info_second}/>
            <img className={'secondFAQ-vector-second'} src={Vector_Second}/>
            <div className={'secondFAQ-head-second'}>Ви волонтер?</div>
            <div className={'secondFAQ-text-second'}>Ви хочете допомагати іншим? Маєте вільний час, щоб приділити його волонтерській роботі? Реєструйтеся на сайті як “волонтер” і шукайте тих, кому ви будете корисні.

                Можете обирати проекти за містом чи тематикою. Або перегляньте усі, які зараз відкриті. Оберіть ті організацій чи тих активістів, кому ви довіряєте, підпишіться на їхні оновлення та завжди будьте в курсі, коли їм потрібна ваша допомога.</div>
            <Link to={'/questionnaire'}>
            <button className={'secondFAQ-button-second'}>Стати волонтером</button>
            </Link>
        </div>
    );
}

export default SecondFaqSecond;