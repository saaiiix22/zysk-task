import React from "react";

const Start=()=>{
    return(
        <div className="h-[374px] w-[100%] flex justify-center items-center flex-col gap-3 bg-[#F9FAFB]">
            <h1 className="font-[600] text-[36px]">Start your free trial</h1>
            <p className="text-[20px] text-[400] text-[#475467]">Join over 4,000+ startups already growing with Untitled.</p>
            <br />
            <div className="h-[48px] w-[269px] flex justify-between">
                <button className="h-[100%] w-[128px] bg-white text-[#344054] font-[600] border-2 border-[#D0D5DD] rounded-[8px]">Learn more</button>
                <button className="h-[100%] w-[128px] bg-[#7F56D9] rounded-[8px] text-white">Get started</button>
            </div>
        </div>
    )
}
export default Start