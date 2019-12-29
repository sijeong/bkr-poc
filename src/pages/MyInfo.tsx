import React from "react";
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';
import { PersonalInfo } from '../components/PersonalInfo';
import { ProfileInfoList } from '../components/Profile';
import { EduAndCareer } from '../components/EduAndCareer';
import { ContractInfoList } from '../components/ContractInfo';
import { EducationList } from '../components/EduHistory';
import StoreProvider from "../context";

export const MyInfo = () => {
    return (
        <StoreProvider>
            <div className="w-full">
                <Menu />
                <div className="flex w-full mt-40">
                    <div className="flex justify-end w-1/4">
                        <Sidebar />
                    </div>
                    <div className="w-auto ml-24">
                        <ProfileInfoList />
                        <PersonalInfo />
                        <EduAndCareer />
                        <ContractInfoList />
                        <EducationList />
                    </div>

                </div>

            </div>
        </StoreProvider>
    );
};
