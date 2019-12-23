
import React from 'react';
enum WeekDay {
    MON = '월',
    TUE = '화',
    WED = '수',
    THU = '목',
    FRI = '금',
    SAT = '토',
    SUN = '일',
}

const ContractInfoData = {
    startDate: new Date(),
    endDate: new Date(),
    duration: 6,
    contractedWorkHours: 8,
    workTime: {
        startHour: "9",
        startMinute: "30",
        endHour: "18",
        endMinute: "00",
    },
    workDay: [WeekDay.MON, WeekDay.TUE, WeekDay.FRI],
    legalHoliday: WeekDay.SAT,
    HourlyPay: 8350,
    RiderPay: 8350,
    healthCertificate: {
        number: 1234567,
        issueDate: new Date(),
        updateDate: new Date()
    },
    license: {
        number: 123456,
        issueDate: new Date(),
        updateDate: new Date()
    },
    accountHolder: "김희선",
    bank: "신한은행",
    accountNumber: "110-123-1234"
}

export const ContractInfo = () => {
    
    return (
        <div className="max-w-6xl  m-auto">
            <h1 className="text-2xl">계약정보</h1>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                <div className="-mx-3 flex mb-6 items-center">
                    <div className="flex w-1/2 px-3 mb-6 md:mb-0 align-middle items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            시작일
                        </label>
                        <input className="w-5/6 appearance-none  bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" type="text" value={ContractInfoData.startDate.toLocaleString('ko-KR')} />
                    </div>
                    <div className="flex w-1/2 px-3 items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            종료일
                        </label>
                        <input className="w-5/6 appearance-none bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" type="text" value={ContractInfoData.endDate.toLocaleString('ko-KR')} />
                    </div>
                </div>
                <div className="-mx-3 md:flex mb-6">
                    <div className="flex md:w-full px-3 items-center">
                        <label className="w-1/12 tracking-wide text-grey-darker text-m mb-2">
                            계약기간
                        </label>
                        <input className="w-11/12 appearance-none block bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" value={ContractInfoData.duration}/>
                    </div>
                </div>
                <div className="-mx-3 flex mb-6 items-center">
                    <div className="flex w-1/2 px-3 mb-6 md:mb-0 align-middle items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            소정근로시간
                        </label>
                        <input className="block h-12 w-5/6 bg-white border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" value={ContractInfoData.contractedWorkHours}/>
                    </div>
                    <div className="flex w-1/2 h-12 px-3 items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            근무시간
                        </label>
                        <div className="w-5/6 h-12 appearance-none  bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3">
                            <span>{ContractInfoData.workTime.startHour}:{ContractInfoData.workTime.startMinute}</span> ~ 
                            <span>{ContractInfoData.workTime.endHour}:{ContractInfoData.workTime.endMinute}</span>
                        </div>
                    </div>
                </div>
                <div className="-mx-3 flex mb-6 items-center">
                    <div className="flex w-1/2 px-3 mb-6 md:mb-0 align-middle items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            근무일
                        </label>
                        <div className="w-5/6 appearance-none  bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3">
                            {
                                ContractInfoData.workDay.map(d => {
                                    return(
                                    <span>{d}</span>
                                    )
                                })
                            }
                        </div>
                        
                    </div>
                    <div className="flex w-1/2 px-3 items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            법정휴무일
                        </label>
                        <div className="w-5/6 appearance-none  bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3">
                            <span>{ContractInfoData.legalHoliday}</span>
                        </div>
                    </div>
                </div>
                <div className="-mx-3 flex mb-6 items-center">
                    <div className="flex w-1/2 px-3 mb-6 md:mb-0 align-middle items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            시급
                        </label>
                        <div className="w-5/6 appearance-none  bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3">
                            <span>{ContractInfoData.HourlyPay} 원</span>
                        </div>
                    </div>
                    <div className="flex w-1/2 px-3 items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            라이더 수당
                        </label>
                        <div className="w-5/6 appearance-none  bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3">
                            <span>{ContractInfoData.HourlyPay} 원</span>
                        </div>
                    </div>
                </div>
                <div className="-mx-3 md:flex mb-6">
                    <div className="flex md:w-full px-3 items-center">
                        <label className="w-1/12 tracking-wide text-grey-darker text-m mb-2">
                            보건증번호
                        </label>
                        <div className="w-5/6 appearance-none  bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3">
                            <span>{ContractInfoData.healthCertificate.number}</span>
                        </div>
                    </div>
                </div>
                <div className="-mx-3 flex mb-6 items-center">
                    <div className="flex w-1/2 px-3 mb-6 md:mb-0 align-middle items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            발급일
                        </label>
                        <div className="w-5/6 appearance-none  bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3">
                            <span>{ContractInfoData.healthCertificate.issueDate.toLocaleString('ko-KR')}</span>
                        </div>
                    </div>
                    <div className="flex w-1/2 px-3 items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            갱신일
                        </label>
                        <div className="w-5/6 appearance-none  bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3">
                            <span>{ContractInfoData.healthCertificate.updateDate.toLocaleString('ko-KR')}</span>
                        </div>
                    </div>
                </div>
                <div className="-mx-3 md:flex mb-6">
                    <div className="flex md:w-full px-3 items-center">
                        <label className="w-1/12 tracking-wide text-grey-darker text-m mb-2">
                            보유면허
                        </label>
                        <div className="w-5/6 appearance-none  bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3">
                            <span>{ContractInfoData.license.number}</span>
                        </div>
                    </div>
                </div>
                <div className="-mx-3 flex mb-6 items-center">
                    <div className="flex w-1/2 px-3 mb-6 md:mb-0 align-middle items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            발급일
                        </label>
                        <div className="w-5/6 appearance-none  bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3">
                            <span>{ContractInfoData.license.issueDate.toLocaleString('ko-KR')}</span>
                        </div>
                    </div>
                    <div className="flex w-1/2 px-3 items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            갱신일
                        </label>
                        <div className="w-5/6 appearance-none  bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3">
                            <span>{ContractInfoData.license.updateDate.toLocaleString('ko-KR')}</span>
                        </div>
                    </div>
                </div>

                <div className="-mx-3 flex mb-6 items-center">
                    <div className="flex w-1/2 px-3 mb-6 md:mb-0 align-middle items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            예금주
                        </label>
                        <input className="w-5/6 appearance-none  bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" type="text" value={ContractInfoData.accountHolder}/>
                    </div>
                    <div className="flex w-1/2 px-3 items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            은행명
                        </label>
                        <input className="w-5/6 appearance-none bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" type="text" value={ContractInfoData.bank}/>
                    </div>
                </div>
                <div className="-mx-3 md:flex mb-6">
                    <div className="flex md:w-full px-3 items-center">
                        <label className="w-1/12 tracking-wide text-grey-darker text-m mb-2">
                            계좌번호
                        </label>
                            <input className="w-full appearance-none block bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="text" value={ContractInfoData.accountNumber}/>                        
                    </div>
                </div>
            </div>
        </div>
    )
}