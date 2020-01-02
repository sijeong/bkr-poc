import React from "react";

export const Footer = () => {
    return (
        <div className="flex items-center justify-center h-40 bg-gray-900">
            <img className="w-24 ml-32 rounded-full" src={require('../img/burgerKing.png')}></img>
            <div className="flex justify-around w-3/4">
                <div className="block ml-12 text-gray-100 border border-r-2">
                    <p>서울 종로구 삼봉로 71 G 타워 2층 주식회사 비케이알 | TEL 02-6331-8282 FAX 02-3775-4326</p>
                    <p>사업자 등록번호 101-86-76277 | (주)BKR 대표이사 문영주</p>
                    <p>Copyright 2019 BKR Co., Ltd. All right Reserved</p>
                </div>
                <div className="block ml-12 text-gray-100">
                    <p>서울 종로구 삼봉로 71 G 타워 2층 주식회사 비케이알 | TEL 02-6331-8282 FAX 02-3775-4326</p>
                    <p>사업자 등록번호 101-86-76277 | (주)BKR 대표이사 문영주</p>
                    <p>Copyright 2019 BKR Co., Ltd. All right Reserved</p>
                </div>
                <div className="block ml-12 text-gray-100">
                    <p>서울 종로구 삼봉로 71 G 타워 2층 주식회사 비케이알 | TEL 02-6331-8282 FAX 02-3775-4326</p>
                    <p>사업자 등록번호 101-86-76277 | (주)BKR 대표이사 문영주</p>
                    <p>Copyright 2019 BKR Co., Ltd. All right Reserved</p>
                </div>
            </div>




        </div>
    );
};
