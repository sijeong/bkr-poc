import React from 'react';


const list = [{
    eduName: "성희롱 예방교육",
    date: new Date(),
    duration: 3,
    startHour: 9,
    startMinute: 30,
    endHour: 15,
    endMinute: 30,
    result: ""
},
{eduName: "직장내 괴롭힘 방지 교육",
    date: new Date(),
    duration: 3,
    startHour: 9,
    startMinute: 30,
    endHour: 15,
    endMinute: 30,
    result: ""}
]

export const EduHistory = () => {
    return (
        <div className="max-w-6xl  m-auto">
            <h1 className="text-2xl">교육 이력</h1>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                {
                    list.map(l=> {
                        return (
                            <div className="flex w-full">
                                <div className="w-2/12 flex items-center justify-center border border-gray-200 ">
                                    {l.eduName}
                                </div>

                                <div className="w-10/12 flex">
                                    <div className="flex flex-col w-1/2">
                                        <div className="text-center border">
                                            <div className="h-12 flex items-center justify-center bg-gray-200">
                                                <label>일정</label>
                                            </div>
                                            
                                            <div className="h-10 flex items-center justify-center">{l.date.toLocaleString('ko-KR')}</div>
                                        </div>
                                        <div className="text-center border">
                                            <div className="h-12 flex items-center justify-center bg-gray-200">
                                                <label>학습시간</label>
                                            </div>
                                            
                                            <div className="h-10 flex items-center justify-center">
                                                <span>{l.startHour}:{l.startMinute} ~ {l.endHour}:{l.endMinute}</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-col w-1/2">
                                        <div className="text-center border">
                                            <div className="h-12 flex items-center justify-center bg-gray-200">
                                                <label>시간</label>
                                            </div>
                                            <div className="h-10 flex items-center justify-center">{l.duration} 시간</div>
                                        </div>
                                        <div className="text-center border">
                                            <div className="h-12 flex items-center justify-center bg-gray-200">
                                                <label>결과</label>
                                            </div>
                                            
                                            <div className="h-10 flex items-center justify-center">{l.result}</div>
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