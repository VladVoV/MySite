import React from 'react';
import '../Pages.css'
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import SixthPhoto from '../../Content/SixthPage.png'
function SixthPage() {
    return (
        <div>
            <Navbar/>
            <div className={'Page-container'}>
                <div className={'Page-first-block'}>
                    <div className={'Page-first-block-header'}>Допомога БО «Повернись живим»
                    </div>
                    <img alt={'camo-net'} src={SixthPhoto}/>
                    <div className={'Page-first-block-text'}>«Повернись живим» — фонд компетентної допомоги армії. З 2014 року наша ключова мета — зробити Сили оборони ефективнішими, зберегти життя військових та системно протидіяти ворогові. Від початку повномасштабного вторгнення у лютому 2022 року ми збільшили допомогу армії в рази і підтримуємо захисників України, які змінили своє звичне життя та вийшли на лінію оборони.

                    </div>
                </div>
                <div className={'Page-second-block'}>
                    <div className={'Page-second-block-header'}>Платіжна інформація:
                    </div>
                    <div className={'Page-second-block-square11'}>
                        <div className={'Page-second-block-info'}>
                            <div className={'Page-second-block-info-first-child'}>Отримувач</div>
                            <div className={'Page-second-block-info-last-child'}>БО «Повернись живим»
                            </div>
                        </div>
                        <div className={'Page-second-block-info'}>
                            <div className={'Page-second-block-info-first-child'}>Рахунок в "Приватбанку"</div>
                            <div className={'Page-second-block-info-last-child'}>UA383052990000026005015017860
                            </div>
                        </div>
                        <div className={'Page-second-block-info'}>
                            <div className={'Page-second-block-info-first-child'}>ЄДРПОУ</div>
                            <div className={'Page-second-block-info-last-child'}>39696398
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default SixthPage;