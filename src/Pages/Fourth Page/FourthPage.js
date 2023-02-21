import React from 'react';
import '../Pages.css'
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import FourthPhoto from '../../Content/Four page photo.png'
import phone from '../../Content/telephone.png'
import house from '../../Content/house.png'
import point from '../../Content/point.png'
function FourthPage() {
    return (
        <div>
            <Navbar/>
            <div className={'Page-container'}>
                <div className={'Page-first-block'}>
                    <div className={'Page-first-block-header'}>Волонтерство у БФ "Очі Миру"</div>
                    <img alt={'camo-net'} src={FourthPhoto}/>
                    <div className={'Page-first-block-text'}>Благодійний фонд «Очі миру» надає вчасну допомогу дітям, що опинились в складних життєвих обставинах, зараз ми зосередились на психосоціальній підтримці дітей, які постраждали від війни. Спільними зусиллями ми прокладаємо шлях до майбутнього тим, хто цього потребує. Разом з нашою командою працювати над спільною місією, від волонтерства на подіях чи інформаційної підтримки до монтажу відео для фандрейзингу.
                        Що актуально: інформаційна підтримка, волонтерство в дитячих таборах, проектна фото/відео зйомка, комунікація і піар, супровід проектів фонду, допомога з соц.мережами, копірайтинг, вебдизайн.
                    </div>
                </div>
                <div className={'Page-second-block'}>
                    <div className={'Page-second-block-header'}>Контакти</div>
                    <div className={'Page-second-block-square'}>
                        <div>
                            <img alt={'phone'} src={phone}/>
                            <div>0630631133

                            </div>
                        </div>
                        <div>
                            <img alt={'house'} src={house}/>
                            <div>Івано-Франківськ
                            </div>
                        </div>
                        <div>
                            <img alt={'point'} src={point}/>
                            <div>вул. Січових Стрільців, 23
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default FourthPage;