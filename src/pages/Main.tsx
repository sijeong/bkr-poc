import React from "react";
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import { Home } from '../components/Home';
import { Footer } from '../components/Footer';
import { Test } from '../components/test'

export const Main = () => {
    return (
        <div className="w-full">
            <Menu />
            <Test />
            <div>
                <div className="flex justify-center">
                    <img className="w-3/4 h-auto" src={require('../img/burgerKingStore.jpg')} />
                </div>

                <div className="flex items-center justify-around w-3/4 m-auto my-56">
                    <img src={require('../img/burger.png')}></img>
                    <div className="block">
                        <p className="w-auto ml-20 text-3xl font-semibold">
                            전 세계적으로 사랑 받는 WHOPPER는 불에 직접 구운 100% 순쇠고기 패티 위에
                        </p>
                        <p className="w-auto ml-20 text-3xl font-semibold">
                            신선한 토마토, 양상추, 양파, 마요네즈, 케첩, 상큼한 피클을 올린 버거킹의 대표 제품입니다.
                        </p>
                    </div>
                </div>

                <div className="w-full py-24 my-56 bg-red-100">
                    <div className="flex items-center justify-around w-3/4 m-auto ">
                        <div className="block">
                            <p className="w-auto mr-20 text-4xl font-bold text-orange-900">
                                Trust in Taste란?
                        </p>
                            <p className="w-auto mr-20 text-3xl font-semibold">
                                전세계 버거킹의 고객들이 우리 제품에 만족감을 느낄 수 있도록 하는 활동입니다.
                        </p>
                            <p className="w-auto mr-20 text-3xl font-semibold">
                                버거킹 코리아는 전세계 버거킹의 가치인 Trust in Taste를 시행하며최고의 제품과 서비스를 제공하기 위해 노력하고 있습니다.
                        </p>
                        </div>
                        <img className="" src={require('../img/fries.png')}></img>
                    </div>
                </div>

                <div className="flex items-center justify-around w-3/4 m-auto my-56">
                    <img src={require('../img/salad.png')}></img>
                    <div className="block">
                        <p className="w-auto ml-20 text-3xl font-semibold">
                            전 세계적으로 사랑 받는 WHOPPER는 불에 직접 구운 100% 순쇠고기 패티 위에
                        </p>
                        <p className="w-auto ml-20 text-3xl font-semibold">
                            신선한 토마토, 양상추, 양파, 마요네즈, 케첩, 상큼한 피클을 올린 버거킹의 대표 제품입니다.
                        </p>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};
