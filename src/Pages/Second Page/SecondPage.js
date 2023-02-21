import React from 'react';
import '../Pages.css'
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import SecondPhoto from '../../Content/Second page photo.png'
import phone from '../../Content/telephone.png'
import house from '../../Content/house.png'
import point from '../../Content/point.png'
function SecondPage() {
    return (
        <div>
            <Navbar/>
            <div className={'Page-container'}>
                <div className={'Page-first-block'}>
                    <div className={'Page-first-block-header'}>Стати донором крові</div>
                    <img alt={'camo-net'} src={SecondPhoto}/>
                    <div className={'Page-first-block-text'}>Комунальне некомерційне підприємство Прикарпатський обласний центр служби крові Івано-Франківської обласної ради заготовляє цільну кров, плазму і тромбоцитну масу. Приймає донорів з будь-яким місцем реєстрації. Для кроводачі донорам потрібно мати з собою паспорт та ідентифікаційний код (якщо це ID-картка - то довідку про місце реєстрації). Допускається використання додатку "ДІЯ" Обмеження по вазі донора - 50 кг. Для здачі тромбоцитної маси центр крові приймає тільки чоловіків.
                    </div>
                </div>
                <div className={'Page-second-block'}>
                    <div className={'Page-second-block-header'}>Контакти</div>
                    <div className={'Page-second-block-square'}>
                        <div>
                            <img alt={'phone'} src={phone}/>
                            <div>0980130924
                            </div>
                        </div>
                        <div>
                            <img alt={'house'} src={house}/>
                            <div>Івано-Франківськ
                            </div>
                        </div>
                        <div>
                            <img alt={'point'} src={point}/>
                            <div>Степана Бандери, 23
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default SecondPage;