import React from "react";
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { SidebarLinkList } from '../components/Sidebar';
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
                        <SidebarLinkList />
                    </div>
                    <div className="w-auto ml-24">
                        <div id="profile"><ProfileInfoList /></div>
                        <div id="personalInfo"><PersonalInfo /></div>
                        <div id="eduAndCareer"><EduAndCareer /></div>
                        <div id="contractInfo"><ContractInfoList /></div>
                        <div id="eduHistory"><EducationList /></div>
                    </div>

                </div>
                <Footer />
            </div>
        </StoreProvider>
    );
};
