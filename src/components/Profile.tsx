import React from 'react';
import { useRootData } from '../hooks';
import { useObserver } from 'mobx-react-lite';
import {profileInfo} from '../store';

export const Profile: React.FC<{profile: profileInfo}> = ({profile}) => {
    return (
        <div className="px-32 py-20 flex justify-center">
            <div className="flex items-center bg-gray-200">
                <img className="rounded-full ml-5 w-32 h-32" src={require('../img/dummy.jpg')} />
                <div className="ml-8 mr-8 bg-orange-400 px-8 py-4 text-white text-base">
                    <span>{profile.position.toUpperCase()} {profile.name}</span>
                </div>
            </div>

            <div className="w-1/3 ml-6">
                <div className="-mx-3 flex items-center">
                    <div className="flex w-1/2 px-3 mb-6 md:mb-0 align-middle items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            광역
                        </label>
                        <input className="w-5/6 appearance-none  bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" type="text" value={profile.wideArea} />
                    </div>
                    <div className="flex w-1/2 px-3 items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            지역
                        </label>
                        <input className="w-5/6 appearance-none bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" type="text" value={profile.smallArea}/>
                    </div>
                </div>
                <div className="-mx-3 flex items-center">
                    <div className="flex w-1/2 px-3 mb-6 md:mb-0 align-middle items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            매장
                        </label>
                        <input className="w-5/6 appearance-none  bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" type="text" value={profile.store} />
                    </div>
                    <div className="flex w-1/2 px-3 items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            직책
                        </label>
                        <input className="w-5/6 appearance-none bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" type="text" value={profile.position} />
                    </div>
                </div>
                <div className="-mx-3 flex items-center">
                    <div className="flex w-1/2 px-3 mb-6 md:mb-0 align-middle items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            입사일
                        </label>
                        <input className="w-5/6 appearance-none  bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" value={profile.joinDate.toLocaleString('ko-KR')} />
                    </div>
                    <div className="flex w-1/2 px-3 items-center">
                        <label className="w-1/6 tracking-wide text-grey-darker text-m mb-2">
                            퇴사일
                        </label>
                        <input className="w-5/6 appearance-none bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" value={profile.resignationDate.toLocaleString('ko-KR')} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export const ProfileInfoList = () => {
    const profileInfo = useRootData(store => store.profileInfo);
    return useObserver(() => {
        return <Profile profile={profileInfo} />
    })
}