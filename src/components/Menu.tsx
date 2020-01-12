import React from "react";
import {
    faUserCircle, faUsers, faUserClock, faClock, faBookReader,
    faBookOpen, faUserPlus, faWonSign, faCalendarAlt, faFileAlt,
    faFolder, faPrint, faSignOutAlt, faStore, faFile, faSignInAlt
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Menu = () => {
    return (
        <div className="fixed top-0 flex flex-wrap items-center justify-between w-full h-20 px-32 text-gray-800 bg-white">
            <div className="flex items-center justify-around w-3/4">
                <a href="/">
                    <img className="flex items-center w-16 rounded-full" src={require('../img/burgerKing.png')} alt="" />
                </a>

                <div className="relative inline-block dropdown">
                    <button type="button" className="inline-flex items-center p-5">
                        <FontAwesomeIcon icon={faUserCircle} className="mr-2" />
                        <span>My 메뉴</span>
                    </button>
                    <ul className="absolute hidden p-2 bg-white dropdown-menu">
                        <li className="inline-flex items-center h-12 px-2">
                            <FontAwesomeIcon icon={faUserCircle} className="mr-2" />
                            <a className="block px-4 whitespace-no-wrap hover:py-6" href="/myinfo">My 정보</a>
                        </li>
                        <li className="inline-flex items-center h-12 px-2">
                            <FontAwesomeIcon icon={faUserClock} className="mr-2" />
                            <a className="block px-4 whitespace-no-wrap hover:py-6" href="#">My 근태</a>
                        </li>
                        <li className="inline-flex items-center h-12 px-2">
                            <FontAwesomeIcon icon={faBookReader} className="mr-2" />
                            <a className="block px-4 whitespace-no-wrap hover:py-6" href="#">My 교육</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <FontAwesomeIcon icon={faUsers} className="mr-2" />
                    <span>
                        <a href="/employeelist">우리 팀</a>
                    </span>
                </div>



                <div>
                    <FontAwesomeIcon icon={faClock} className="mr-2" />
                    <span>근태 관리</span>
                </div>



                <div>
                    <FontAwesomeIcon icon={faBookOpen} className="mr-2" />
                    <span>교육 관리</span>
                </div>

                <div>
                    <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                    <span>입사 등록</span>
                </div>


                <div className="relative inline-block dropdown">
                    <button type="button" className="inline-flex items-center p-5">
                        <FontAwesomeIcon icon={faStore} className="mr-2" />
                        <span>매장 관리</span>
                    </button>
                    <ul className="absolute hidden p-2 bg-white dropdown-menu">
                        <li className="inline-flex items-center h-12 px-2">
                            <FontAwesomeIcon icon={faWonSign} className="mr-2" />
                            <a className="block px-4 whitespace-no-wrap hover:py-2" href="#">매장 급여 현황</a>
                        </li>
                        <li className="inline-flex items-center h-12 px-2">
                            <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                            <a className="block px-4 whitespace-no-wrap hover:py-2" href="#">매장 연차 관리</a>
                        </li>
                    </ul>
                </div>


                <div className="relative inline-block dropdown">
                    <button type="button" className="inline-flex items-center p-5">
                        <FontAwesomeIcon icon={faFile} className="mr-2" />
                        <span>문서 관리</span>
                    </button>
                    <ul className="absolute hidden p-2 bg-white dropdown-menu">
                        <li className="inline-flex items-center h-12 px-2">
                            <FontAwesomeIcon icon={faFolder} className="mr-2" />
                            <a className="block px-4 whitespace-no-wrap hover:py-2" href="#">문서함</a>
                        </li>
                        <li className="inline-flex items-center h-12 px-2">
                            <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
                            <a className="block px-4 whitespace-no-wrap hover:py-2" href="#">리포트 관리</a>
                        </li>
                        <li className="inline-flex items-center h-12 px-2">
                            <FontAwesomeIcon icon={faPrint} className="mr-2" />
                            <a className="block px-4 whitespace-no-wrap hover:py-2" href="#">증명서 신청</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                <span>
                    <a href="/login">로그인</a>
                </span>
            </div>
            {/* <div>
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                <span>로그아웃</span>
            </div> */}
        </div>
    );
};
