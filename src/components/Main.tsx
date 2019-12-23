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
import { EduHistory, EducationList } from './EduHistory';
import StoreProvider from "../context";

export const Main = () => {
    return (
        <StoreProvider>
            <div className="w-full">
                {/* <DivTest /> */}
                {/* <Header /> */}
                <Menu />
                <Profile />
                <PersonalInfo />
                <EduAndCareer />
                <ContractInfo />
                <EducationList />
                {/* <EduHistory /> */}

                {/* <Test /> */}

                {/* <Home />
            <Footer /> */}
            </div>
        </StoreProvider>
    );
};
