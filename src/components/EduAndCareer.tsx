import React from 'react';

export const EduAndCareer = () => {
    return (
        <div className="max-w-6xl  m-auto mt-20">
            <h1 className="text-4xl mb-10">학력 및 경력</h1>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                <div className="-mx-3 flex mb-6 items-center">
                    <div className="flex w-1/2 px-3 mb-6 md:mb-0 align-middle items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            최종학력
                        </label>
                        <input className="w-5/6 appearance-none  bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" type="text" />
                    </div>
                    <div className="flex w-1/2 h-12 px-3 items-center">
                        <label className="w-2/6 tracking-wide text-grey-darker text-m mb-2">
                            졸업여부
                        </label>
                        <div className="mr-10 mb-2">
                            <input className="mr-2" type="radio" checked />
                            <label><span>졸업</span></label>
                        </div>
                        <div className="mb-2">
                            <input className="mr-2" type="radio" />
                            <label><span>졸업예정</span></label>
                        </div>
                    </div>
                </div>
                <div className="-mx-3 flex mb-6 items-center">
                    <div className="flex w-1/2 px-3 mb-6 md:mb-0 align-middle items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            학교명
                        </label>
                        <input className="w-5/6 appearance-none  bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" type="text" />
                    </div>
                    <div className="flex w-1/2 px-3 items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            전공
                        </label>
                        <input className="w-5/6 appearance-none bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" type="text" />
                    </div>
                </div>
                <div className="-mx-3 flex mb-6 items-center">
                    <div className="flex w-1/2 px-3 mb-6 md:mb-0 align-middle items-center">
                        <label className="w-2/6 tracking-wide text-grey-darker text-m mb-2">
                            경력
                        </label>
                        <div className="mr-10 mb-2">
                            <input className="mr-2" type="radio" checked />
                            <label><span>유</span></label>
                        </div>
                        <div className="mb-2">
                            <input className="mr-2" type="radio" />
                            <label><span>무</span></label>
                        </div>
                    </div>
                    <div className="flex w-1/2 px-3 items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            회사명
                        </label>
                        <input className="w-5/6 appearance-none bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" type="text" />
                    </div>
                </div>
                <div className="-mx-3 flex mb-6 items-center">
                    <div className="flex w-1/2 px-3 mb-6 md:mb-0 align-middle items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            담당업무
                        </label>
                        <input className="w-5/6 appearance-none  bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" type="text" />
                    </div>
                    <div className="flex w-1/2 px-3 items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            기간
                        </label>
                        <input className="w-5/6 appearance-none bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" type="text" />
                    </div>
                </div>
            </div>
        </div>
    )
}