import React from 'react';

type profileInfo = {
    wideArea: string;
    smallArea: string;
    store: string;
    position: string;
    joinDate: Date;
    resignationDate: Date;
}

export const Profile = () => {
    return (
        <div className="px-32 py-20 flex justify-center">
            <div className="flex items-center bg-gray-200">
                <img className="rounded-full ml-5 w-32 h-32" src={require('../img/dummy.jpg')} />
                <div className="ml-8 mr-8 bg-orange-400 px-8 py-4 text-white text-base">
                    <span>Crew 김희선</span>
                </div>
            </div>

            <div className="w-1/3 ml-6">
                <div className="-mx-3 flex items-center">
                    <div className="flex w-1/2 px-3 mb-6 md:mb-0 align-middle items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            광역
                        </label>
                        <input className="w-5/6 appearance-none  bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" type="text" />
                    </div>
                    <div className="flex w-1/2 px-3 items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            지역
                        </label>
                        <input className="w-5/6 appearance-none bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" type="text" />
                    </div>
                </div>
                <div className="-mx-3 flex items-center">
                    <div className="flex w-1/2 px-3 mb-6 md:mb-0 align-middle items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            매장
                        </label>
                        <input className="w-5/6 appearance-none  bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" type="text" />
                    </div>
                    <div className="flex w-1/2 px-3 items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            직책
                        </label>
                        <input className="w-5/6 appearance-none bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" type="text" />
                    </div>
                </div>
                <div className="-mx-3 flex items-center">
                    <div className="flex w-1/2 px-3 mb-6 md:mb-0 align-middle items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            입사일
                        </label>
                        <input className="w-5/6 appearance-none  bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" type="text" />
                    </div>
                    <div className="flex w-1/2 px-3 items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            퇴사일
                        </label>
                        <input className="w-5/6 appearance-none bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" type="text" />
                    </div>
                </div>

            </div>

        </div>
    )
}