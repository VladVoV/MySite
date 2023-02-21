import React from 'react';
import './Navbar.css';
import Vector from '../../Content/Vector.png';
import Polygon from '../../Content/Polygon 1.png'
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import ScrollToTop from "../Main info/ScrollToTop/ScrollToTop";

function Navbar() {
    const [isShown, setIsShown] = useState(false);

    useEffect(() =>{
        window.addEventListener('scroll', onScroll);
        return () =>
            window.removeEventListener('scroll', onScroll);

    }, [])
    const onScroll = () =>{
        setTimeout(() =>{
            setIsShown(false);
        }, 500);
    }
    const handleClick = event =>{
        setIsShown(current => !current);
    }
    return (
        <nav id={'navBar'}>
            <div className={'logo'}>
                <Link to={'/'} className={'project-menu-link'}>
                <div>volunteer.ua</div>
                <img src={Vector} alt={'logo'}/>
                </Link>
            </div>
            <div className={'container'}>
                <div>Головна</div>
                <div className={'projects'}>
                    <div onClick={handleClick}>Проєкти</div>
                    <img  src={Polygon} alt={'small triangle'}/>
                </div>
                <div className={'container-lastChild'}>Про нас</div>
            </div>
            <div className={'authorize'}>
                <Link to={"/registration"}>
                <div>Реєстрація</div>
                </Link>
                <Link to={"/login"}>
                <div>Вхід</div>
                </Link>
            </div>
            {isShown && (
                <div className={'project-menu'}>
                        <Link className={'project-menu-link'} to={'/firstPage'}>
                    <div>Плетіння маскувальних сіток</div>
                        </Link>
                        <Link className={'project-menu-link'} to={'/secondPage'}>
                    <div>Стати донором крові</div>
                        </Link>
                        <Link className={'project-menu-link'} to={'/thirdPage'}>
                    <div>Акція "Святий Миколай"</div>
                        </Link>
                        <Link className={'project-menu-link'} to={'/fourthPage'}>
                    <div>Волонтерство у БФ "Очі Миру"</div>
                        </Link>
                        <Link className={'project-menu-link'} to={'/fifthPage'}>
                    <div>Допомога притулку для тварин</div>
                        </Link>
                        <Link className={'project-menu-link'} to={'/sixthPage'}>
                    <div>Допомога українській армії</div>
                        </Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;