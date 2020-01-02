import React from 'react';
import { Menu } from '../components/Menu';
import { Footer } from '../components/Footer';

export const Login = () => {
    return (
        <div className="w-full">
            <Menu />
            <div className="flex h-full max-w-md p-10 mx-auto my-32 mt-56 overflow-hidden bg-white rounded-lg shadow contianer xl:max-w-5xl">
                <div className="relative hidden h-full xl:block xl:w-1/2">
                    <img src={require('../img/burgerKing.png')} />
                </div>
                <div className="w-full p-8 xl:w-1/2">
                    <form method="post" action="#">
                        <h1 className="text-2xl font-bold">LOGIN</h1>
                        <div className="mt-6 mb-4">
                            <label className="block mb-2 text-sm font-semibold text-gray-700">ID</label>
                            <input
                                className="w-full h-10 px-3 py-2 text-sm leading-tight text-gray-700 bg-gray-200 rounded appearance-none focus:outline-none focus:shadow-outline"
                                id="ID"
                                type="text"
                                placeholder="아이디를 입력하세요."
                            />
                        </div>
                        <div className="mt-6 mb-6">
                            <label className="block mb-2 text-sm font-semibold text-gray-700">
                                Password
                            </label>
                            <input
                                className="w-full h-10 px-3 py-2 mb-1 text-sm leading-tight text-gray-700 bg-gray-200 rounded appearance-none focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="비밀번호를 입력하세요."
                            />
                            <a
                                className="inline-block text-sm text-gray-600 align-baseline hover:text-gray-800"
                                href="#"
                            >
                                비밀번호 찾기
                            </a>
                        </div>
                        <div className="flex w-full mt-8">
                            <button
                                className="w-full h-10 px-4 py-2 text-lg font-semibold text-white bg-gray-800 rounded hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                로그인
                            </button>
                        </div>
                    </form>

                </div>
            </div>
            <Footer />
        </div>
    )
}