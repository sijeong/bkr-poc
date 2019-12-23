import React from 'react';

export const PersonalInfo = () => {
    return (
        <div className="max-w-6xl  m-auto">
            <h1 className="text-2xl">인적사항</h1>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                <div className="-mx-3 flex mb-6 items-center">
                    <div className="flex w-1/2 px-3 mb-6 md:mb-0 align-middle items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            이름
                        </label>
                        <input className="w-5/6 appearance-none  bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" type="text" placeholder="홍길동" />
                    </div>
                    <div className="flex w-1/2 px-3 items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            영문
                        </label>
                        <input className="w-5/6 appearance-none bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" type="text" placeholder="Hong gil-dong" />
                    </div>
                </div>
                <div className="-mx-3 flex mb-6 items-center">
                    <div className="flex w-1/2 px-3 mb-6 md:mb-0 align-middle items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            주민번호
                        </label>
                        <input className="w-5/6 appearance-none  bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" type="text" placeholder="123456-1234567" />
                    </div>
                    <div className="flex w-1/2 h-12 px-3 items-center">
                        <label className="w-2/6 tracking-wide text-grey-darker text-m mb-2">
                            미성년자여부
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
                </div>
                <div className="-mx-3 md:flex mb-6">
                    <div className="flex md:w-full px-3 items-center">
                        <label className="w-1/12 tracking-wide text-grey-darker text-m mb-2">
                            사번
                        </label>
                        <input className="w-11/12 appearance-none block bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" type="password" placeholder="1234567" />
                    </div>
                </div>
                <div className="-mx-3 flex mb-6 items-center">
                    <div className="flex w-1/2 px-3 mb-6 md:mb-0 align-middle items-center">
                        <label className="w-2/6 tracking-wide text-grey-darker text-m mb-2">
                            성별
                        </label>
                        <div className="mr-10 mb-2">
                            <input className="mr-2" type="radio" checked />
                            <label><span>남</span></label>
                        </div>
                        <div className="mb-2">
                            <input className="mr-2" type="radio" />
                            <label><span>여</span></label>
                        </div>
                    </div>
                    <div className="flex w-1/2 px-3 items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            나이(만)
                        </label>
                        <input className="w-5/6 appearance-none bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" type="text" />
                    </div>
                </div>
                <div className="-mx-3 flex mb-6 items-center">
                    <div className="flex w-1/2 px-3 mb-6 md:mb-0 align-middle items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            연락처
                        </label>
                        <input className="w-5/6 appearance-none  bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" type="text" placeholder="02-1234-1234" />
                    </div>
                    <div className="flex w-1/2 px-3 items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            이메일
                        </label>
                        <input className="w-5/6 appearance-none bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" type="text" placeholder="abc@gmail.com " />
                    </div>
                </div>
                <div className="-mx-3 md:flex mb-6">
                    <div className="flex md:w-full px-3 items-center">
                        <label className="w-1/12 tracking-wide text-grey-darker text-m mb-2">
                            주소
                        </label>
                        <div className="w-full">
                            <input className="w-full appearance-none block bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 border border-b-0" type="text" />
                            <input className="w-full appearance-none block bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" type="text" />
                        </div>

                    </div>
                </div>
                <div className="-mx-3 flex mb-6 items-center">
                    <div className="flex w-1/2 px-3 mb-6 md:mb-0 align-middle items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            비상연락
                        </label>
                        <input className="w-5/6 appearance-none  bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" type="text" placeholder="02-1234-1234" />
                    </div>
                    <div className="flex w-1/2 px-3 items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            관계
                        </label>
                        <input className="w-5/6 appearance-none bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" type="text" />
                    </div>
                </div>
                <div className="-mx-3 flex mb-6 items-center">
                    <div className="flex w-1/2 px-3 mb-6 md:mb-0 align-middle items-center">
                        <label className="w-2/6 tracking-wide text-grey-darker text-m mb-2">
                            장애우여부
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
                            복지카드번호
                        </label>
                        <input className="w-5/6 appearance-none bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" type="text" />
                    </div>
                </div>
                <div className="-mx-3 flex mb-6 items-center">
                    <div className="flex w-1/2 px-3 mb-6 md:mb-0 align-middle items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            장애등급
                        </label>
                        <select defaultValue="해당사항 없음" className="block h-12 w-full bg-white border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">
                            <option>해당사항 없음</option>
                            <option>중증</option>
                            <option>경증</option>
                        </select>
                    </div>
                    <div className="flex w-1/2 px-3 items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            장애유형
                        </label>
                        <div className="relative w-full">
                            <select defaultValue="해당사항 없음" className="block h-12 w-full bg-white border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">
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
                            {/* <div className="pointer-events-none absolute top-10 right-10 pin-y pin-r flex items-center px-2 text-grey-darker">
                                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}