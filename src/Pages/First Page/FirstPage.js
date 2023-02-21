import React from 'react';
import '../Pages.css'
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import FirstPhoto from '../../Content/First page photo.png'
import phone from '../../Content/telephone.png'
import house from '../../Content/house.png'
import point from '../../Content/point.png'
function FirstPage() {
    return (
        <div>
        <Navbar/>
            <div className={'Page-container'}>
                <div className={'Page-first-block'}>
                    <div className={'Page-first-block-header'}>Плетіння маскувальних сіток</div>
                    <img alt={'camo-net'} src={FirstPhoto}/>
                    <div className={'Page-first-block-text'}>Запрошуємо волонтерів приєднатись до нашої дружної волонтерської родини. Ми з початку повномасштабної війни плетемо маскувальні сітки та кікімори (маскувальні халати). Черга на них завжди велика, тому ми потребуємо Вашої допомоги.
                        Що ми пропонуємо:- велику дружну команду;- приємно проведений час з користю;- можливість обрати вид праці до душі (нарізання тканини, плетіння маскувальних сіток чи кікімор).
                        У нас є всі необхідні матеріали, не вистачає лише рук.
                    </div>
                </div>
                <div className={'Page-second-block'}>
                    <div className={'Page-second-block-header'}>Контакти</div>
                    <div className={'Page-second-block-square'}>
                        <div>
                            <img alt={'phone'} src={phone}/>
                            <div>0988744234</div>
                        </div>
                        <div>
                            <img alt={'house'} src={house}/>
                            <div>Київ</div>
                        </div>
                        <div>
                            <img alt={'point'} src={point}/>
                            <div>Микiльський провулок, 1/25</div>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
        </div>
    );
}

export default FirstPage;