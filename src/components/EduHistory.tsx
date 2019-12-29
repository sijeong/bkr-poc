import React from 'react';
import { storeContext } from '../context';
import { useObserver } from 'mobx-react-lite';
import { Education } from '../store'
import { useRootData } from '../hooks';

export const EduHistory: React.FC<{ educations: Education[] }> = ({ educations }) => {
    return (
        <div className="max-w-6xl m-auto mt-20">
            <h1 className="text-4xl mb-10">교육 이력</h1>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                {
                    educations.map(e => {
                        return (
                            <div className="flex w-full">
                                <div className="w-2/12 flex items-center justify-center border border-gray-200 ">
                                    {e.name}
                                </div>

                                <div className="w-10/12 flex">
                                    <div className="flex flex-col w-1/2">
                                        <div className="text-center border">
                                            <div className="h-12 flex items-center justify-center bg-gray-200">
                                                <label>일정</label>
                                            </div>

                                            <div className="h-10 flex items-center justify-center">{e.startDate.toLocaleString('ko-KR')}</div>
                                        </div>
                                        <div className="text-center border">
                                            <div className="h-12 flex items-center justify-center bg-gray-200">
                                                <label>학습시간</label>
                                            </div>

                                            <div className="h-10 flex items-center justify-center">
                                                <span>{e.startDate.toLocaleTimeString('ko-KR')} ~ {e.endDate.toLocaleTimeString('ko-KR')}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col w-1/2">
                                        <div className="text-center border">
                                            <div className="h-12 flex items-center justify-center bg-gray-200">
                                                <label>시간</label>
                                            </div>
                                            <div className="h-10 flex items-center justify-center">{(e.endDate.getTime() - e.startDate.getTime()) / 3600000} 시간</div>
                                        </div>
                                        <div className="text-center border">
                                            <div className="h-12 flex items-center justify-center bg-gray-200">
                                                <label>결과</label>
                                            </div>

                                            <div className="h-10 flex items-center justify-center">{e.result}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export const EducationList = () => {
    const educations = useRootData(store => store.allEducations)
    return useObserver(() => {
        return <EduHistory educations={educations} />
    })
}