import React from "react";
import icon from "../images/Icon wrap.png"
import del from "../images/delete.png"
import group from "../images/Avatar group.png"

const Questions=()=>{

    const questionList = [
        "Can I change my plan later?","What is your cancellation policy?","Can other info be added to an invoice?",
        "How does billing work?","How do I change my account email?"
    ]

    return(
        <div className="h-[1216px] w-[100%] flex flex-col justify-center items-center">
            <div className="w-[1280px] h-[94px] flex flex-col justify-center items-center">
                <h1 className="text-[36px] font-[600]">Frequently asked questions</h1>
                <p className="text-[20px]">Everything you need to know about the product and billing.</p>
            </div>
            <div className="h-[504px] w-[1280px] flex flex-col justify-center items-center">
                    <div className="h-[84px] w-[768px]">
                        <div className="flex justify-between">
                            <p className="text-[18px] font-[600]">Is there a free trial available?</p>
                            <img src={del} alt="" />    
                        </div>
                            <p className="text-[16px]">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
                    </div>
                    {questionList.map((i,index)=>{
                        return(
                            <div key={index} className="h-[52px] w-[768px] flex justify-between items-center border-t-[1px]">
                                <p className="text-[18px] font-[600]">{i}</p>
                                <img src={icon} alt="" />
                            </div>
                        )
                    })}
            </div>
            <div className="h-[298px] w-[1280px] flex justify-center items-center">
                <div className="h-[100%] w-[1216px] flex flex-col justify-center items-center bg-[#F9FAFB] gap-5">
                    <img src={group} alt="" />
                    <h1 className="text-[20px] font-[600]">Still have questions?</h1>
                    <p className="text-[18px] font-[400]">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                    <button className="h-[48px] w-[134px] bg-[#7F56D9] rounded-[8px] text-white font-[600] text-[16px]">Get in touch</button>
                </div>
            </div>
        </div>
    )
}
export default Questions