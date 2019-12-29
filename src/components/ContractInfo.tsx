
import React from 'react';
import { storeContext } from '../context';
import { useObserver } from 'mobx-react-lite';
import { ContractInfo } from '../store';
import { useRootData } from '../hooks';

export const ContractInfoView: React.FC<{ contractInfo: ContractInfo }> = ({ contractInfo }) => {
    return (
        <div className="max-w-6xl m-auto mt-20">
            <h1 className="text-4xl mb-10">계약 정보</h1>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                <div className="-mx-3 flex mb-6 items-center">
                    <div className="flex w-1/2 px-3 mb-6 md:mb-0 align-middle items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            시작일
                        </label>
                        <input className="w-5/6 appearance-none  bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" type="text" value={contractInfo.startDate.toLocaleString('ko-KR')} />
                    </div>
                    <div className="flex w-1/2 px-3 items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            종료일
                        </label>
                        <input className="w-5/6 appearance-none bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" type="text" value={contractInfo.endDate.toLocaleString('ko-KR')} />
                    </div>
                </div>
                <div className="-mx-3 md:flex mb-6">
                    <div className="flex md:w-full px-3 items-center">
                        <label className="w-1/12 tracking-wide text-grey-darker text-m mb-2">
                            계약기간
                        </label>
                        <span className="w-11/12 appearance-none block bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3">
                            {contractInfo.duration} 개월
                        </span>

                    </div>
                </div>
                <div className="-mx-3 flex mb-6 items-center">
                    <div className="flex w-1/2 px-3 mb-6 md:mb-0 align-middle items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            소정근로시간
                        </label>
                        <span
                            className="block h-12 w-5/6 bg-white border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded">
                            {(contractInfo.workTime.endDate.getTime() - contractInfo.workTime.startDate.getTime()) / 3600000} 시간
                        </span>
                    </div>
                    <div className="flex w-1/2 h-12 px-3 items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            근무시간
                        </label>
                        <div className="w-5/6 h-12 appearance-none  bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3">
                            <span>{contractInfo.workTime.startDate.toLocaleTimeString('ko-KR')} ~ {contractInfo.workTime.endDate.toLocaleTimeString('ko-KR')}</span>
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
                                contractInfo.workDay.map(d => {
                                    return (
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
                            <span>{contractInfo.legalHoliday}</span>
                        </div>
                    </div>
                </div>
                <div className="-mx-3 flex mb-6 items-center">
                    <div className="flex w-1/2 px-3 mb-6 md:mb-0 align-middle items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            시급
                        </label>
                        <div className="w-5/6 appearance-none  bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3">
                            <span>{contractInfo.HourlyPay} 원</span>
                        </div>
                    </div>
                    <div className="flex w-1/2 px-3 items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            라이더 수당
                        </label>
                        <div className="w-5/6 appearance-none  bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3">
                            <span>{contractInfo.HourlyPay} 원</span>
                        </div>
                    </div>
                </div>
                <div className="-mx-3 md:flex mb-6">
                    <div className="flex md:w-full px-3 items-center">
                        <label className="w-1/12 tracking-wide text-grey-darker text-m mb-2">
                            보건증번호
                        </label>
                        <div className="w-5/6 appearance-none  bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3">
                            <span>{contractInfo.healthCertificate.number}</span>
                        </div>
                    </div>
                </div>
                <div className="-mx-3 flex mb-6 items-center">
                    <div className="flex w-1/2 px-3 mb-6 md:mb-0 align-middle items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            발급일
                        </label>
                        <div className="w-5/6 appearance-none  bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3">
                            <span>{contractInfo.healthCertificate.issueDate.toLocaleString('ko-KR')}</span>
                        </div>
                    </div>
                    <div className="flex w-1/2 px-3 items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            갱신일
                        </label>
                        <div className="w-5/6 appearance-none  bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3">
                            <span>{contractInfo.healthCertificate.updateDate.toLocaleString('ko-KR')}</span>
                        </div>
                    </div>
                </div>
                <div className="-mx-3 md:flex mb-6">
                    <div className="flex md:w-full px-3 items-center">
                        <label className="w-1/12 tracking-wide text-grey-darker text-m mb-2">
                            보유면허
                        </label>
                        <div className="w-5/6 appearance-none  bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3">
                            <span>{contractInfo.license.number}</span>
                        </div>
                    </div>
                </div>
                <div className="-mx-3 flex mb-6 items-center">
                    <div className="flex w-1/2 px-3 mb-6 md:mb-0 align-middle items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            발급일
                        </label>
                        <div className="w-5/6 appearance-none  bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3">
                            <span>{contractInfo.license.issueDate.toLocaleString('ko-KR')}</span>
                        </div>
                    </div>
                    <div className="flex w-1/2 px-3 items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            갱신일
                        </label>
                        <div className="w-5/6 appearance-none  bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3">
                            <span>{contractInfo.license.updateDate.toLocaleString('ko-KR')}</span>
                        </div>
                    </div>
                </div>

                <div className="-mx-3 flex mb-6 items-center">
                    <div className="flex w-1/2 px-3 mb-6 md:mb-0 align-middle items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            예금주
                        </label>
                        <input className="w-5/6 appearance-none  bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" type="text" value={contractInfo.accountHolder} />
                    </div>
                    <div className="flex w-1/2 px-3 items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            은행명
                        </label>
                        <input className="w-5/6 appearance-none bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" type="text" value={contractInfo.bank} />
                    </div>
                </div>
                <div className="-mx-3 md:flex mb-6">
                    <div className="flex md:w-full px-3 items-center">
                        <label className="w-1/12 tracking-wide text-grey-darker text-m mb-2">
                            계좌번호
                        </label>
                        <input className="w-full appearance-none block bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" type="text" value={contractInfo.accountNumber} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export const ContractInfoList = () => {
    const contractInfo = useRootData(store => store.contractInfo)
    return useObserver(() => {
        return <ContractInfoView contractInfo={contractInfo} />
    })
}