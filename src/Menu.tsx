import React from "react";
import { faUserCircle, faUsers, faUserClock, faClock, faBookReader, faBookOpen, faUserPlus, faWonSign, faCalendarAlt, faFileAlt, faFolder, faPrint, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Menu = () => {
    return (
        <div className="w-full h-16 px-32 bg-black text-white flex items-center justify-between flex-wrap">
            <div className="flex w-3/4 items-center justify-around">
                <div className="p-3 border border-l-0 border-t-0 border-r-0  border-b-4 border-yellow-600">
                    <FontAwesomeIcon icon={faUserCircle} className="mr-2" />
                    <span>My 정보</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faUsers} className="mr-2" />
                    <span>우리 팀</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faUserClock} className="mr-2" />
                    <span>My 근태</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faClock} className="mr-2" />
                    <span>근태 관리</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faBookReader} className="mr-2" />
                    <span>My 교육</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faBookOpen} className="mr-2" />
                    <span>교육 관리</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                    <span>입사 등록</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faWonSign} className="mr-2" />
                    <span>매장 급여 현황</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                    <span>매장 연차 관리</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
                    <span>리포트 관리</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faFolder} className="mr-2" />
                    <span>문서함</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faPrint} className="mr-2" />
                    <span>증명서 신청</span>
                </div>
            </div>
            <div>
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                <span>로그아웃</span>
            </div>
        </div>
    );
};
