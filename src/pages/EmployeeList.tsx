import React from 'react';
import { Menu } from '../components/Menu';
import { profileInfo } from '../store';
import { useRootData } from '../hooks';
import { useObserver } from 'mobx-react-lite';
import { Footer } from '../components/Footer';
// import {RLDD} from 'react-list-drag-and-drop';

export const EmployeeList: React.FC<{ employeeInfo: Partial<profileInfo>[] }> = ({ employeeInfo }) => {
    return (
        <div className="w-full">
            <Menu />
            <div className="mt-32 ml-20 max-wd-md">
                <h1 className="w-full text-3xl font-semibold text-gray-700">직원 리스트</h1>
            </div>
            <div className="flex flex-col w-full mt-12 ml-20 overflow-x-scroll">
                <div className="flex items-start px-4 pb-8 ">
                    <div className="w-1/3 p-2 mr-6 bg-gray-500 rounded flex-no-shrink">
                        <div className="flex justify-between py-1">
                            <h3 className="text-lg font-semibold">강남 매장</h3>
                            <svg className="h-4 cursor-pointer fill-current text-grey-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" /></svg>
                        </div>
                        <div className="mt-2 text-sm">
                            {
                                employeeInfo.map((e) => {
                                    return (
                                        <div className="flex p-2 my-4 bg-white border-b rounded cursor-pointer border-grey hover:bg-grey-lighter">
                                            <div className="flex justify-center w-1/2">
                                                <img className="flex items-center w-40 rounded-full" src={require('../img/dummy.jpg')} />
                                            </div>
                                            <div className="w-1/2 p-8 text-xl text-center bg-gray-200">
                                                <div >{e.name}</div>
                                                <div>{e.smallArea}</div>
                                                <div>{e.position}</div>
                                            </div>
                                        </div>

                                    )
                                })
                            }
                            <p className="mt-3 text-grey-dark">Add a card...</p>
                        </div>
                    </div>


                    <div className="w-1/3 p-2 mr-3 bg-gray-300 rounded flex-no-shrink">
                        <div className="flex justify-between py-1">
                            <h3 className="text-lg font-semibold">서초 매장</h3>
                            <svg className="h-4 cursor-pointer fill-current text-grey-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" /></svg>
                        </div>
                        <div className="mt-2 text-sm">
                            {
                                employeeInfo.map((e) => {
                                    return (
                                        <div className="flex p-2 my-4 bg-white border-b rounded cursor-pointer border-grey hover:bg-grey-lighter">
                                            <div className="flex justify-center w-1/2">
                                                <img className="flex items-center w-40 rounded-full" src={require('../img/dummy.jpg')} />
                                            </div>
                                            <div className="w-1/2 p-8 text-xl text-center bg-gray-200">
                                                <div >{e.name}</div>
                                                <div>{e.smallArea}</div>
                                                <div>{e.position}</div>
                                            </div>
                                        </div>

                                    )
                                })
                            }
                            <p className="mt-3 text-grey-dark">Add a card...</p>
                        </div>
                    </div>


                    <div className="w-1/3 p-2 mr-3 bg-gray-500 rounded flex-no-shrink">
                        <div className="flex justify-between py-1">
                            <h3 className="text-lg font-semibold">청담 매장</h3>
                            <svg className="h-4 cursor-pointer fill-current text-grey-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" /></svg>
                        </div>
                        <div className="mt-2 text-sm">
                            {
                                employeeInfo.map((e) => {
                                    return (
                                        <div className="flex p-2 my-4 bg-white border-b rounded cursor-pointer border-grey hover:bg-grey-lighter">
                                            <div className="flex justify-center w-1/2">
                                                <img className="flex items-center w-40 rounded-full" src={require('../img/dummy.jpg')} />
                                            </div>
                                            <div className="w-1/2 p-8 text-xl text-center bg-gray-200">
                                                <div >{e.name}</div>
                                                <div>{e.smallArea}</div>
                                                <div>{e.position}</div>
                                            </div>
                                        </div>

                                    )
                                })
                            }
                            <p className="mt-3 text-grey-dark">Add a card...</p>
                        </div>
                    </div>


                    <div className="w-1/3 p-2 mr-3 bg-gray-300 rounded flex-no-shrink">
                        <div className="flex justify-between py-1">
                            <h3 className="text-lg font-semibold">방배 매장</h3>
                            <svg className="h-4 cursor-pointer fill-current text-grey-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" /></svg>
                        </div>
                        <div className="mt-2 text-sm">
                            {
                                employeeInfo.map((e) => {
                                    return (
                                        <div className="flex p-2 my-4 bg-white border-b rounded cursor-pointer border-grey hover:bg-grey-lighter">
                                            <div className="flex justify-center w-1/2">
                                                <img className="flex items-center w-40 rounded-full" src={require('../img/dummy.jpg')} />
                                            </div>
                                            <div className="w-1/2 p-8 text-xl text-center bg-gray-200">
                                                <div >{e.name}</div>
                                                <div>{e.smallArea}</div>
                                                <div>{e.position}</div>
                                            </div>
                                        </div>

                                    )
                                })
                            }
                            <p className="mt-3 text-grey-dark">Add a card...</p>
                        </div>
                    </div>
                    <div className="w-1/3 p-2 mr-3 bg-gray-300 rounded flex-no-shrink">
                        <div className="flex justify-between py-1">
                            <h3 className="text-lg font-semibold">매장 추가</h3>
                            <svg className="h-4 cursor-pointer fill-current text-grey-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" /></svg>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export const EmployeeInfoList = () => {
    const employeeInfo = useRootData(store => store.employeeInfoList);

    return useObserver(() => {
        return <EmployeeList employeeInfo={employeeInfo} />
    })

}