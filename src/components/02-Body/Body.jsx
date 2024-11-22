import React, { Fragment } from "react";
import body from "../images/body.png"
import icon from "../images/Icon.png"
import comp1 from "../images/comp1.png"
import comp2 from "../images/comp2.png"
import comp3 from "../images/comp3.png"
import comp4 from "../images/comp4.png"
import comp5 from "../images/comp5.png"
import comp6 from "../images/comp6.png"


const Body=()=>{

    const lists = [
        comp1,comp2,comp3,comp4,comp5,comp6
    ]
    

    return(
        <>
        
        <main className="body h-[1032px] w-[100%] flex flex-col justify-center items-center gap-[25px]">
            <div className="w-[355px] h-[32px]">
                <p className="h-[100%] w-[100%] bg-[#F9F5FF] rounded-[16px] font-[500] text-[#6941C6] flex justify-around items-center">
                    <span className="bg-white w-[102px] h-[24px] rounded-[16px] grid place-items-center">features</span>
                    Check out the team dashboard
                </p>
            </div>
            <div className="h-[132px] w-[1024px] flex flex-col justify-center items-center">
                <h1 className="text-[60px] font-[600]">Beautiful analytics to grow smarter</h1>
                <p className="h-[60px] w-[768px] text-[20px] font-[400] text-center text-[#475467]">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
            </div>
            <div className="btns h-[60px] w-[270px] flex justify-around items-center ">
                <button className="h-[60px] w-[122px] font-[600] text-[18px] rounded-[16px] border-2 border-[#D0D5DD] flex justify-center items-center gap-2 "><img src={icon} alt="" />Demo</button>
                <button className="h-[60px] w-[122px] bg-[#7F56D9] font-[600] text-[18px] rounded-[16px] text-white">Sign up</button>
            </div>
            <div className="h-[560px] w-[100%] flex justify-center items-center chart">
                <img src={body} alt="" className="h-[100%] w-[1216px]" />
            </div>
        </main>
        <div className="company h-[296px] w-[100%] flex justify-center items-center gap-5 flex-col">
            <p className="text-[16px] text-[#475467] font-[600]">Join 4,000+ companies already growing</p>
            <div className="commpanies h-[48px] w-[80%] flex justify-center items-center gap-2">
                {lists.map((i,index)=>{
                    return(
                        <Fragment key={index}>
                            <img className="h-[48px] w-[auto]" src={i} alt="" />
                        </Fragment>
                    )
                })}
            </div>
        </div>
    </>
    )
}
export default Body