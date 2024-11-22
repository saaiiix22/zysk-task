import React from "react";
import sisyphus from "../images/sisyphus.png"
import logotype from "../images/Logotype.png"
import avatar from '../images/Avatar.png';

const Sisyphus=()=>{
    return(
        <div className="h-[552px] w-[100%] flex flex-col justify-center items-center bg-[#F9FAFB]">
            <div className="h-[360px] w-[80%] flex flex-col justify-center items-center">
            <div className="h-[40px] w-[140px] flex justify-center items-center gap-3">
                <img src={sisyphus} className="h-[40px] w-[24px]" alt="" />
                <img src={logotype} alt="" />
            </div>
            <h1 className="text-[48px] w-[70%] text-center">We’ve been using Untitled to kick start every new project and can’t imagine working without it.</h1>
            <div className="h-[136px] w-[70%] flex flex-col  justify-around items-center mt-3 ">
                <img className="h-[64px] w-[64px]" src={avatar} alt="" />
                <p className="text-[18px] font-[600]">Candice Wu</p>
                <p className="text-[16px] font-[400]">Product Manager, Sisyphus</p>
            </div>
            </div>
        </div>
    )
}
export default Sisyphus