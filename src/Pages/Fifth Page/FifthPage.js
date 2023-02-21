import React from 'react';
import '../Pages.css'
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import FifthPhoto from '../../Content/FifthPhoto.png'
function FifthPage() {
    return (
        <div>
            <Navbar/>
            <div className={'Page-container'}>
                <div className={'Page-first-block'}>
                    <div className={'Page-first-block-header'}>Допомога притулку для тварин</div>
                    <img alt={'camo-net'} src={FifthPhoto}/>
                    <div className={'Page-first-block-text'}>«Дім Сірка» - молода організація, що об’єднала волонтерів, які опікуються тваринами міста вже декілька років.Намагаємося згуртувати небайдужих івано-франківців, які відкритими очима дивляться на суспільні проблеми таохочі допомогти.Сьогодні у нас немає території, приміщення, транспортних засобів, необхідного обладнання та матеріалів.

                    </div>
                </div>
                <div className={'Page-second-block'}>
                    <div className={'Page-second-block-header'}>Платіжна інформація:
                    </div>
                    <div className={'Page-second-block-square1'}>
                        <div className={'Page-second-block-info'}>
                            <div className={'Page-second-block-info-first-child'}>Отримувач</div>
                            <div>БО "Дім Сірка"</div>
                        </div>
                        <div className={'Page-second-block-info'}>
                            <div className={'Page-second-block-info-first-child'}>Рахунок в "Приватбанку"</div>
                            <div>2600 5060 8300 12</div>
                        </div>
                        <div className={'Page-second-block-info'}>
                            <div className={'Page-second-block-info-first-child'}>ЄДРПОУ</div>
                            <div>37952464</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default FifthPage;