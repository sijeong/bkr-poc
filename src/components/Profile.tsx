import React from 'react';
import { useRootData } from '../hooks';
import { useObserver } from 'mobx-react-lite';
import { profileInfo } from '../store';

export const Profile: React.FC<{ profile: profileInfo }> = ({ profile }) => {
    return (
        <div className="max-w-6xl m-auto">
            <h1 className="mb-10 text-4xl">프로필</h1>
            <div className="flex w-full px-8 pt-6 pb-8 m-auto bg-white rounded shadow-md">
                <div className="flex items-center w-auto bg-indigo-100">
                    <img className="w-32 h-32 ml-5 rounded-full" src={require('../img/dummy.jpg')} />
                    <div className="px-8 py-4 ml-8 mr-8 text-base text-white bg-orange-400 text-center">
                        <span>{profile.position.toUpperCase()} {profile.name}</span>
                    </div>
                </div>

                <div className="w-2/3 ml-6">
                    <div className="flex items-center -mx-3">
                        <div className="flex items-center w-1/2 px-3 mb-6 align-middle md:mb-0">
                            <label className="w-1/6 mb-2 tracking-wide text-grey-darker text-m">
                                광역
                        </label>
                            <input className="w-5/6 px-4 py-3 mb-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-red" type="text" value={profile.wideArea} />
                        </div>
                        <div className="flex items-center w-1/2 px-3">
                            <label className="w-1/6 mb-2 tracking-wide text-grey-darker text-m">
                                지역
                        </label>
                            <input className="w-5/6 px-4 py-3 mb-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-grey-lighter" type="text" value={profile.smallArea} />
                        </div>
                    </div>
                    <div className="flex items-center -mx-3">
                        <div className="flex items-center w-1/2 px-3 mb-6 align-middle md:mb-0">
                            <label className="w-1/6 mb-2 tracking-wide text-grey-darker text-m">
                                매장
                        </label>
                            <input className="w-5/6 px-4 py-3 mb-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-red" type="text" value={profile.store} />
                        </div>
                        <div className="flex items-center w-1/2 px-3">
                            <label className="w-1/6 mb-2 tracking-wide text-grey-darker text-m">
                                직책
                        </label>
                            <input className="w-5/6 px-4 py-3 mb-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-grey-lighter" type="text" value={profile.position} />
                        </div>
                    </div>
                    <div className="flex items-center -mx-3">
                        <div className="flex items-center w-1/2 px-3 mb-6 align-middle md:mb-0">
                            <label className="w-1/6 mb-2 tracking-wide text-grey-darker text-m">
                                입사일
                        </label>
                            <input className="w-5/6 px-4 py-3 mb-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-red" value={profile.joinDate.toLocaleDateString("ko-KR")} />
                        </div>
                        <div className="flex items-center w-1/2 px-3">
                            <label className="w-1/6 mb-2 tracking-wide text-grey-darker text-m">
                                퇴사일
                        </label>
                            <input className="w-5/6 px-4 py-3 mb-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-grey-lighter" value={profile.resignationDate.toLocaleDateString("ko-KR")} />
                        </div>
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