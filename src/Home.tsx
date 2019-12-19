import React from "react";

export const Home = () => {
    return (
        <div className="flex justify-center">
            <form>
                <div className="border border-black">
                    <label>이름</label>
                    <input></input>
                </div>
                <div className="border border-black border-t-0">
                    <label>영문</label>
                    <input></input>
                </div>
                <div className="border border-black border-t-0">
                    <label>사번</label>
                    <input></input>
                </div>
                <div className="flex border border-black border-t-0">
                    <div className="">
                        <label className="bg-gray-200">주민번호</label>
                        <input></input>
                    </div>
                    <div>
                        <label className="bg-gray-200">미성년자여부</label>
                        <input></input>
                    </div>
                </div>



            </form>
        </div>
    );
};
