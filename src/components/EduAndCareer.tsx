import React from 'react';

export type EduAndCareer = {
    finalEducation: string;
    isGraduated: boolean;
    nameOfSchool: string;
    major: string;
    hasCareer: boolean;
    nameOfCompany: string;
    position: string;
    workPeriod: string;
}
export const EduAndCareer = () => {
    return (
        <div className="max-w-6xl m-auto mt-20">
            <h1 className="mb-10 text-4xl">학력 및 경력</h1>
            <div className="flex flex-col px-8 pt-6 pb-8 my-2 mb-4 bg-white rounded shadow-md">
                <div className="flex items-center mb-6 -mx-3">
                    <div className="flex items-center w-1/2 px-3 mb-6 align-middle md:mb-0">
                        <label className="w-1/6 mb-2 tracking-wide text-grey-darker text-m">
                            최종학력
                        </label>
                        <input className="w-5/6 px-4 py-3 mb-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-red" type="text" />
                    </div>
                    <div className="flex items-center w-1/2 h-12 px-3">
                        <label className="w-2/6 mb-2 tracking-wide text-grey-darker text-m">
                            졸업여부
                        </label>
                        <div className="mb-2 mr-10">
                            <input className="mr-2" type="radio" checked />
                            <label><span>졸업</span></label>
                        </div>
                        <div className="mb-2">
                            <input className="mr-2" type="radio" />
                            <label><span>졸업예정</span></label>
                        </div>
                    </div>
                </div>
                <div className="flex items-center mb-6 -mx-3">
                    <div className="flex items-center w-1/2 px-3 mb-6 align-middle md:mb-0">
                        <label className="w-1/6 mb-2 tracking-wide text-grey-darker text-m">
                            학교명
                        </label>
                        <input className="w-5/6 px-4 py-3 mb-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-red" type="text" />
                    </div>
                    <div className="flex items-center w-1/2 px-3">
                        <label className="w-1/6 mb-2 tracking-wide text-grey-darker text-m">
                            전공
                        </label>
                        <input className="w-5/6 px-4 py-3 mb-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-grey-lighter" type="text" />
                    </div>
                </div>
                <div className="flex items-center mb-6 -mx-3">
                    <div className="flex items-center w-1/2 px-3 mb-6 align-middle md:mb-0">
                        <label className="w-2/6 mb-2 tracking-wide text-grey-darker text-m">
                            경력
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
                            회사명
                        </label>
                        <input className="w-5/6 px-4 py-3 mb-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-grey-lighter" type="text" />
                    </div>
                </div>
                <div className="flex items-center mb-6 -mx-3">
                    <div className="flex items-center w-1/2 px-3 mb-6 align-middle md:mb-0">
                        <label className="w-1/6 mb-2 tracking-wide text-grey-darker text-m">
                            담당 업무
                        </label>
                        <input className="w-5/6 px-4 py-3 mb-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-red" type="text" />
                    </div>
                    <div className="flex items-center w-1/2 px-3">
                        <label className="w-1/6 mb-2 tracking-wide text-grey-darker text-m">
                            근무 기간
                        </label>
                        <input className="w-5/6 px-4 py-3 mb-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-grey-lighter" type="text" />
                    </div>
                </div>
            </div>
        </div>
    )
}