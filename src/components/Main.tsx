import React from "react";
import { Header } from './Header';
import { Menu } from './Menu';
import { Home } from './Home';
import { Footer } from './Footer';
import { Test } from '../Test';
import { PersonalInfo } from './PersonalInfo';
import { ProfileInfoList } from './Profile';
import { EduAndCareer } from './EduAndCareer';
import { ContractInfoList } from './ContractInfo';
import { EducationList } from './EduHistory';
import StoreProvider from "../context";

export const Main = () => {
    return (
        <StoreProvider>
            <div className="w-full">
                <Menu />
                <ProfileInfoList />
                <PersonalInfo />
                <EduAndCareer />
                <ContractInfoList />
                <EducationList />
            </div>
        </StoreProvider>
    );
};
