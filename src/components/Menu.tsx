import React from "react";
import {
    faUserCircle, faUsers, faUserClock, faClock, faBookReader,
    faBookOpen, faUserPlus, faWonSign, faCalendarAlt, faFileAlt,
    faFolder, faPrint, faSignOutAlt, faStore, faFile
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Menu = () => {
    return (
        <div className="w-full h-16 px-32 bg-black text-white flex items-center justify-between flex-wrap">
            <div className="flex w-3/4 items-center justify-around">
                <div className="dropdown inline-block relative">
                    <button type="button" className="inline-flex items-center p-5">
                        <FontAwesomeIcon icon={faUserCircle} className="mr-2" />
                        <span>My 메뉴</span>
                    </button>
                    <ul className="dropdown-menu absolute hidden bg-black p-2">
                        <li className="inline-flex h-12 items-center px-2">
                            <FontAwesomeIcon icon={faUserCircle} className="mr-2" />
                            <a className="hover:py-6 px-4 block whitespace-no-wrap" href="#">My 정보</a>
                        </li>
                        <li className="inline-flex h-12 items-center px-2">
                            <FontAwesomeIcon icon={faUserClock} className="mr-2" />
                            <a className="hover:py-6 px-4 block whitespace-no-wrap" href="#">My 근태</a>
                        </li>
                        <li className="inline-flex h-12 items-center px-2">
                            <FontAwesomeIcon icon={faBookReader} className="mr-2" />
                            <a className="hover:py-6 px-4 block whitespace-no-wrap" href="#">My 교육</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <FontAwesomeIcon icon={faUsers} className="mr-2" />
                    <span>우리 팀</span>
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


                <div className="dropdown inline-block relative">
                    <button type="button" className="inline-flex items-center p-5">
                        <FontAwesomeIcon icon={faStore} className="mr-2" />
                        <span>매장 관리</span>
                    </button>
                    <ul className="dropdown-menu absolute hidden bg-black p-2">
                        <li className="inline-flex h-12 items-center px-2">
                            <FontAwesomeIcon icon={faWonSign} className="mr-2" />
                            <a className="hover:py-2 px-4 block whitespace-no-wrap" href="#">매장 급여 현황</a>
                        </li>
                        <li className="inline-flex h-12 items-center px-2">
                            <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                            <a className="hover:py-2 px-4 block whitespace-no-wrap" href="#">매장 연차 관리</a>
                        </li>
                    </ul>
                </div>


                <div className="dropdown inline-block relative">
                    <button type="button" className="inline-flex items-center p-5">
                        <FontAwesomeIcon icon={faFile} className="mr-2" />
                        <span>문서 관리</span>
                    </button>
                    <ul className="dropdown-menu absolute hidden bg-black p-2">
                        <li className="inline-flex h-12 items-center px-2">
                            <FontAwesomeIcon icon={faFolder} className="mr-2" />
                            <a className="hover:py-2 px-4 block whitespace-no-wrap" href="#">문서함</a>
                        </li>
                        <li className="inline-flex h-12 items-center px-2">
                            <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
                            <a className="hover:py-2 px-4 block whitespace-no-wrap" href="#">리포트 관리</a>
                        </li>
                        <li className="inline-flex h-12 items-center px-2">
                            <FontAwesomeIcon icon={faPrint} className="mr-2" />
                            <a className="hover:py-2 px-4 block whitespace-no-wrap" href="#">증명서 신청</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                <span>로그아웃</span>
            </div>
        </div>
    );
};
