import React from "react";
import { Header } from './Header';
import { Menu } from './Menu';
import { Home } from './Home';
import { Footer } from './Footer';
import { Test } from './Test'
import { Test2 } from './Test2';
import { DivTest } from './DivTest'
export const Main = () => {
    return (
        <div className="w-full">
            {/* <DivTest /> */}
            {/* <Header /> */}
            <Menu />
            <Test2 />
            
            {/* <Test /> */}
            
            {/* <Home />
            <Footer /> */}
        </div>
    );
};