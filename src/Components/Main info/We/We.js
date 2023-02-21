import React, {useRef} from 'react';
import './We.css'
import Nastya from '../../../Content/nastya 1.png'
import Martysa from '../../../Content/marta 1.png'
import Vladyslave from '../../../Content/vladyslave 1.png'
import GayOrgiy from '../../../Content/gayorgiy 1.png'
function We() {
    return (
        <div className={'We-container'}>
           <div className={'We-hteg'}>Наша Команда</div>
           <ul className={'we-photos'}>
               <li>
                    <img src={Nastya}/>
                   <div>Галярник Анастасія</div>
               </li>
               <li>
                   <img src={Martysa}/>
                   <div>Мацевич Марта</div>
               </li>
               <li>
                   <img src={Vladyslave}/>
                   <div>Войчишин Владислав</div>
               </li>
               <li>
                   <img src={GayOrgiy}/>
                   <div>Гедз Григорій</div>
               </li>
           </ul>
        </div>
    );
}

export default We;