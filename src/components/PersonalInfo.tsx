import React from 'react';

enum isMinor {
    YES = "해당",
    NO = "해당사항없음"
}

enum gender {
    FEMALE = "여",
    MALE = "남"
}

enum isDisabled {
    YES = "해당",
    NO = "해당사항없음"
}

enum disabilityRating {
    DOESNOTAPPLY = "해당사항없음",
    SLIGHT = "경증",
    SERIOUS = "중증"
}

enum typesOfDisorders {
    DOESNOTAPPLY = "해당사항없음",
    PHYSICALDISABILITY = "지체장애",
    BRAINLESIONS = "뇌병변장애",
    VISUALDISTURBANCE = "시각장애",
    HEARINGIMPAIRMENT = "청각장애",
    LANGUAGEDISTURBANCE = "언어장애",
    MENTALWEAKNESS = "지적장애",
    MENTALDISORDER = "정신장애",
    AUTISM = "자폐성장애",
    RENALDISORDER = "신장장애",
    HEARTDEFECT = "심장장애",
    RESPIRATORYDISORDER = "호흡기장애",
    HEPATOPATHY = "간장애",
    TRADIVEDYSKINESIA = "안면장애",

}
export type personalInfo = {
    nameKor: string;
    nameEng: string;
    IDNumber: {
        DOB: number;
        certificationNumber: number;
    };
    minor: isMinor;
    employeeNumber: number;
    gender: gender;
    age: number;
    phoneNumber: number;
    email: string;
    address: string;
    emergencyContact: number;
    relation: string;
    disabled: isDisabled;
    welfareCardNumber: number;
    disabilityRating: disabilityRating;
    typesOfDisorders: typesOfDisorders;



}
export const PersonalInfo = () => {
    return (
        <div className="max-w-6xl m-auto mt-20">
            <h1 className="text-4xl mb-10">인적사항</h1>
            <div className="flex flex-col px-8 pt-6 pb-8 my-2 mb-4 bg-white rounded shadow-md">
                <div className="flex items-center mb-6 -mx-3">
                    <div className="flex items-center w-1/2 px-3 mb-6 align-middle md:mb-0">
                        <label className="w-1/6 mb-2 tracking-wide text-grey-darker text-m">
                            이름
                        </label>
                        <input className="w-5/6 px-4 py-3 mb-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-red" type="text" placeholder="홍길동" />
                    </div>
                    <div className="flex items-center w-1/2 px-3">
                        <label className="w-1/6 mb-2 tracking-wide text-grey-darker text-m">
                            영문
                        </label>
                        <input className="w-5/6 px-4 py-3 mb-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-grey-lighter" type="text" placeholder="Hong gil-dong" />
                    </div>
                </div>
                <div className="flex items-center mb-6 -mx-3">
                    <div className="flex items-center w-1/2 px-3 mb-6 align-middle md:mb-0">
                        <label className="w-1/6 mb-2 tracking-wide text-grey-darker text-m">
                            주민번호
                        </label>
                        <input className="w-5/6 px-4 py-3 mb-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-red" type="text" placeholder="123456-1234567" />
                    </div>
                    <div className="flex items-center w-1/2 h-12 px-3">
                        <label className="w-2/6 mb-2 tracking-wide text-grey-darker text-m">
                            미성년자여부
                        </label>
                        <div className="mb-2 mr-10">
                            <input className="mr-2" type="radio" checked />
                            <label><span>유</span></label>
                        </div>
                        <div className="mb-2">
                            <input className="mr-2" type="radio" />
                            <label><span>무</span></label>
                        </div>
                    </div>
                </div>
                <div className="mb-6 -mx-3 md:flex">
                    <div className="flex items-center px-3 md:w-full">
                        <label className="w-1/12 mb-2 tracking-wide text-grey-darker text-m">
                            사번
                        </label>
                        <input className="block w-11/12 px-4 py-3 mb-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-grey-lighter" type="password" placeholder="1234567" />
                    </div>
                </div>
                <div className="flex items-center mb-6 -mx-3">
                    <div className="flex items-center w-1/2 px-3 mb-6 align-middle md:mb-0">
                        <label className="w-2/6 mb-2 tracking-wide text-grey-darker text-m">
                            성별
                        </label>
                        <div className="mb-2 mr-10">
                            <input className="mr-2" type="radio" checked />
                            <label><span>남</span></label>
                        </div>
                        <div className="mb-2">
                            <input className="mr-2" type="radio" />
                            <label><span>여</span></label>
                        </div>
                    </div>
                    <div className="flex items-center w-1/2 px-3">
                        <label className="w-1/6 mb-2 tracking-wide text-grey-darker text-m">
                            나이(만)
                        </label>
                        <input className="w-5/6 px-4 py-3 mb-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-grey-lighter" type="text" />
                    </div>
                </div>
                <div className="flex items-center mb-6 -mx-3">
                    <div className="flex items-center w-1/2 px-3 mb-6 align-middle md:mb-0">
                        <label className="w-1/6 mb-2 tracking-wide text-grey-darker text-m">
                            연락처
                        </label>
                        <input className="w-5/6 px-4 py-3 mb-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-red" type="text" placeholder="02-1234-1234" />
                    </div>
                    <div className="flex items-center w-1/2 px-3">
                        <label className="w-1/6 mb-2 tracking-wide text-grey-darker text-m">
                            이메일
                        </label>
                        <input className="w-5/6 px-4 py-3 mb-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-grey-lighter" type="text" placeholder="abc@gmail.com " />
                    </div>
                </div>
                <div className="mb-6 -mx-3 md:flex">
                    <div className="flex items-center px-3 md:w-full">
                        <label className="w-1/12 mb-2 tracking-wide text-grey-darker text-m">
                            주소
                        </label>
                        <div className="w-full">
                            <input className="block w-full px-4 py-3 border border-b-0 rounded appearance-none bg-grey-lighter text-grey-darker border-grey-lighter" type="text" />
                            <input className="block w-full px-4 py-3 mb-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-grey-lighter" type="text" />
                        </div>

                    </div>
                </div>
                <div className="flex items-center mb-6 -mx-3">
                    <div className="flex items-center w-1/2 px-3 mb-6 align-middle md:mb-0">
                        <label className="w-1/6 mb-2 tracking-wide text-grey-darker text-m">
                            비상연락
                        </label>
                        <input className="w-5/6 px-4 py-3 mb-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-red" type="text" placeholder="02-1234-1234" />
                    </div>
                    <div className="flex items-center w-1/2 px-3">
                        <label className="w-1/6 mb-2 tracking-wide text-grey-darker text-m">
                            관계
                        </label>
                        <input className="w-5/6 px-4 py-3 mb-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-grey-lighter" type="text" />
                    </div>
                </div>
                <div className="flex items-center mb-6 -mx-3">
                    <div className="flex items-center w-1/2 px-3 mb-6 align-middle md:mb-0">
                        <label className="w-2/6 mb-2 tracking-wide text-grey-darker text-m">
                            장애우여부
                        </label>
                        <div className="mb-2 mr-10">
                            <input className="mr-2" type="radio" checked />
                            <label><span>유</span></label>
                        </div>
                        <div className="mb-2">
                            <input className="mr-2" type="radio" />
                            <label><span>무</span></label>
                        </div>
                    </div>
                    <div className="flex items-center w-1/2 px-3">
                        <label className="w-1/6 mb-2 tracking-wide text-grey-darker text-m">
                            복지카드번호
                        </label>
                        <input className="w-5/6 px-4 py-3 mb-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-grey-lighter" type="text" />
                    </div>
                </div>
                <div className="flex items-center mb-6 -mx-3">
                    <div className="flex items-center w-1/2 px-3 mb-6 align-middle md:mb-0">
                        <label className="w-1/6 mb-2 tracking-wide text-grey-darker text-m">
                            장애등급
                        </label>
                        <select defaultValue="해당사항 없음" className="block w-full h-12 px-4 py-3 pr-8 bg-white border rounded border-grey-lighter text-grey-darker" id="grid-state">
                            <option>해당사항 없음</option>
                            <option>중증</option>
                            <option>경증</option>
                        </select>
                    </div>
                    <div className="flex items-center w-1/2 px-3">
                        <label className="w-1/6 mb-2 tracking-wide text-grey-darker text-m">
                            장애유형
                        </label>
                        <div className="relative w-full">
                            <select defaultValue="해당사항 없음" className="block w-full h-12 px-4 py-3 pr-8 bg-white border rounded border-grey-lighter text-grey-darker" id="grid-state">
                                <option>해당사항 없음</option>
                                <option>지체장애</option>
                                <option>뇌병변장애</option>
                                <option>시각장애</option>
                                <option>청각장애</option>
                                <option>언어장애</option>
                                <option>지적장애</option>
                                <option>정신장애</option>
                                <option>자폐성장애</option>
                                <option>신장장애</option>
                                <option>심장장애</option>
                                <option>호흡기장애</option>
                                <option>간장애</option>
                                <option>안면장애</option>
                                <option>장루•요루장애</option>
                                <option>뇌전증장애</option>
                            </select>
                            {/* <div className="absolute flex items-center px-2 pointer-events-none top-10 right-10 pin-y pin-r text-grey-darker">
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}