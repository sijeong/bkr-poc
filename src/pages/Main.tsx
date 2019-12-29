import React from "react";
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { Home } from '../components/Home';
import { Footer } from '../components/Footer';
// import { Test } from '../Test';
// import { PersonalInfo } from '../components/PersonalInfo';
// import { ProfileInfoList } from '../components/Profile';
// import { EduAndCareer } from '../components/EduAndCareer';
// import { ContractInfoList } from '../components/ContractInfo';
// import { EducationList } from '../components/EduHistory';


export const Main = () => {
    return (
        <div className="w-full">
            <Menu />
            <div>
                <div className="flex justify-center">
                    <img className="w-3/4 h-auto" src={require('../img/burgerKingStore.jpg')} />
                </div>
            </div>
        </div>
    );
};
