import React from "react";
import content from '../images/Content.png';
import icon1 from "../images/Featured icon.png"
import icon2 from "../images/Featured icon-1.png"
import icon3 from "../images/Featured icon-2.png"
import arrow from "../images/arrow-right.png"

const More=()=>{

    const lists = [
        {
            logo:icon1,
            name:"Share team inboxes",
            text:"Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
        },
        {
            logo:icon2,
            name:"Deliver instant answers",
            text:"An all-in-one customer service platform that helps you balance everything your customers need to be happy."
        },
        {
            logo:icon3,
            name:"Manage your team with reports",
            text:"Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
        }
    ]

    return(
        <div className="h-[1300px] w-[100%] flex justify-center items-center  flex-col">
            <div className="w-[768px] h-[168px] text-center flex justify-center items-center flex-col">
                <p className="text-[#6941C6] h-[23px] w-[83px] rounded-[16px] bg-[#E9D7FE] text-[14px] font-[600]" >Features</p>
                <h1 className="text-[36px] font-[600]">Cutting-edge features for advanced analytics</h1>
                <p className="text-[20px]">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
            </div>


            <img className="h-[558px] w-[1000px]" src={content} alt="" />


            <div className="h-[222px] w-[80%] flex justify-around items-center">
            {
                lists.map((i,index)=>{
                    return(
                        <div key={index} className="h-[100%] w-[386px] flex flex-col justify-center items-center text-center gap-3">
                            <img src={i.logo} alt="" className="h-[48px] w-[48px]" />
                            <h1 className="text-[20px] font-[600]">{i.name}</h1>
                            <p className="text-[16px] font-[400]">{i.text}</p>
                            <p className="text-[#6941C6] h-[24px] flex justify-center items-center font-[600]">Learn more 
                                <img src={arrow} className="h-[20px] w-[20px]" alt="" />
                            </p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}
export default More