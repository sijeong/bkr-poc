import React from 'react';

export const Sidebar = () => {
    return (
        <div className="fixed w-64 m-auto my-2 overflow-auto text-right bg-white shadow">
            <ul className="list-reset">
                <li >
                    <a href="#" className="block p-4 border-r-4 border-red-600 text-gray-darker hover:bg-gray-200">프로필</a>
                </li>
                <li >
                    <a href="#" className="block p-4 border-r-4 border-red-200 text-gray-darker hover: hover:bg-gray-200">인적사항</a>
                </li>
                <li >
                    <a href="#" className="block p-4 border-r-4 border-red-200 text-gray-darker hover: hover:bg-gray-200">학력 및 경력</a>
                </li>
                <li >
                    <a href="#" className="block p-4 border-r-4 border-red-200 text-gray-darker hover: hover:bg-gray-200">계약 정보</a>
                </li>
                <li >
                    <a href="#" className="block p-4 border-r-4 border-red-200 text-gray-darker hover: hover:bg-gray-200">교육 이력</a>
                </li>
            </ul>
        </div>
    )
}
