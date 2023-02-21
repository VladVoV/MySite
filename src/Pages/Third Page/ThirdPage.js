import React from 'react';
import '../Pages.css'
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ThirdPhoto from '../../Content/Third page photo.png'
import phone from '../../Content/telephone.png'
import house from '../../Content/house.png'
import point from '../../Content/point.png'
function ThirdPage() {
    return (
        <div>
            <Navbar/>
            <div className={'Page-container'}>
                <div className={'Page-first-block'}>
                    <div className={'Page-first-block-header'}>Акція "Святий Миколай"</div>
                    <img alt={'camo-net'} src={ThirdPhoto}/>
                    <div className={'Page-first-block-text'}>Акція "Святий Миколай іде до сиріт" розпочинається задовго до свята Миколая. Готуються до свята і діти шкіл-інтернатів. В сирітських закладах організовується конкурс малюнка до Миколая. Переможцем стає той, чий малюнок найкращий. Він отримує спеціальний подарунок за майстерність і творчість.
                        Поряд з цим діти пишуть листи до Святого Миколая, у яких просять про різноманітні речі.
                        Уся пошта до Святого Миколая в приміщенні Мальтійської служби розповсюджується серед жителів міста та області. Таким чином, всі бажаючі, взявши дитячого листа, можуть приготувати подарунок для дитини-сироти від імені Святого.
                    </div>
                </div>
                <div className={'Page-second-block'}>
                    <div className={'Page-second-block-header'}>Контакти</div>
                    <div className={'Page-second-block-square'}>
                        <div>
                            <img alt={'phone'} src={phone}/>
                            <div>0342552644

                            </div>
                        </div>
                        <div>
                            <img alt={'house'} src={house}/>
                            <div>Івано-Франківськ
                            </div>
                        </div>
                        <div>
                            <img alt={'point'} src={point}/>
                            <div>вул.Лесі Українки, 1

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ThirdPage;