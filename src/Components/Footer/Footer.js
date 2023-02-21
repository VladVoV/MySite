import React, {useEffect} from 'react';
import './Footer.css';
import vector from '../../Content/Vector.png'
import insta from '../../Content/insta.svg'
import facebook from '../../Content/facebook.svg'
import youtube from '../../Content/youtube.svg'
import {Link} from "react-router-dom";
function Footer() {
    const AboutUsScroll = (e) => {
            let id1 = document.querySelector('#Link1');
            console.log(id1);

        // eslint-disable-next-line no-restricted-globals
            scrollTo(0, 3000);
    };
    return (
        <div className={'footer-container'}>
            <div className={'footer-logo'}>
                <div>volunteer.ua</div>
                <img src={vector}/>
            </div>
            <div className={'footer-navigation'}>
                <h2>Навігація</h2>
                <div>Головна</div>
                <div>Волонтерам</div>
                <div>Підтримати</div>
                <Link onClick={AboutUsScroll} id={'Link1'} to={'/'}>
                <div>Про нас</div>
                </Link>
            </div>
            <div className={'footer-projects'}>
                <h2>Проєкти</h2>
                <Link to={'/firstPage'}>
                <div>Плетіння маскувальних</div>
                </Link>
                <Link to={'/secondPage'}>
                <div>Стати донором крові</div>
                </Link>
                <Link to={'/thirdPage'}>
                <div>Акція "Святий Миколай"</div>
                </Link>
                <Link to={'/fourthPage'}>
                <div>Волонтерство у БФ "Очі Миру"</div>
                </Link>
                <Link to={'/fifthPage'}>
                <div>Допомога притулку для тварин</div>
                </Link>
                <Link to={'/sixthPage'}>
                <div>Допомога українській армії</div>
                </Link>
            </div>
            <div className={'footer-contacts'}>
                <h2>Контакти</h2>
                <div className={'footer-contacts-social'}>
                    <img src={insta}/>
                    <img src={facebook}/>
                    <img src={youtube}/>
                </div>
            </div>
        </div>
    );
}

export default Footer;