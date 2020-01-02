import React, { createRef } from 'react';
import { useRootData } from '../hooks';
import { useObserver } from 'mobx-react-lite';
import { Section } from '../store'

export const Sidebar: React.FC<{ sidebarList: Section[] }> = ({ sidebarList }) => {


    let renderSidebarLink = (section) => {
        console.log('section', section)
        return (
            <div key={section.id}>
                <a href={`#${section.id}`}>{section.label}</a>
            </div>
        )
    }

    return (
        <div className="fixed w-64 m-auto my-2 overflow-auto text-right bg-white shadow">
            <ul className="list-reset">
                {
                    sidebarList.map((l) => {
                        return (
                            <li className="block p-4 border-r-4 border-red-600 text-gray-darker hover:bg-gray-200">
                                {renderSidebarLink(l)}
                            </li>
                        )
                    })
                }
                {/* <li >
                    <a
                        href="#"
                        className="block p-4 border-r-4 border-red-600 text-gray-darker hover:bg-gray-200"
                        onClick={handleScroll}
                    >
                        프로필
                    </a>
                </li>
                <li >
                    <a
                        href="#"
                        className="block p-4 border-r-4 border-red-200 text-gray-darker hover: hover:bg-gray-200"
                        onClick={handleScroll}>인적사항</a>
                </li>
                <li >
                    <a href="#" className="block p-4 border-r-4 border-red-200 text-gray-darker hover: hover:bg-gray-200">학력 및 경력</a>
                </li>
                <li >
                    <a href="#" className="block p-4 border-r-4 border-red-200 text-gray-darker hover: hover:bg-gray-200">계약 정보</a>
                </li>
                <li >
                    <a href="#" className="block p-4 border-r-4 border-red-200 text-gray-darker hover: hover:bg-gray-200">교육 이력</a>
                </li> */}
            </ul>
        </div>
    )
}

export const SidebarLinkList = () => {
    const sidebarList = useRootData(store => store.sectionLink);
    return useObserver(() => {
        return <Sidebar sidebarList={sidebarList} />
    })
}