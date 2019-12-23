import React from "react";
import { Header } from './Header';
import { Menu } from './Menu';
import { Home } from './Home';
import { Footer } from './Footer';
import { Test } from '../Test';
import { PersonalInfo } from './PersonalInfo';
import { DivTest } from '../DivTest';
import { Profile } from './Profile';
import { EduAndCareer } from './EduAndCareer';
import { ContractInfo } from './ContractInfo';
import { EduHistory } from './EduHistory';

export const Main = () => {
    return (
        <div className="w-full">
            {/* <DivTest /> */}
            {/* <Header /> */}
            <Menu />
            <Profile />
            <PersonalInfo />
            <EduAndCareer />
            <ContractInfo />
            <EduHistory />

            {/* <Test /> */}

            {/* <Home />
            <Footer /> */}
        </div>
    );
};
